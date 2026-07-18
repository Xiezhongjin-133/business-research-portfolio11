import { NextResponse } from 'next/server'

const JOKE_API = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=json'

export async function GET() {
  try {
    const res = await fetch(JOKE_API, { cache: 'no-store' })
    if (!res.ok) {
      return NextResponse.json({ error: 'Upstream error' }, { status: 502 })
    }

    const data = await res.json()

    const normalized =
      data.type === 'twopart'
        ? {
            type: 'twopart',
            setup: data.setup ?? null,
            delivery: data.delivery ?? null,
            id: data.id ?? null,
            source: 'jokeapi',
          }
        : {
            type: 'single',
            joke: data.joke ?? null,
            id: data.id ?? null,
            source: 'jokeapi',
          }

    return NextResponse.json(normalized)
  } catch (err) {
    console.error('API /api/joke error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
