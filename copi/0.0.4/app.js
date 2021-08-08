let x = "codigo";// id de boton
let b = "btn";// id de textarea

const id = Id => document.getElementById(Id);

const copi = () => {
    const content = id(x);
    content.select();
    document.execCommand('copy');
};

id(b).onclick = copi;