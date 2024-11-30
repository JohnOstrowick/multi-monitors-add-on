
/* Copyright (C) 2014  spin83

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, visit https://www.gnu.org/licenses/.
*/

const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;
const Gio = imports.gi.Gio;

const Gettext = imports.gettext.domain('multi-monitors-add-on');
const _ = Gettext.gettext;

const ExtensionUtils = imports.misc.extensionUtils;
const MultiMonitors = ExtensionUtils.getCurrentExtension();
const Convenience = MultiMonitors.imports.convenience;

const SHOW_INDICATOR_ID = 'show-indicator';
const SHOW_PANEL_ID = 'show-panel';
const SHOW_ACTIVITIES_ID = 'show-activities';
const SHOW_APP_MENU_ID = 'show-app-menu';
const SHOW_DATE_TIME_ID = 'show-date-time';

var MultiMonitorsPrefsWidget = GObject.registerClass(
class MultiMonitorsPrefsWidget extends Gtk.Box {
    _init() {
        super._init({ orientation: Gtk.Orientation.VERTICAL, spacing: 10 });

        this._settings = Convenience.getSettings();

        this._addBooleanSwitch(_('Show Multi Monitors indicator on Top Panel.'), SHOW_INDICATOR_ID);
        this._addBooleanSwitch(_('Show Panel on additional monitors.'), SHOW_PANEL_ID);
        this._addBooleanSwitch(_('Show Activities-Button on additional monitors.'), SHOW_ACTIVITIES_ID);
        this._addBooleanSwitch(_('Show AppMenu-Button on additional monitors.'), SHOW_APP_MENU_ID);
        this._addBooleanSwitch(_('Show DateTime-Button on additional monitors.'), SHOW_DATE_TIME_ID);
    }

    _addBooleanSwitch(label, schema_id) {
        let box = new Gtk.Box({ spacing: 10, orientation: Gtk.Orientation.HORIZONTAL });
        let lbl = new Gtk.Label({ label: label, xalign: 0 });
        let toggle = new Gtk.Switch();

        box.append(lbl);
        box.append(toggle);
        this.append(box);

        this._settings.bind(schema_id, toggle, 'active', Gio.SettingsBindFlags.DEFAULT);
    }
});

function init() {
    Convenience.initTranslations();
}

function buildPrefsWidget() {
    return new MultiMonitorsPrefsWidget();
}
