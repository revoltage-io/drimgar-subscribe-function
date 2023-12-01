addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/submit")) {
    // handle your path accordingly
    const formData = await request.json();
    // You would add your logic to process the form data here
    return new Response(`Thanks ${formData.name ? formData.name : ''}`, {
      headers: { 'Content-Type': 'text/plain' },
    });
  } else {
    return new Response('Not Found', { status: 404 });
  }
}
