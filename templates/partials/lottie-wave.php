<?php
if ( is_home() )
{
  ?>
  <div class="u-home__bg--secondary">
    <iframe width="100%" height="100%" style="z-index: -1;" src="<?php echo BUGLOOS_THEME_URI; ?>/assets/lottie-wave.html" title=""></iframe>
  </div>
  <?php
}
else
{
  ?>
  <div class="u-home__bg--secondary">
    <div style="z-index: -1;position: absolute;height: 100%;width: 100%;" id="<?php echo $args[ 'id' ] ?? '' ?>"></div>
    <iframe width="100%" height="100%" src="<?php echo BUGLOOS_THEME_URI; ?>/assets/lottie-wave.html" style="z-index: 9998;position: relative;" title=""></iframe>
  </div>
  <?php
}
