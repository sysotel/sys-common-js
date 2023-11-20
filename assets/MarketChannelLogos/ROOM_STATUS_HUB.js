const ROOM_STATUS_HUB_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 595.3 595.3" viewBox="0 0 595.3 595.3"><path d="M297.6 595.3C133.3 595.3 0 462 0 297.6 0 133.3 133.3 0 297.6 0 462 0 595.3 133.3 595.3 297.6c0 164.4-133.3 297.7-297.7 297.7" style="fill:#fff"/><path d="M506.6 296.8c-.3 8.7-3.1 16.3-9 22.6-13.2 13.6-26.4 26.8-39.6 40.3-1.4 1.4-2.4 1.7-4.2 0-5.6-5.6-11.5-11.1-17-16.7-1.4-1.4-1.4-2.4 0-3.8l24-24c10.8-10.8 10.8-25.7 0-36.5-8-8-16.3-16-24.3-24-1.4-1.4-1.4-2.4 0-3.8 5.9-5.9 11.5-11.8 17.4-17.4 1-1 1.7-1 2.8 0 8 8 16.3 16 24.3 24 5.6 5.2 11.1 10.8 16.3 16 6.2 6.6 9 14.6 9.3 23.3" style="fill:#0092c6"/><linearGradient id="a" x1="88.655" x2="420.436" y1="297.626" y2="297.626" gradientTransform="matrix(1 0 0 -1 0 595.276)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#ff4102"/><stop offset="1" style="stop-color:#ff6c02"/></linearGradient><path d="m240.8 236.7-.7-.7c.4.3.7.3.7.7M262 337.4c-7.3-7.3-14.6-14.2-21.9-21.5-4.9-4.9-7.3-10.8-7.3-19.1.3-4.9 2.4-10.8 6.9-15.3 7.3-7.3 14.2-14.6 21.5-21.9 1-1 1.7-1.4 3.1-.3 0 0-19.5-19.1-23.6-22.9.7.7.7 1.7-.7 2.8-11.8 11.8-23.3 23.6-35.1 35.4-5.6 5.9-9.4 12.5-10.1 20.8-1 10.8 2.4 19.8 10.1 27.1 10.8 10.8 21.5 21.2 32.7 32 1.4 1.4 2.8 2.8 4.5 4.2.7.7 1 1 .3 2.1l22.6-22.9c-1.2.9-1.9.6-3-.5m157.4 61.5c-11.8 12.2-24 24-35.8 36.1-3.5 3.5-6.6 6.9-10.1 10.1-5.6 4.9-12.2 7.6-19.5 8-.3 0-.7.3-1.4.3h-2.1c-.7 0-1-.3-1.7-.3-7.3-.7-13.9-3.5-19.5-8.3-3.8-3.5-7.3-6.9-11.1-10.8-13.9-13.6-27.4-27.1-41-40.7-1.4-1.4-2.1-1-3.1 0-10.1 10.1-20.2 20.2-29.9 30.6-11.5 11.5-29.2 11.8-40.7.7-16.7-16.3-33.4-32.7-50-49.3-14.6-14.2-28.8-28.5-43.1-42.4-3.1-3.1-5.9-5.9-9.4-9-6.3-5.6-11.1-12.5-12.5-21.2v-6.6c.7-2.8 1.4-5.6 2.4-8 2.1-4.9 5.6-8.3 9-12.2 16.7-17 33.7-34.1 50.7-51.1s33.7-34.4 50.4-51.4c11.8-11.8 29.2-12.2 41.3-.3 10.1 9.7 20.2 19.8 29.9 29.5 1.4 1.4 2.1 1.7 3.8 0 10.4-10.8 21.2-21.2 31.6-32 5.9-6.3 11.8-12.2 18.1-18.4 13.9-13.9 34.4-13.9 48.3 0 5.9 5.9 11.8 11.8 18.1 17.7 8.7 8.3 17 17 25.7 25.4 1.4 1.4 1.4 2.1 0 3.5-5.9 5.6-11.5 11.5-17 17.4-1.4 1.4-2.1 1.4-3.5 0-7.6-7.6-15.6-15.3-23.6-23.3-2.4-2.4-4.9-4.9-7.6-7.3-9-8.3-24-8-33 .7-12.2 12.2-24.3 24.7-36.5 36.8-1 1-.7 1.7 0 2.8 13.6 13.2 27.1 26.8 40.7 40 3.8 3.8 7.6 7.3 11.5 11.1 11.1 11.1 11.1 29.2 0 40.3-9.7 10.1-19.5 19.8-29.5 29.9-6.9 7.3-13.9 14.2-21.2 21.5-1.4 1.4-1.4 2.1 0 3.5 12.2 11.8 24 23.6 36.1 35.4 9.7 9.4 25 9.4 34.4-.3 9.7-9.7 19.5-19.5 28.8-29.2 2.1-2.1 2.1-2.1 4.5 0 5.6 5.6 11.5 11.1 17 16.7 1.9 2 1.9 2.7.5 4.1m-138.9-47.6c12.5-12.5 25-25.4 37.5-37.9 4.2-4.2 6.3-9 5.9-14.6 0-5.9-1.4-10.4-5.2-14.2-13.2-13.2-26.8-26.4-40.3-39.6-.3-.3-1-1.4-1.7-.7-.3.3-.3.7-.3 1l-21.9-21.5c.3 0 .7 0 1-.3.7-.7-.3-1.4-.7-2.1-5.9-5.9-12.2-12.2-18.1-17.7-9-8.3-21.2-8-29.9.7-14.9 15.3-29.9 30.6-45.2 45.9-11.5 11.5-22.9 23.3-34.4 34.7-4.2 4.2-5.9 9-5.9 14.9 0 6.9 3.5 11.8 8 16.7 16.7 16.3 33.4 32.7 50 49 9.7 9.4 19.1 19.1 28.8 28.5 4.2 4.2 9 6.3 14.6 5.9 6.3 0 11.1-2.1 15.3-6.3 5.9-5.9 11.8-12.2 17.7-18.1.3-.3 1.4-1 .7-1.7s-1-.3-1-.3c4.5-4.5 21.5-22.2 21.5-22.2 0 .3 0 .7.3.7 1.9 1.7 2.6-.1 3.3-.8" style="fill:url(#a)"/><linearGradient id="b" x1="123.791" x2="321.756" y1="296.678" y2="296.678" gradientTransform="matrix(1 0 0 -1 0 595.276)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#005b97"/><stop offset="1" style="stop-color:#0092c6"/></linearGradient><path d="M316.2 284.3c-8-8-16-15.6-24-23.6-3.5-3.5-8-7.6-8-7.6l-29.5-29.2c-.3 0-.7-.7-1-1l-5.2-5.2-10.8-10.8c-9.4-9.4-22.2-9-31.6.3-9.4 9.7-18.8 19.1-28.1 28.5-16 16.3-32 32.7-47.9 48.6-8.3 8.3-8.3 21.5.3 29.9 17.4 17 34.4 34.1 51.8 51.1 8.7 8.3 17 16.7 25.7 25s20.2 9.4 28.8 2.4c3.1-2.4 5.9-5.6 8.7-8.3l5.2-5.2 27.4-27.8c.3-.3.7-1 1.4-1.4l6.6-6.6s10.1-10.4 18.4-18.4c4.2-4.2 8.3-8.3 12.2-12.5 6.9-7.7 6.9-20.6-.4-28.2m-23.6 25.3c-6.9 6.9-13.6 13.9-20.5 20.8-2.4 2.4-4.5 4.9-6.9 7.3l-.3.3-22.6 22.9-.3.3-.3.3-3.8 3.8-.3.3-.3.3c-1.4 1.4-2.4 2.4-3.8 3.5-5.9 5.2-14.9 4.9-20.8-.7-12.2-11.8-24.3-24-36.5-35.8-7.6-7.6-15.3-15.3-22.9-22.6-3.1-3.1-4.5-6.6-4.5-11.1s1.7-8 4.9-11.1c8.7-8.7 17-17.4 25.7-26.1 10.8-10.8 21.5-21.9 32.3-32.7 6.6-6.6 16-6.6 22.6 0l39.3 38.6.3.3c6.6 6.3 12.9 12.5 19.1 18.8 5.9 6.7 5.9 16-.4 22.6" style="fill:url(#b)"/></svg>`;

export default ROOM_STATUS_HUB_SVG;