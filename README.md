Simple Environment Indicator
============================
This module helps developers see at a glance which Backdrop CMS site environment they are on. It does this by colouring the adminbar; putting the environment name in the adminbar; and putting an indicator in the favicon. It works like Environment Indicator but takes a minimalist approach. There is no configurable interface, just a simple line in settings.php.

Usage
-----

1. Enable the module like any other. The module works with the core Admin Bar module.

2. Enter a line like the example in your settings.php file.

   `$conf['simple_environment_indicator'] = 'DodgerBlue';`

   or

   `$conf['simple_environment_indicator'] = '#1E90FF DEV';`

   The color name (or hex value) is optionally followed by indicator text.
   The text appears in the far left of the menu bar.

3. The indicator appears only when the Admin Bar is showing.

Settings suggestion
-------------------

For production
```
$conf['simple_environment_indicator'] = 'FireBrick PRD';
```

For staging
```
$conf['simple_environment_indicator'] = 'GoldenRod STG';
```

For local development
```
$conf['simple_environment_indicator'] = 'DodgerBlue DEV';
```

License
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.

Maintainers
-----------

- Herb v/d Dool (https://github.com/herbdool)

Originally written for Drupal by

- Ki Kim (https://www.drupal.org/u/ki)
