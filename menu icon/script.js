document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const options = document.querySelector('.options');
    const menu = document.querySelector('#menu');

    container.addEventListener('click', function (event) {
        event.stopPropagation();
        container.classList.toggle('change');
        options.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target)) {
            container.classList.remove('change');
            options.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.btn').onclick = function(){
        document.querySelector('.arrow').style.translateX ='50px'
    };
}
)
