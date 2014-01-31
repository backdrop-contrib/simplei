--- Usage ---

1. Enable the module like any other.
2. Enter a line like the example in your settings.php file.

   $conf['simple_environment_indicator'] = 'MidnightBlue DEV';

   The string consists of color name or hex value (dark color works well)
   followed by a label that will appear in the left of the admin menu bar. It
   may be multiple words and long, but we suggest to use a few letters.

3. Obviously, the indicator appears only when Admin Menu is showing.

--- Settings suggestion ---

For production
   $conf['simple_environment_indicator'] = 'DarkRed PRD';

For staging
   $conf['simple_environment_indicator'] = 'SaddleBrown STG';

Fore local development
   $conf['simple_environment_indicator'] = 'MidnightBlue  DEV';

