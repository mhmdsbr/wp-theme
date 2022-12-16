<hr>
<?php
$facebook  = get_field( 'facebook', 'option' );
$twitter   = get_field( 'twitter', 'option' );
$linkedin  = get_field( 'linkedin', 'option' );
$instagram = get_field( 'instagram', 'option' );
if ( $facebook || $twitter || $linkedin || $instagram )
{
  ?>
  <div class="o-contact-share u-flex u-flex--row u-flex--center">
    <?php
    if ( $facebook )
    {
      ?>
      <a href="<?php echo esc_url( $facebook ) ?>" rel="nofollow" target="_blank">
        <img src="<?php echo BUGLOOS_THEME_URI; ?>/assets/images/Facebook.svg" alt="facebook"> </a>
      <?php
    }
    if ( $twitter )
    {
      ?>
      <a href="<?php echo esc_url( $twitter ) ?>" rel="nofollow" target="_blank">
        <img src="<?php echo BUGLOOS_THEME_URI; ?>/assets/images/twitter.svg" alt="twitter"> </a>
      <?php
    }
    if ( $linkedin )
    {
      ?>
      <a href="<?php echo esc_url( $linkedin ) ?>" rel="nofollow" target="_blank">
        <img src="<?php echo BUGLOOS_THEME_URI; ?>/assets/images/linkedin.svg" alt="linkedin"> </a>
      <?php
    }
    if ( $instagram )
    {
      ?>
      <a href="<?php echo esc_url( $instagram ) ?>" rel="nofollow" target="_blank">
        <img src="<?php echo BUGLOOS_THEME_URI; ?>/assets/images/instagram.svg" alt="instagram"> </a>
      <?php
    }
    ?>
  </div>
  <?php
}
?>
<div class="o-contact-year u-flex u-flex--row u-flex--center">
  <p><?php echo sprintf( '%d Bugloos', date( 'Y' ) ); ?></p>
</div>
