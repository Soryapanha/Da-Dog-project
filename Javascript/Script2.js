window.onload = () => {
  const runAllScripts = () => {
    initializeAllSliders();
  };

  const listenForUrlChanges = () => {
    let url = location.href;
    document.body.addEventListener(
      "click",
      () => {
        requestAnimationFrame(() => {
          if (url !== location.href) {
            runAllScripts();
            url = location.href;
          }
        });
      },
      true
    );
  };

  const initializeAllSliders = () => {
    const allSliders = document.querySelectorAll('[data-type="slider"]');
    allSliders.forEach((carrousel) => {
      initializeSlider(carrousel);
    });
  };

  const initializeSlider = (carrousel) => {
    let currentSlide = 0;

    const slides = carrousel.querySelectorAll('[data-type="slide"]');
    const nextSlideBtns = carrousel.querySelectorAll(
      '[data-action="nextSlide"]'
    );
    const previousSlideBtns = carrousel.querySelectorAll(
      '[data-action="previousSlide"]'
    );

    const changeSlide = (slideIndex, action) => {
      currentSlide = slideIndex;

      switch (action) {
        case "next":
          slideIndex === slides.length - 1
            ? (currentSlide = 0)
            : currentSlide++;
          break;
        case "previous":
          slideIndex === 0
            ? (currentSlide = slides.length - 1)
            : currentSlide--;
      }

      carrousel.style.transform = `translateX(${-100 * currentSlide}%)`;
    };

    previousSlideBtns.forEach((btn) => {
      btn.addEventListener("click", () =>
        changeSlide(currentSlide, "previous")
      );
    });

    nextSlideBtns.forEach((btn) => {
      btn.addEventListener("click", () =>
        changeSlide(currentSlide, "next")
      );
    });
  };

  runAllScripts();
};