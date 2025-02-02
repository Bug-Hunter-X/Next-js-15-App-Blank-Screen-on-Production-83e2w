```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Next.js 15 App</h1>
    </div>
  );
}
```

```javascript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone'
}

module.exports = nextConfig
```