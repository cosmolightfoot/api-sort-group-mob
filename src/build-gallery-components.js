export default function renderHtmlMovieTemplate(movieObject){
    const html = /*html*/`<li>
    <h2>${movieObject.title}</h2>
    <img src="${movieObject.poster_path}">
    <h3>${movieObject.release_date}</h3>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}