function centeredBoxAnimate (step, size, callback, callbackData) {
  step = step + 4;

  ctx.fillStyle = "#FFF";
  ctx.fillRect(
    canvas.width / 2 - step,
    canvas.height / 2 - step,
    step * 2,
    step * 2
  );
  ctx.fillStyle = "#225";
  ctx.fillRect(
    canvas.width / 2 - step + UISpacing.displayBorders,
    canvas.height / 2 - step + UISpacing.displayBorders,
    step * 2 - UISpacing.displayBorders,
    step * 2 - UISpacing.displayBorders
  );

  if (step >= size) {
    window[callback].apply(null, callbackData);
    return;
  } else {
    window.requestAnimationFrame(() => {
      centeredBoxAnimate(step, size, callback, callbackData);
    });
  }
};
