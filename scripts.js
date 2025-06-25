var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true, 
        markers: true,
    },
});

tl.to(
    '#fanta',
    {
        top: '120%',
        left: '0%',
    },
    'orange'
);

tl.to(
    '#laranja-cortada',
    {
        top: '160%',
        rotate: '530deg',
        left: '23%',
    },
    'orange'
);

tl.to(
    '#laranja',
    {
        width: '15%',
        top: '160%',
        right: '10%',
    },
    'orange'
);

tl.to(
    '#folha',
    {
        top: '110%',
        rotate: '530deg',
        left: '70%',
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        top: '110%',
        rotate: '530deg',
        left: '0%',
    },
    'orange'
);

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true, 
        markers: true,
    },
});

tl2.from(
    '.lemon1',
    {
        top: '110%',
        rotate: '-90deg',
        left: '-100%',
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        top: '110%',
        rotate: '-90deg',
        left: '-100%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        top: '110%',
        rotate: '90deg',
        left: '100%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        top: '110%',
        rotate: '90deg',
        left: '100%',
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        top: '204%',
        width: '18%',
        left: '42%',
    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        top: '212%',
        width: '35%',
        left: '33%',
    },
    'ca'
);
