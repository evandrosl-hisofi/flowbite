import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import Events from '../dom/events';

const getDatepickerOptions = (datepickerEl) => {
    const buttons = datepickerEl.hasAttribute('datepicker-buttons');
    const autohide = datepickerEl.hasAttribute('datepicker-autohide');
    const format = datepickerEl.hasAttribute('datepicker-format');
    const orientation = datepickerEl.hasAttribute('datepicker-orientation');
    const title = datepickerEl.hasAttribute('datepicker-title');
    const language =  datepickerEl.getAttribute('datepicker-language')
    const daysOfWeekDisabled = datepickerEl.getAttribute('datepicker-days-of-week-disabled')
    const minDate = datepickerEl.getAttribute('datepicker-min-date')
    const maxDate = datepickerEl.getAttribute('datepicker-max-date')


    const options = {};
    if (buttons) {
        options.todayBtn = true;
        options.clearBtn = true;
    }
    if (autohide) {
        options.autohide = true;
    }
    if (format) {
        options.format = datepickerEl.getAttribute('datepicker-format');
    }
    if (orientation) {
        options.orientation = datepickerEl.getAttribute(
            'datepicker-orientation'
        );
    }
    if (title) {
        options.title = datepickerEl.getAttribute('datepicker-title');
    }
    if (language) {
        options.language = datepickerEl.getAttribute('datepicker-language');
    }
    if (daysOfWeekDisabled) {
        options.daysOfWeekDisabled =  Array.from(datepickerEl.getAttribute('datepicker-days-of-week-disabled')).filter(function(elemento) {
            return !isNaN(parseInt(elemento));
          }).map(function(elemento) {
            return parseInt(elemento);
          });
    }

    if (minDate){
        options.minDate =  new Date(minDate);
    }
    if (maxDate){
        options.maxDate =  new Date(maxDate);
    }

    return options;
};

export function initDatepickers() {
    document.querySelectorAll('[datepicker]').forEach(function (datepickerEl) {
        new Datepicker(datepickerEl, getDatepickerOptions(datepickerEl));
    });

    document
        .querySelectorAll('[inline-datepicker]')
        .forEach(function (datepickerEl) {
            new Datepicker(datepickerEl, getDatepickerOptions(datepickerEl));
        });

    document
        .querySelectorAll('[date-rangepicker]')
        .forEach(function (datepickerEl) {
            new DateRangePicker(
                datepickerEl,
                getDatepickerOptions(datepickerEl)
            );
        });
}

// const events = new Events('DOMContentLoaded', [initDatepickers]);
//events.init();
