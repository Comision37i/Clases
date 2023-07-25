/* const lista1 = document.querySelector('#lista1'); */
/* console.log(lista1.outerHTML) */

setTimeout(() => {
    const lista1 = document.querySelector('#lista1');
    lista1.innerHTML = `
    <ol>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
    </ol>`
}, 10000)
