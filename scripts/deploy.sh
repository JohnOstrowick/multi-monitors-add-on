#!/bin/sh

rsync -avu ~/Documents/.github/multi-monitors-add-on/ ~/.local/share/gnome-shell/extensions/multi-monitors-add-on@spin83/ --progress --exclude="backup/" --exclude="scripts"

glib-compile-schemas ~/.local/share/gnome-shell/extensions/multi-monitors-add-on@spin83/schemas/

gnome-extensions disable multi-monitors-add-on@spin83
gnome-extensions enable multi-monitors-add-on@spin83
gnome-extensions list
