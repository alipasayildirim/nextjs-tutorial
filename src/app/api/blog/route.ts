

export async function GET() {

    const posts = [
        { id: 1, title: "Next.js 15 New Features", content: "Details about Server Components and Data Fetching." },
        { id: 2, title: "Migrating to React 18", content: "Updates with Concurrent Mode and Suspense." },
        { id: 3, title: "Modern UI with TailwindCSS", content: "Advantages of Utility-first CSS approaches." },
      ];

    return new  Response(JSON.stringify(posts),{
        status:200,
        headers: { "Content-Type": "application/json" },

    })

    
}