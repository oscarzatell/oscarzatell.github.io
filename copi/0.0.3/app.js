const copi = () => {
    const content = document.getElementById('codigo');
    content.select();
    document.execCommand('copy');
}
document.getElementById('btn').onclick = copi
