const $a = str => document.querySelector(str);

(function () {
    if (!window.app) {
        window.app = {};
    }
    app.photoCarousel = {
        removeClass: function (el, classname = '') {
            if (el) {
                if (classname === '') {
                    el.className = '';
                } else {
                    el.classList.remove(classname);
                }
                return el;
            }
            return;
        },
        reorder: function () {
            let childcnt = $a("#photoCarousel").children.length;
            let childs = $a("#photoCarousel").children;

            for (let j = 0; j < childcnt; j++) {
                childs[j].dataset.pos = j;
            }
        },
        move: function (el) {
            let selected = el;

            if (typeof el === "string") {
                selected = (el == "next") ? $a(".selected").nextElementSibling : $a(".selected").previousElementSibling;
            }

            let curpos = parseInt(app.selected.dataset.pos);
            let tgtpos = parseInt(selected.dataset.pos);

            let cnt = curpos - tgtpos;
            let dir = (cnt < 0) ? -1 : 1;
            let shift = Math.abs(cnt);

            for (let i = 0; i < shift; i++) {
                let el = (dir == -1) ? $a("#photoCarousel").firstElementChild : $a("#photoCarousel").lastElementChild;

                if (dir == -1) {
                    el.dataset.pos = $a("#photoCarousel").children.length;
                    $a('#photoCarousel').append(el);
                } else {
                    el.dataset.pos = 0;
                    $a('#photoCarousel').prepend(el);
                }

                app.photoCarousel.reorder();
            }


            app.selected = selected;
            let next = selected.nextElementSibling;// ? selected.nextElementSibling : selected.parentElement.firstElementChild;
            var prev = selected.previousElementSibling; // ? selected.previousElementSibling : selected.parentElement.lastElementChild;
            var prevSecond = prev ? prev.previousElementSibling : selected.parentElement.lastElementChild;
            var nextSecond = next ? next.nextElementSibling : selected.parentElement.firstElementChild;

            selected.className = '';
            selected.classList.add("selected");

            app.photoCarousel.removeClass(prev).classList.add('prev');
            app.photoCarousel.removeClass(next).classList.add('next');

            app.photoCarousel.removeClass(nextSecond).classList.add("nextRightSecond");
            app.photoCarousel.removeClass(prevSecond).classList.add("prevLeftSecond");

            app.photoCarousel.nextAll(nextSecond).forEach(item => { item.className = ''; item.classList.add('hideRight') });
            app.photoCarousel.prevAll(prevSecond).forEach(item => { item.className = ''; item.classList.add('hideLeft') });

        },
        nextAll: function (el) {
            let els = [];

            if (el) {
                while (el = el.nextElementSibling) { els.push(el); }
            }

            return els;

        },
        prevAll: function (el) {
            let els = [];

            if (el) {
                while (el = el.previousElementSibling) { els.push(el); }
            }


            return els;
        },
        keypress: function (e) {
            switch (e.which) {
                case 37: // left
                    app.photoCarousel.move('prev');
                    break;

                case 39: // right
                    app.photoCarousel.move('next');
                    break;

                default:
                    return;
            }
            e.preventDefault();
            return false;
        },
        select: function (e) {
            // let tgt = e.target;
            // while (!tgt.parentElement.classList.contains('photoCarousel')) {
            //     tgt = tgt.parentElement;
            // }

            // app.photoCarousel.move(tgt);

        },
        previous: function (e) {
            app.photoCarousel.move('prev');
        },
        next: function (e) {
            app.photoCarousel.move('next');
        },
        doDown: function (e) {
            app.photoCarousel.state.downX = e.x;
        },
        doUp: function (e) {
            let direction = 0,
                velocity = 0;

            if (app.photoCarousel.state.downX) {
                direction = (app.photoCarousel.state.downX > e.x) ? -1 : 1;
                velocity = app.photoCarousel.state.downX - e.x;

                if (Math.abs(app.photoCarousel.state.downX - e.x) < 10) {
                    app.photoCarousel.select(e);
                    return false;
                }
                if (direction === -1) {
                    app.photoCarousel.move('next');
                } else {
                    app.photoCarousel.move('prev');
                }
                app.photoCarousel.state.downX = 0;
            }
        },
        init: function () {
            document.addEventListener("keydown", app.photoCarousel.keypress);
            $a('#photoCarousel').addEventListener("click", app.photoCarousel.select, true);
            $a("#photoCarousel").addEventListener("mousedown", app.photoCarousel.doDown);
            $a("#photoCarousel").addEventListener("touchstart", app.photoCarousel.doDown);
            $a("#photoCarousel").addEventListener("mouseup", app.photoCarousel.doUp);
            $a("#photoCarousel").addEventListener("touchend", app.photoCarousel.doup);

            app.photoCarousel.reorder();
            $a('#prev').addEventListener("click", app.photoCarousel.previous);
            $a('#next').addEventListener("click", app.photoCarousel.next);
            app.selected = $a(".selected");

        },
        state: {}

    }
    app.photoCarousel.init();
})();