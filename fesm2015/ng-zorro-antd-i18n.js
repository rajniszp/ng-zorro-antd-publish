import { InjectionToken, ɵɵdefineInjectable, ɵɵinject, Injectable, Optional, Inject, Pipe, NgModule, INJECTOR, Injector } from '@angular/core';
import { warn } from 'ng-zorro-antd/core/logger';
import { BehaviorSubject } from 'rxjs';
import { formatDate } from '@angular/common';
import { getISOWeek, format, parse } from 'date-fns';
import { ɵNgTimeParser } from 'ng-zorro-antd/core/time';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var en_US = {
    locale: 'en',
    Pagination: {
        items_per_page: '/ page',
        jump_to: 'Go to',
        jump_to_confirm: 'confirm',
        page: '',
        prev_page: 'Previous Page',
        next_page: 'Next Page',
        prev_5: 'Previous 5 Pages',
        next_5: 'Next 5 Pages',
        prev_3: 'Previous 3 Pages',
        next_3: 'Next 3 Pages'
    },
    DatePicker: {
        lang: {
            placeholder: 'Select date',
            yearPlaceholder: 'Select year',
            quarterPlaceholder: 'Select quarter',
            monthPlaceholder: 'Select month',
            weekPlaceholder: 'Select week',
            rangePlaceholder: ['Start date', 'End date'],
            rangeYearPlaceholder: ['Start year', 'End year'],
            rangeMonthPlaceholder: ['Start month', 'End month'],
            rangeWeekPlaceholder: ['Start week', 'End week'],
            locale: 'en_US',
            today: 'Today',
            now: 'Now',
            backToToday: 'Back to today',
            ok: 'Ok',
            clear: 'Clear',
            month: 'Month',
            year: 'Year',
            timeSelect: 'select time',
            dateSelect: 'select date',
            weekSelect: 'Choose a week',
            monthSelect: 'Choose a month',
            yearSelect: 'Choose a year',
            decadeSelect: 'Choose a decade',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Previous month (PageUp)',
            nextMonth: 'Next month (PageDown)',
            previousYear: 'Last year (Control + left)',
            nextYear: 'Next year (Control + right)',
            previousDecade: 'Last decade',
            nextDecade: 'Next decade',
            previousCentury: 'Last century',
            nextCentury: 'Next century'
        },
        timePickerLocale: {
            placeholder: 'Select time',
            rangePlaceholder: ['Start time', 'End time']
        }
    },
    TimePicker: {
        placeholder: 'Select time',
        rangePlaceholder: ['Start time', 'End time']
    },
    Calendar: {
        lang: {
            placeholder: 'Select date',
            yearPlaceholder: 'Select year',
            quarterPlaceholder: 'Select quarter',
            monthPlaceholder: 'Select month',
            weekPlaceholder: 'Select week',
            rangePlaceholder: ['Start date', 'End date'],
            rangeYearPlaceholder: ['Start year', 'End year'],
            rangeMonthPlaceholder: ['Start month', 'End month'],
            rangeWeekPlaceholder: ['Start week', 'End week'],
            locale: 'en_US',
            today: 'Today',
            now: 'Now',
            backToToday: 'Back to today',
            ok: 'Ok',
            clear: 'Clear',
            month: 'Month',
            year: 'Year',
            timeSelect: 'select time',
            dateSelect: 'select date',
            weekSelect: 'Choose a week',
            monthSelect: 'Choose a month',
            yearSelect: 'Choose a year',
            decadeSelect: 'Choose a decade',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Previous month (PageUp)',
            nextMonth: 'Next month (PageDown)',
            previousYear: 'Last year (Control + left)',
            nextYear: 'Next year (Control + right)',
            previousDecade: 'Last decade',
            nextDecade: 'Next decade',
            previousCentury: 'Last century',
            nextCentury: 'Next century'
        },
        timePickerLocale: {
            placeholder: 'Select time',
            rangePlaceholder: ['Start time', 'End time']
        }
    },
    global: {
        placeholder: 'Please select'
    },
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        filterEmptyText: 'No filters',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
        selectionAll: 'Select all data',
        sortTitle: 'Sort',
        expand: 'Expand row',
        collapse: 'Collapse row',
        triggerDesc: 'Click sort by descend',
        triggerAsc: 'Click sort by ascend',
        cancelSort: 'Click to cancel sort'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items',
        remove: 'Remove',
        selectCurrent: 'Select current page',
        removeCurrent: 'Remove current page',
        selectAll: 'Select all data',
        removeAll: 'Remove all data',
        selectInvert: 'Invert current page'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
        downloadFile: 'Download file'
    },
    Empty: {
        description: 'No Data'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'Edit',
        copy: 'Copy',
        copied: 'Copied',
        expand: 'Expand'
    },
    PageHeader: {
        back: 'Back'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var zh_CN = {
    locale: 'zh-cn',
    Pagination: {
        items_per_page: '条/页',
        jump_to: '跳至',
        jump_to_confirm: '确定',
        page: '页',
        prev_page: '上一页',
        next_page: '下一页',
        prev_5: '向前 5 页',
        next_5: '向后 5 页',
        prev_3: '向前 3 页',
        next_3: '向后 3 页'
    },
    DatePicker: {
        lang: {
            placeholder: '请选择日期',
            yearPlaceholder: '请选择年份',
            quarterPlaceholder: '请选择季度',
            monthPlaceholder: '请选择月份',
            weekPlaceholder: '请选择周',
            rangePlaceholder: ['开始日期', '结束日期'],
            rangeYearPlaceholder: ['开始年份', '结束年份'],
            rangeMonthPlaceholder: ['开始月份', '结束月份'],
            rangeWeekPlaceholder: ['开始周', '结束周'],
            locale: 'zh_CN',
            today: '今天',
            now: '此刻',
            backToToday: '返回今天',
            ok: '确定',
            timeSelect: '选择时间',
            dateSelect: '选择日期',
            weekSelect: '选择周',
            clear: '清除',
            month: '月',
            year: '年',
            previousMonth: '上个月 (翻页上键)',
            nextMonth: '下个月 (翻页下键)',
            monthSelect: '选择月份',
            yearSelect: '选择年份',
            decadeSelect: '选择年代',
            yearFormat: 'YYYY年',
            dayFormat: 'D日',
            dateFormat: 'YYYY年M月D日',
            dateTimeFormat: 'YYYY年M月D日 HH时mm分ss秒',
            previousYear: '上一年 (Control键加左方向键)',
            nextYear: '下一年 (Control键加右方向键)',
            previousDecade: '上一年代',
            nextDecade: '下一年代',
            previousCentury: '上一世纪',
            nextCentury: '下一世纪'
        },
        timePickerLocale: {
            placeholder: '请选择时间',
            rangePlaceholder: ['开始时间', '结束时间']
        }
    },
    TimePicker: {
        placeholder: '请选择时间',
        rangePlaceholder: ['开始时间', '结束时间']
    },
    Calendar: {
        lang: {
            placeholder: '请选择日期',
            yearPlaceholder: '请选择年份',
            quarterPlaceholder: '请选择季度',
            monthPlaceholder: '请选择月份',
            weekPlaceholder: '请选择周',
            rangePlaceholder: ['开始日期', '结束日期'],
            rangeYearPlaceholder: ['开始年份', '结束年份'],
            rangeMonthPlaceholder: ['开始月份', '结束月份'],
            rangeWeekPlaceholder: ['开始周', '结束周'],
            locale: 'zh_CN',
            today: '今天',
            now: '此刻',
            backToToday: '返回今天',
            ok: '确定',
            timeSelect: '选择时间',
            dateSelect: '选择日期',
            weekSelect: '选择周',
            clear: '清除',
            month: '月',
            year: '年',
            previousMonth: '上个月 (翻页上键)',
            nextMonth: '下个月 (翻页下键)',
            monthSelect: '选择月份',
            yearSelect: '选择年份',
            decadeSelect: '选择年代',
            yearFormat: 'YYYY年',
            dayFormat: 'D日',
            dateFormat: 'YYYY年M月D日',
            dateTimeFormat: 'YYYY年M月D日 HH时mm分ss秒',
            previousYear: '上一年 (Control键加左方向键)',
            nextYear: '下一年 (Control键加右方向键)',
            previousDecade: '上一年代',
            nextDecade: '下一年代',
            previousCentury: '上一世纪',
            nextCentury: '下一世纪'
        },
        timePickerLocale: {
            placeholder: '请选择时间',
            rangePlaceholder: ['开始时间', '结束时间']
        }
    },
    global: {
        placeholder: '请选择'
    },
    Table: {
        filterTitle: '筛选',
        filterConfirm: '确定',
        filterReset: '重置',
        filterEmptyText: '无筛选项',
        selectAll: '全选当页',
        selectInvert: '反选当页',
        selectionAll: '全选所有',
        sortTitle: '排序',
        expand: '展开行',
        collapse: '关闭行',
        triggerDesc: '点击降序',
        triggerAsc: '点击升序',
        cancelSort: '取消排序'
    },
    Modal: {
        okText: '确定',
        cancelText: '取消',
        justOkText: '知道了'
    },
    Popconfirm: {
        cancelText: '取消',
        okText: '确定'
    },
    Transfer: {
        searchPlaceholder: '请输入搜索内容',
        itemUnit: '项',
        itemsUnit: '项',
        remove: '删除',
        selectCurrent: '全选当页',
        removeCurrent: '删除当页',
        selectAll: '全选所有',
        removeAll: '删除全部',
        selectInvert: '反选当页'
    },
    Upload: {
        uploading: '文件上传中',
        removeFile: '删除文件',
        uploadError: '上传错误',
        previewFile: '预览文件',
        downloadFile: '下载文件'
    },
    Empty: {
        description: '暂无数据'
    },
    Icon: {
        icon: '图标'
    },
    Text: {
        edit: '编辑',
        copy: '复制',
        copied: '复制成功',
        expand: '展开'
    },
    PageHeader: {
        back: '返回'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_I18N = new InjectionToken('nz-i18n');
/** Locale for date operations, should import from date-fns, see example: https://github.com/date-fns/date-fns/blob/v1.30.1/src/locale/zh_cn/index.js */
const NZ_DATE_LOCALE = new InjectionToken('nz-date-locale');

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzI18nService {
    constructor(locale, dateLocale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
        this.setDateLocale(dateLocale || null);
    }
    get localeChange() {
        return this._change.asObservable();
    }
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    translate(path, data) {
        // this._logger.debug(`[NzI18nService] Translating(${this._locale.locale}): ${path}`);
        let content = this._getObjectPath(this._locale, path);
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach(key => (content = content.replace(new RegExp(`%${key}%`, 'g'), data[key])));
            }
            return content;
        }
        return path;
    }
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * NOTE: If called at runtime, rendered interface may not change along with the locale change,
     * because this do not trigger another render schedule.
     *
     * @param locale The translating letters
     */
    setLocale(locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    }
    getLocale() {
        return this._locale;
    }
    getLocaleId() {
        return this._locale ? this._locale.locale : '';
    }
    setDateLocale(dateLocale) {
        this.dateLocale = dateLocale;
    }
    getDateLocale() {
        return this.dateLocale;
    }
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    getLocaleData(path, defaultValue) {
        const result = path ? this._getObjectPath(this._locale, path) : this._locale;
        if (!result && !defaultValue) {
            warn(`Missing translations for "${path}" in language "${this._locale.locale}".
You can use "NzI18nService.setLocale" as a temporary fix.
Welcome to submit a pull request to help us optimize the translations!
https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md`);
        }
        return result || defaultValue || this._getObjectPath(en_US, path) || {};
    }
    _getObjectPath(obj, path) {
        let res = obj;
        const paths = path.split('.');
        const depth = paths.length;
        let index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    }
}
NzI18nService.ɵprov = ɵɵdefineInjectable({ factory: function NzI18nService_Factory() { return new NzI18nService(ɵɵinject(NZ_I18N, 8), ɵɵinject(NZ_DATE_LOCALE, 8)); }, token: NzI18nService, providedIn: "root" });
NzI18nService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NzI18nService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_I18N,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_LOCALE,] }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzI18nPipe {
    constructor(_locale) {
        this._locale = _locale;
    }
    transform(path, keyValue) {
        return this._locale.translate(path, keyValue);
    }
}
NzI18nPipe.decorators = [
    { type: Pipe, args: [{
                name: 'nzI18n'
            },] }
];
NzI18nPipe.ctorParameters = () => [
    { type: NzI18nService }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzI18nModule {
}
NzI18nModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzI18nPipe],
                exports: [NzI18nPipe]
            },] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_DATE_CONFIG = new InjectionToken('date-config');
const NZ_DATE_CONFIG_DEFAULT = {
    firstDayOfWeek: undefined
};
function mergeDateConfig(config) {
    return Object.assign(Object.assign({}, NZ_DATE_CONFIG_DEFAULT), config);
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function DATE_HELPER_SERVICE_FACTORY(injector, config) {
    const i18n = injector.get(NzI18nService);
    return i18n.getDateLocale() ? new DateHelperByDateFns(i18n, config) : new DateHelperByDatePipe(i18n, config);
}
/**
 * Abstract DateHelperService(Token via Class)
 * Compatibility: compact for original usage by default which using DatePipe
 */
class DateHelperService {
    constructor(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.config = mergeDateConfig(this.config);
    }
}
DateHelperService.ɵprov = ɵɵdefineInjectable({ factory: function DateHelperService_Factory() { return DATE_HELPER_SERVICE_FACTORY(ɵɵinject(INJECTOR), ɵɵinject(NZ_DATE_CONFIG, 8)); }, token: DateHelperService, providedIn: "root" });
DateHelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useFactory: DATE_HELPER_SERVICE_FACTORY,
                deps: [Injector, [new Optional(), NZ_DATE_CONFIG]]
            },] }
];
DateHelperService.ctorParameters = () => [
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
];
/**
 * DateHelper that handles date formats with date-fns
 */
class DateHelperByDateFns extends DateHelperService {
    getISOWeek(date) {
        return getISOWeek(date);
    }
    // Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    getFirstDayOfWeek() {
        let defaultWeekStartsOn;
        try {
            defaultWeekStartsOn = this.i18n.getDateLocale().options.weekStartsOn;
        }
        catch (e) {
            defaultWeekStartsOn = 1;
        }
        return this.config.firstDayOfWeek == null ? defaultWeekStartsOn : this.config.firstDayOfWeek;
    }
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param date Date
     * @param formatStr format string
     */
    format(date, formatStr) {
        return date ? format(date, formatStr, { locale: this.i18n.getDateLocale() }) : '';
    }
    parseDate(text, formatStr) {
        return parse(text, formatStr, new Date(), {
            locale: this.i18n.getDateLocale(),
            weekStartsOn: this.getFirstDayOfWeek()
        });
    }
    parseTime(text, formatStr) {
        return this.parseDate(text, formatStr);
    }
}
DateHelperByDateFns.ɵprov = ɵɵdefineInjectable({ factory: function DateHelperByDateFns_Factory() { return DATE_HELPER_SERVICE_FACTORY(ɵɵinject(INJECTOR), ɵɵinject(NZ_DATE_CONFIG, 8)); }, token: DateHelperByDateFns, providedIn: "root" });
/**
 * DateHelper that handles date formats with angular's date-pipe
 *
 * @see https://github.com/NG-ZORRO/ng-zorro-antd/issues/2406 - DatePipe may cause non-standard week bug, see:
 *
 */
class DateHelperByDatePipe extends DateHelperService {
    getISOWeek(date) {
        return +this.format(date, 'w');
    }
    getFirstDayOfWeek() {
        if (this.config.firstDayOfWeek === undefined) {
            const locale = this.i18n.getLocaleId();
            return locale && ['zh-cn', 'zh-tw'].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
        }
        return this.config.firstDayOfWeek;
    }
    format(date, formatStr) {
        return date ? formatDate(date, formatStr, this.i18n.getLocaleId()) : '';
    }
    parseDate(text) {
        return new Date(text);
    }
    parseTime(text, formatStr) {
        const parser = new ɵNgTimeParser(formatStr, this.i18n.getLocaleId());
        return parser.toDate(text);
    }
}
DateHelperByDatePipe.ɵprov = ɵɵdefineInjectable({ factory: function DateHelperByDatePipe_Factory() { return DATE_HELPER_SERVICE_FACTORY(ɵɵinject(INJECTOR), ɵɵinject(NZ_DATE_CONFIG, 8)); }, token: DateHelperByDatePipe, providedIn: "root" });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ar_EG = {
    locale: 'ar',
    Pagination: {
        items_per_page: '/ الصفحة',
        jump_to: 'الذهاب إلى',
        jump_to_confirm: 'تأكيد',
        page: '',
        prev_page: 'الصفحة السابقة',
        next_page: 'الصفحة التالية',
        prev_5: 'خمس صفحات سابقة',
        next_5: 'خمس صفحات تالية',
        prev_3: 'ثلاث صفحات سابقة',
        next_3: 'ثلاث صفحات تالية'
    },
    DatePicker: {
        lang: {
            placeholder: 'اختيار التاريخ',
            rangePlaceholder: ['البداية', 'النهاية'],
            locale: 'ar_EG',
            today: 'اليوم',
            now: 'الأن',
            backToToday: 'العودة إلى اليوم',
            ok: 'تأكيد',
            clear: 'مسح',
            month: 'الشهر',
            year: 'السنة',
            timeSelect: 'اختيار الوقت',
            dateSelect: 'اختيار التاريخ',
            monthSelect: 'اختيار الشهر',
            yearSelect: 'اختيار السنة',
            decadeSelect: 'اختيار العقد',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'الشهر السابق (PageUp)',
            nextMonth: 'الشهر التالى(PageDown)',
            previousYear: 'العام السابق (Control + left)',
            nextYear: 'العام التالى (Control + right)',
            previousDecade: 'العقد السابق',
            nextDecade: 'العقد التالى',
            previousCentury: 'القرن السابق',
            nextCentury: 'القرن التالى'
        },
        timePickerLocale: {
            placeholder: 'اختيار الوقت'
        },
        dateFormat: 'DD-MM-YYYY',
        monthFormat: 'MM-YYYY',
        dateTimeFormat: 'DD-MM-YYYY HH:mm:ss',
        weekFormat: 'wo-YYYY'
    },
    TimePicker: {
        placeholder: 'اختيار الوقت'
    },
    Calendar: {
        lang: {
            placeholder: 'اختيار التاريخ',
            rangePlaceholder: ['البداية', 'النهاية'],
            locale: 'ar_EG',
            today: 'اليوم',
            now: 'الأن',
            backToToday: 'العودة إلى اليوم',
            ok: 'تأكيد',
            clear: 'مسح',
            month: 'الشهر',
            year: 'السنة',
            timeSelect: 'اختيار الوقت',
            dateSelect: 'اختيار التاريخ',
            monthSelect: 'اختيار الشهر',
            yearSelect: 'اختيار السنة',
            decadeSelect: 'اختيار العقد',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'الشهر السابق (PageUp)',
            nextMonth: 'الشهر التالى(PageDown)',
            previousYear: 'العام السابق (Control + left)',
            nextYear: 'العام التالى (Control + right)',
            previousDecade: 'العقد السابق',
            nextDecade: 'العقد التالى',
            previousCentury: 'القرن السابق',
            nextCentury: 'القرن التالى'
        },
        timePickerLocale: {
            placeholder: 'اختيار الوقت'
        },
        dateFormat: 'DD-MM-YYYY',
        monthFormat: 'MM-YYYY',
        dateTimeFormat: 'DD-MM-YYYY HH:mm:ss',
        weekFormat: 'wo-YYYY'
    },
    global: {
        placeholder: 'يرجى التحديد'
    },
    Table: {
        filterTitle: 'الفلاتر',
        filterConfirm: 'تأكيد',
        filterReset: 'إعادة ضبط',
        selectAll: 'اختيار الكل',
        selectInvert: 'إلغاء الاختيار',
        selectionAll: 'حدد جميع البيانات',
        sortTitle: 'رتب',
        expand: 'توسيع الصف',
        collapse: 'طي الصف',
        triggerDesc: 'ترتيب تنازلي',
        triggerAsc: 'ترتيب تصاعدي',
        cancelSort: 'إلغاء الترتيب'
    },
    Modal: {
        okText: 'تأكيد',
        cancelText: 'إلغاء',
        justOkText: 'تأكيد'
    },
    Popconfirm: {
        okText: 'تأكيد',
        cancelText: 'إلغاء'
    },
    Transfer: {
        searchPlaceholder: 'ابحث هنا',
        itemUnit: 'عنصر',
        itemsUnit: 'عناصر'
    },
    Upload: {
        uploading: 'جاري الرفع...',
        removeFile: 'احذف الملف',
        uploadError: 'مشكلة فى الرفع',
        previewFile: 'استعرض الملف',
        downloadFile: 'تحميل الملف'
    },
    Empty: {
        description: 'لا توجد بيانات'
    },
    Icon: {
        icon: 'أيقونة'
    },
    Text: {
        edit: 'تعديل',
        copy: 'نسخ',
        copied: 'تم النسخ',
        expand: 'المزيد'
    },
    PageHeader: {
        back: 'عودة'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var az_AZ = {
    locale: 'az',
    Pagination: {
        items_per_page: '/ səhifə',
        jump_to: 'Get',
        jump_to_confirm: 'təsdiqlə',
        page: '',
        prev_page: 'Əvvəlki Səhifə',
        next_page: 'Növbəti Səhifə',
        prev_5: 'Əvvəlki 5 Səhifə',
        next_5: 'Növbəti 5 Səhifə',
        prev_3: 'Əvvəlki 3 Səhifə',
        next_3: 'Növbəti 3 Səhifə'
    },
    DatePicker: {
        lang: {
            placeholder: 'Tarix seçin',
            rangePlaceholder: ['Başlama tarixi', 'Bitmə tarixi'],
            locale: 'az_AZ',
            today: 'Bugün',
            now: 'İndi',
            backToToday: 'Bugünə qayıt',
            ok: 'Təsdiq',
            clear: 'Təmizlə',
            month: 'Ay',
            year: 'İl',
            timeSelect: 'vaxtı seç',
            dateSelect: 'tarixi seç',
            weekSelect: 'Həftə seç',
            monthSelect: 'Ay seç',
            yearSelect: 'il seç',
            decadeSelect: 'Onillik seçin',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Əvvəlki ay (PageUp)',
            nextMonth: 'Növbəti ay (PageDown)',
            previousYear: 'Sonuncu il (Control + left)',
            nextYear: 'Növbəti il (Control + right)',
            previousDecade: 'Sonuncu onillik',
            nextDecade: 'Növbəti onillik',
            previousCentury: 'Sonuncu əsr',
            nextCentury: 'Növbəti əsr'
        },
        timePickerLocale: {
            placeholder: 'Vaxtı seç'
        }
    },
    TimePicker: {
        placeholder: 'Vaxtı seç'
    },
    Calendar: {
        lang: {
            placeholder: 'Tarix seçin',
            rangePlaceholder: ['Başlama tarixi', 'Bitmə tarixi'],
            locale: 'az_AZ',
            today: 'Bugün',
            now: 'İndi',
            backToToday: 'Bugünə qayıt',
            ok: 'Təsdiq',
            clear: 'Təmizlə',
            month: 'Ay',
            year: 'İl',
            timeSelect: 'vaxtı seç',
            dateSelect: 'tarixi seç',
            weekSelect: 'Həftə seç',
            monthSelect: 'Ay seç',
            yearSelect: 'il seç',
            decadeSelect: 'Onillik seçin',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Əvvəlki ay (PageUp)',
            nextMonth: 'Növbəti ay (PageDown)',
            previousYear: 'Sonuncu il (Control + left)',
            nextYear: 'Növbəti il (Control + right)',
            previousDecade: 'Sonuncu onillik',
            nextDecade: 'Növbəti onillik',
            previousCentury: 'Sonuncu əsr',
            nextCentury: 'Növbəti əsr'
        },
        timePickerLocale: {
            placeholder: 'Vaxtı seç'
        }
    },
    Table: {
        filterTitle: 'Filter menyu',
        filterConfirm: 'Axtar',
        filterReset: 'Sıfırla',
        emptyText: 'Məlumat yoxdur',
        selectAll: 'Cari səhifəni seç',
        selectInvert: 'Invert current page'
    },
    Modal: {
        okText: 'Bəli',
        cancelText: 'Ləğv et',
        justOkText: 'Bəli'
    },
    Popconfirm: {
        okText: 'Bəli',
        cancelText: 'Ləğv et'
    },
    Transfer: {
        titles: ['', ''],
        notFoundContent: 'Tapılmadı',
        searchPlaceholder: 'Burada axtar',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Tapılmadı'
    },
    Upload: {
        uploading: 'Yüklənir...',
        removeFile: 'Faylı sil',
        uploadError: 'Yükləmə xətası',
        previewFile: 'Fayla önbaxış'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var bg_BG = {
    locale: 'bg',
    Pagination: {
        items_per_page: '/ страница',
        jump_to: 'Към',
        jump_to_confirm: 'потвърждавам',
        page: '',
        prev_page: 'Предишна страница',
        next_page: 'Следваща страница',
        prev_5: 'Предишни 5 страници',
        next_5: 'Следващи 5 страници',
        prev_3: 'Предишни 3 страници',
        next_3: 'Следващи 3 страници'
    },
    DatePicker: {
        lang: {
            placeholder: 'Избор на дата',
            rangePlaceholder: ['Начална', 'Крайна'],
            locale: 'bg_BG',
            today: 'Днес',
            now: 'Сега',
            backToToday: 'Към днес',
            ok: 'Добре',
            clear: 'Изчистване',
            month: 'Месец',
            year: 'Година',
            timeSelect: 'Избор на час',
            dateSelect: 'Избор на дата',
            monthSelect: 'Избор на месец',
            yearSelect: 'Избор на година',
            decadeSelect: 'Десетилетие',
            yearFormat: 'YYYY',
            dateFormat: 'D M YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D M YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Предишен месец (PageUp)',
            nextMonth: 'Следващ месец (PageDown)',
            previousYear: 'Последна година (Control + left)',
            nextYear: 'Следваща година (Control + right)',
            previousDecade: 'Предишно десетилетие',
            nextDecade: 'Следващо десетилетие',
            previousCentury: 'Последен век',
            nextCentury: 'Следващ век'
        },
        timePickerLocale: {
            placeholder: 'Избор на час'
        }
    },
    TimePicker: {
        placeholder: 'Избор на час'
    },
    Calendar: {
        lang: {
            placeholder: 'Избор на дата',
            rangePlaceholder: ['Начална', 'Крайна'],
            locale: 'bg_BG',
            today: 'Днес',
            now: 'Сега',
            backToToday: 'Към днес',
            ok: 'Добре',
            clear: 'Изчистване',
            month: 'Месец',
            year: 'Година',
            timeSelect: 'Избор на час',
            dateSelect: 'Избор на дата',
            monthSelect: 'Избор на месец',
            yearSelect: 'Избор на година',
            decadeSelect: 'Десетилетие',
            yearFormat: 'YYYY',
            dateFormat: 'D M YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D M YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Предишен месец (PageUp)',
            nextMonth: 'Следващ месец (PageDown)',
            previousYear: 'Последна година (Control + left)',
            nextYear: 'Следваща година (Control + right)',
            previousDecade: 'Предишно десетилетие',
            nextDecade: 'Следващо десетилетие',
            previousCentury: 'Последен век',
            nextCentury: 'Следващ век'
        },
        timePickerLocale: {
            placeholder: 'Избор на час'
        }
    },
    Table: {
        filterTitle: 'Филтриране',
        filterConfirm: 'Добре',
        filterReset: 'Нулриане',
        selectAll: 'Избор на текуща страница',
        selectInvert: 'Обръщане'
    },
    Modal: {
        okText: 'Добре',
        cancelText: 'Отказ',
        justOkText: 'Добре'
    },
    Popconfirm: {
        okText: 'Добре',
        cancelText: 'Отказ'
    },
    Transfer: {
        searchPlaceholder: 'Търсене',
        itemUnit: 'избор',
        itemsUnit: 'избори'
    },
    Upload: {
        uploading: 'Качване...',
        removeFile: 'Премахване',
        uploadError: 'Грешка при качването',
        previewFile: 'Преглед',
        downloadFile: 'Свали файл'
    },
    Empty: {
        description: 'Няма данни'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var by_BY = {
    locale: 'by',
    Pagination: {
        items_per_page: '/старонка',
        jump_to: 'Перайсці',
        jump_to_confirm: 'Пацвердзіць',
        page: '',
        prev_page: 'Назад',
        next_page: 'Наперад',
        prev_5: 'Папярэднія 5',
        next_5: 'Наступныя 5',
        prev_3: 'Папярэднія 3',
        next_3: 'Наступныя 3'
    },
    DatePicker: {
        lang: {
            placeholder: 'Выберыце дату',
            yearPlaceholder: 'Выберыце год',
            quarterPlaceholder: 'Выберыце квартал',
            monthPlaceholder: 'Выберыце месяц',
            weekPlaceholder: 'Выберыце тыдзень',
            rangePlaceholder: ['Пачатковая дата', 'Канчатковая дата'],
            rangeYearPlaceholder: ['Пачатковы год', 'Год заканчэння'],
            rangeMonthPlaceholder: ['Пачатковы месяц', 'Канчатковы месяц'],
            rangeWeekPlaceholder: ['Пачатковы тыдзень', 'Канчатковы тыдзень'],
            locale: 'by_BY',
            today: 'Сёння',
            now: 'Зараз',
            backToToday: 'Дадзеная дата',
            ok: 'Ok',
            clear: 'Ачысціць',
            month: 'Месяц',
            year: 'Год',
            timeSelect: 'Выбраць час',
            dateSelect: 'Выбраць дату',
            weekSelect: 'Выбраць тыдзень',
            monthSelect: 'Выбраць месяц',
            yearSelect: 'Выбраць год',
            decadeSelect: 'Выбраць дзесяцігоддзе',
            yearFormat: 'YYYY',
            dateFormat: 'D-M-YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D-M-YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Папярэдні месяц (PageUp)',
            nextMonth: 'Наступны месяц (PageDown)',
            previousYear: 'Папярэдні год (Control + left)',
            nextYear: 'Наступны год (Control + right)',
            previousDecade: 'Папярэдняе дзесяцігоддзе',
            nextDecade: 'Наступнае дзесяцігоддзе',
            previousCentury: 'Папярэдні век',
            nextCentury: 'Наступны век'
        },
        timePickerLocale: {
            placeholder: 'Выберыце час',
            rangePlaceholder: ['Час пачатку', 'Час заканчэння']
        }
    },
    TimePicker: {
        placeholder: 'Выберыце час',
        rangePlaceholder: ['Час пачатку', 'Час заканчэння']
    },
    Calendar: {
        lang: {
            placeholder: 'Выберыце дату',
            yearPlaceholder: 'Выберыце год',
            quarterPlaceholder: 'Выберыце квартал',
            monthPlaceholder: 'Выберыце месяц',
            weekPlaceholder: 'Выберыце тыдзень',
            rangePlaceholder: ['Пачатковая дата', 'Канчатковая дата'],
            rangeYearPlaceholder: ['Пачатковы год', 'Год заканчэння'],
            rangeMonthPlaceholder: ['Пачатковы месяц', 'Канчатковы месяц'],
            rangeWeekPlaceholder: ['Пачатковы тыдзень', 'Канчатковы тыдзень'],
            locale: 'by_BY',
            today: 'Сёння',
            now: 'Зараз',
            backToToday: 'Дадзеная дата',
            ok: 'Ok',
            clear: 'Ачысціць',
            month: 'Месяц',
            year: 'Год',
            timeSelect: 'Выбраць час',
            dateSelect: 'Выбраць дату',
            weekSelect: 'Выбраць тыдзень',
            monthSelect: 'Выбраць месяц',
            yearSelect: 'Выбраць год',
            decadeSelect: 'Выбраць дзесяцігоддзе',
            yearFormat: 'YYYY',
            dateFormat: 'D-M-YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D-M-YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Папярэдні месяц (PageUp)',
            nextMonth: 'Наступны месяц (PageDown)',
            previousYear: 'Папярэдні год (Control + left)',
            nextYear: 'Наступны год (Control + right)',
            previousDecade: 'Папярэдняе дзесяцігоддзе',
            nextDecade: 'Наступнае дзесяцігоддзе',
            previousCentury: 'Папярэдні век',
            nextCentury: 'Наступны век'
        },
        timePickerLocale: {
            placeholder: 'Выберыце час',
            rangePlaceholder: ['Час пачатку', 'Час заканчэння']
        }
    },
    global: {
        placeholder: 'Калі ласка выберыце'
    },
    Table: {
        filterTitle: 'Фільтр',
        filterConfirm: 'OK',
        filterReset: 'Скінуць',
        filterEmptyText: 'Без фільтраў',
        emptyText: 'Няма дадзеных',
        selectAll: 'Выбраць усе',
        selectInvert: 'Інвертаваць выбар',
        selectionAll: 'Выбраць усе дадзеныя',
        sortTitle: 'Сартаванне',
        expand: 'Разгарнуць радок',
        collapse: 'Згарнуць радок',
        triggerDesc: 'Націсніце для сартавання па змяншэнні',
        triggerAsc: 'Націсніце для сартавання па ўзросту',
        cancelSort: 'Націсніце, каб адмяніць сартаванне'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Адмена',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Адмена'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Пошук',
        itemUnit: 'элем.',
        itemsUnit: 'элем.',
        remove: 'Выдаліць',
        selectAll: 'Выбраць усе дадзеныя',
        selectCurrent: 'Вылучыць дадзеную старонку',
        selectInvert: 'Паказаць у зваротным парадку',
        removeAll: 'Выдаліць усе дадзеныя',
        removeCurrent: 'Выдаліць дадзеную старонку'
    },
    Upload: {
        uploading: 'Загрузка...',
        removeFile: 'Выдаліць файл',
        uploadError: 'Адбылася памылка пры загрузцы',
        previewFile: 'Прадпрагляд файла',
        downloadFile: 'Загрузіць файл'
    },
    Empty: {
        description: 'Няма дадзеных'
    },
    Icon: {
        icon: 'Іконка'
    },
    Text: {
        edit: 'Рэдагаваць',
        copy: 'Капіяваць',
        copied: 'Капіяванне завершана',
        expand: 'Разгарнуць'
    },
    PageHeader: {
        back: 'Назад'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ca_ES = {
    locale: 'ca',
    Pagination: {
        items_per_page: '/ pàgina',
        jump_to: 'Anar a',
        jump_to_confirm: 'Confirma',
        page: '',
        prev_page: 'Pàgina prèvia',
        next_page: 'Pàgina següent',
        prev_5: '5 pàgines prèvies',
        next_5: '5 pàgines següents',
        prev_3: '3 pàgines prèvies',
        next_3: '3 pàgines següents'
    },
    DatePicker: {
        lang: {
            placeholder: 'Seleccionar data',
            rangePlaceholder: ['Data inicial', 'Data final'],
            locale: 'ca_ES',
            today: 'Avui',
            now: 'Ara',
            backToToday: 'Tornar a avui',
            ok: 'Acceptar',
            clear: 'Netejar',
            month: 'Mes',
            year: 'Any',
            timeSelect: 'Seleccionar hora',
            dateSelect: 'Seleccionar data',
            monthSelect: 'Escollir un mes',
            yearSelect: 'Escollir un any',
            decadeSelect: 'Escollir una dècada',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Mes anterior (PageUp)',
            nextMonth: 'Mes següent (PageDown)',
            previousYear: 'Any anterior (Control + left)',
            nextYear: 'Mes següent (Control + right)',
            previousDecade: 'Dècada anterior',
            nextDecade: 'Dècada següent',
            previousCentury: 'Segle anterior',
            nextCentury: 'Segle següent'
        },
        timePickerLocale: {
            placeholder: 'Seleccionar hora'
        }
    },
    TimePicker: {
        placeholder: 'Seleccionar hora'
    },
    Calendar: {
        lang: {
            placeholder: 'Seleccionar data',
            rangePlaceholder: ['Data inicial', 'Data final'],
            locale: 'ca_ES',
            today: 'Avui',
            now: 'Ara',
            backToToday: 'Tornar a avui',
            ok: 'Acceptar',
            clear: 'Netejar',
            month: 'Mes',
            year: 'Any',
            timeSelect: 'Seleccionar hora',
            dateSelect: 'Seleccionar data',
            monthSelect: 'Escollir un mes',
            yearSelect: 'Escollir un any',
            decadeSelect: 'Escollir una dècada',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Mes anterior (PageUp)',
            nextMonth: 'Mes següent (PageDown)',
            previousYear: 'Any anterior (Control + left)',
            nextYear: 'Mes següent (Control + right)',
            previousDecade: 'Dècada anterior',
            nextDecade: 'Dècada següent',
            previousCentury: 'Segle anterior',
            nextCentury: 'Segle següent'
        },
        timePickerLocale: {
            placeholder: 'Seleccionar hora'
        }
    },
    global: {
        placeholder: 'Seleccionar'
    },
    Table: {
        filterTitle: 'Filtrar el menú',
        filterConfirm: 'D’acord',
        filterReset: 'Reiniciar',
        filterEmptyText: 'Sense filtres',
        selectAll: 'Seleccionar la pàgina actual',
        selectInvert: 'Invertir la selecció',
        selectionAll: 'Seleccionar-ho tot',
        sortTitle: 'Ordenar',
        expand: 'Ampliar la fila',
        collapse: 'Plegar la fila',
        triggerDesc: 'Ordre descendent',
        triggerAsc: 'Ordre ascendent',
        cancelSort: 'Desactivar l’ordre'
    },
    Modal: {
        okText: 'D’acord',
        cancelText: 'Cancel·lar',
        justOkText: 'D’acord'
    },
    Popconfirm: {
        okText: 'D’acord',
        cancelText: 'Cancel·lar'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Cercar',
        itemUnit: 'ítem',
        itemsUnit: 'ítems',
        remove: 'Eliminar',
        selectCurrent: 'Seleccionar la pàgina actual',
        removeCurrent: 'Eliminar la selecció',
        selectAll: 'Seleccionar-ho tot',
        removeAll: 'Eliminar-ho tot',
        selectInvert: 'Invertir la selecció'
    },
    Upload: {
        uploading: 'Carregant…',
        removeFile: 'Eliminar el fitxer',
        uploadError: 'Error de càrrega',
        previewFile: 'Vista prèvia del fitxer',
        downloadFile: 'Baixar el fitxer'
    },
    Empty: {
        description: 'Sense dades'
    },
    Icon: {
        icon: 'icona'
    },
    Text: {
        edit: 'Editar',
        copy: 'Copiar',
        copied: 'Copiat',
        expand: 'Ampliar'
    },
    PageHeader: {
        back: 'Enrere'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var cs_CZ = {
    locale: 'cs',
    Pagination: {
        items_per_page: '/ strana',
        jump_to: 'Přejít',
        jump_to_confirm: 'potvrdit',
        page: '',
        prev_page: 'Předchozí strana',
        next_page: 'Následující strana',
        prev_5: 'Předchozích 5 stran',
        next_5: 'Následujících 5 stran',
        prev_3: 'Předchozí 3 strany',
        next_3: 'Následující 3 strany'
    },
    DatePicker: {
        lang: {
            placeholder: 'Vybrat datum',
            rangePlaceholder: ['Od', 'Do'],
            locale: 'cs_CZ',
            today: 'Dnes',
            now: 'Nyní',
            backToToday: 'Zpět na dnešek',
            ok: 'Ok',
            clear: 'Vymazat',
            month: 'Měsíc',
            year: 'Rok',
            timeSelect: 'Vybrat čas',
            dateSelect: 'Vybrat datum',
            monthSelect: 'Vyberte měsíc',
            yearSelect: 'Vyberte rok',
            decadeSelect: 'Vyberte dekádu',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Předchozí měsíc (PageUp)',
            nextMonth: 'Následující (PageDown)',
            previousYear: 'Předchozí rok (Control + left)',
            nextYear: 'Následující rok (Control + right)',
            previousDecade: 'Předchozí dekáda',
            nextDecade: 'Následující dekáda',
            previousCentury: 'Předchozí století',
            nextCentury: 'Následující století'
        },
        timePickerLocale: {
            placeholder: 'Vybrat čas'
        }
    },
    TimePicker: {
        placeholder: 'Vybrat čas'
    },
    Calendar: {
        lang: {
            placeholder: 'Vybrat datum',
            rangePlaceholder: ['Od', 'Do'],
            locale: 'cs_CZ',
            today: 'Dnes',
            now: 'Nyní',
            backToToday: 'Zpět na dnešek',
            ok: 'Ok',
            clear: 'Vymazat',
            month: 'Měsíc',
            year: 'Rok',
            timeSelect: 'Vybrat čas',
            dateSelect: 'Vybrat datum',
            monthSelect: 'Vyberte měsíc',
            yearSelect: 'Vyberte rok',
            decadeSelect: 'Vyberte dekádu',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Předchozí měsíc (PageUp)',
            nextMonth: 'Následující (PageDown)',
            previousYear: 'Předchozí rok (Control + left)',
            nextYear: 'Následující rok (Control + right)',
            previousDecade: 'Předchozí dekáda',
            nextDecade: 'Následující dekáda',
            previousCentury: 'Předchozí století',
            nextCentury: 'Následující století'
        },
        timePickerLocale: {
            placeholder: 'Vybrat čas'
        }
    },
    global: {
        placeholder: 'Prosím vyber'
    },
    Table: {
        filterTitle: 'Filtr',
        filterConfirm: 'Potvrdit',
        filterReset: 'Obnovit',
        filterEmptyText: 'Žádné filtry',
        selectAll: 'Vybrat všehchny řádky na současné stránce',
        selectInvert: 'Invertovat výběr na současné stránce',
        selectionAll: 'Vybrat všechny řádky',
        sortTitle: 'Řadit',
        expand: 'Rozbalit řádek',
        collapse: 'Zabalit řádek',
        triggerDesc: 'Klikni pro sestupné řazení',
        triggerAsc: 'Klikni pro vzestupné řazení',
        cancelSort: 'Klikni pro zrušení řazení'
    },
    Modal: {
        okText: 'Ok',
        cancelText: 'Storno',
        justOkText: 'Ok'
    },
    Popconfirm: {
        okText: 'Ok',
        cancelText: 'Storno'
    },
    Transfer: {
        searchPlaceholder: 'Vyhledávání',
        itemUnit: 'položka',
        itemsUnit: 'položek'
    },
    Upload: {
        uploading: 'Nahrávání...',
        removeFile: 'Odstranit soubor',
        uploadError: 'Chyba při nahrávání',
        previewFile: 'Zobrazit soubor',
        downloadFile: 'Stáhnout soubor'
    },
    Empty: {
        description: 'Žádná data'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var da_DK = {
    locale: 'da',
    DatePicker: {
        lang: {
            placeholder: 'Vælg dato',
            rangePlaceholder: ['Startdato', 'Slutdato'],
            locale: 'da_DK',
            today: 'I dag',
            now: 'Nu',
            backToToday: 'Gå til i dag',
            ok: 'Ok',
            clear: 'Ryd',
            month: 'Måned',
            year: 'År',
            timeSelect: 'Vælg tidspunkt',
            dateSelect: 'Vælg dato',
            monthSelect: 'Vælg måned',
            yearSelect: 'Vælg år',
            decadeSelect: 'Vælg årti',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Forrige måned (Page Up)',
            nextMonth: 'Næste måned (Page Down)',
            previousYear: 'Forrige år (Ctrl-venstre pil)',
            nextYear: 'Næste år (Ctrl-højre pil)',
            previousDecade: 'Forrige årti',
            nextDecade: 'Næste årti',
            previousCentury: 'Forrige århundrede',
            nextCentury: 'Næste århundrede'
        },
        timePickerLocale: {
            placeholder: 'Vælg tid'
        }
    },
    TimePicker: {
        placeholder: 'Vælg tid'
    },
    Calendar: {
        lang: {
            placeholder: 'Vælg dato',
            rangePlaceholder: ['Startdato', 'Slutdato'],
            locale: 'da_DK',
            today: 'I dag',
            now: 'Nu',
            backToToday: 'Gå til i dag',
            ok: 'Ok',
            clear: 'Ryd',
            month: 'Måned',
            year: 'År',
            timeSelect: 'Vælg tidspunkt',
            dateSelect: 'Vælg dato',
            monthSelect: 'Vælg måned',
            yearSelect: 'Vælg år',
            decadeSelect: 'Vælg årti',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Forrige måned (Page Up)',
            nextMonth: 'Næste måned (Page Down)',
            previousYear: 'Forrige år (Ctrl-venstre pil)',
            nextYear: 'Næste år (Ctrl-højre pil)',
            previousDecade: 'Forrige årti',
            nextDecade: 'Næste årti',
            previousCentury: 'Forrige århundrede',
            nextCentury: 'Næste århundrede'
        },
        timePickerLocale: {
            placeholder: 'Vælg tid'
        }
    },
    Pagination: {
        items_per_page: '/ side',
        jump_to: 'Gå til',
        jump_to_confirm: 'bekræft',
        page: '',
        prev_page: 'Forrige Side',
        next_page: 'Næste Side',
        prev_5: 'Forrige 5 Sider',
        next_5: 'Næste 5 Sider',
        prev_3: 'Forrige 3 Sider',
        next_3: 'Næste 3 Sider'
    },
    Table: {
        filterTitle: 'Filtermenu',
        filterConfirm: 'OK',
        filterReset: 'Nulstil',
        selectAll: 'Vælg alle',
        selectInvert: 'Inverter valg'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Afbryd',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Afbryd'
    },
    Transfer: {
        searchPlaceholder: 'Søg her',
        itemUnit: 'element',
        itemsUnit: 'elementer'
    },
    Upload: {
        uploading: 'Uploader...',
        removeFile: 'Fjern fil',
        uploadError: 'Fejl ved upload',
        previewFile: 'Forhåndsvisning',
        downloadFile: 'Download fil'
    },
    Empty: {
        description: 'Ingen data'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var de_DE = {
    locale: 'de',
    Pagination: {
        items_per_page: '/ Seite',
        jump_to: 'Gehe zu',
        jump_to_confirm: 'bestätigen',
        page: '',
        prev_page: 'Vorherige Seite',
        next_page: 'Nächste Seite',
        prev_5: '5 Seiten zurück',
        next_5: '5 Seiten vor',
        prev_3: '3 Seiten zurück',
        next_3: '3 Seiten vor'
    },
    DatePicker: {
        lang: {
            placeholder: 'Datum auswählen',
            yearPlaceholder: 'Jahr auswählen',
            quarterPlaceholder: 'Quartal auswählen',
            monthPlaceholder: 'Monat auswählen',
            weekPlaceholder: 'Woche auswählen',
            rangePlaceholder: ['Startdatum', 'Enddatum'],
            rangeYearPlaceholder: ['Startjahr', 'Endjahr'],
            rangeMonthPlaceholder: ['Startmonat', 'Endmonat'],
            rangeWeekPlaceholder: ['Startwoche', 'Endwoche'],
            locale: 'de_DE',
            today: 'Heute',
            now: 'Jetzt',
            backToToday: 'Zurück zu Heute',
            ok: 'OK',
            clear: 'Zurücksetzen',
            month: 'Monat',
            year: 'Jahr',
            timeSelect: 'Zeit wählen',
            dateSelect: 'Datum wählen',
            weekSelect: 'Woche wählen',
            monthSelect: 'Wähle einen Monat',
            yearSelect: 'Wähle ein Jahr',
            decadeSelect: 'Wähle ein Jahrzehnt',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Vorheriger Monat (PageUp)',
            nextMonth: 'Nächster Monat (PageDown)',
            previousYear: 'Vorheriges Jahr (Ctrl + left)',
            nextYear: 'Nächstes Jahr (Ctrl + right)',
            previousDecade: 'Vorheriges Jahrzehnt',
            nextDecade: 'Nächstes Jahrzehnt',
            previousCentury: 'Vorheriges Jahrhundert',
            nextCentury: 'Nächstes Jahrhundert'
        },
        timePickerLocale: {
            placeholder: 'Zeit auswählen',
            rangePlaceholder: ['Startzeit', 'Endzeit']
        }
    },
    TimePicker: {
        placeholder: 'Zeit auswählen'
    },
    Calendar: {
        lang: {
            placeholder: 'Datum auswählen',
            yearPlaceholder: 'Jahr auswählen',
            quarterPlaceholder: 'Quartal auswählen',
            monthPlaceholder: 'Monat auswählen',
            weekPlaceholder: 'Woche auswählen',
            rangePlaceholder: ['Startdatum', 'Enddatum'],
            rangeYearPlaceholder: ['Startjahr', 'Endjahr'],
            rangeMonthPlaceholder: ['Startmonat', 'Endmonat'],
            rangeWeekPlaceholder: ['Startwoche', 'Endwoche'],
            locale: 'de_DE',
            today: 'Heute',
            now: 'Jetzt',
            backToToday: 'Zurück zu Heute',
            ok: 'OK',
            clear: 'Zurücksetzen',
            month: 'Monat',
            year: 'Jahr',
            timeSelect: 'Zeit wählen',
            dateSelect: 'Datum wählen',
            weekSelect: 'Woche wählen',
            monthSelect: 'Wähle einen Monat',
            yearSelect: 'Wähle ein Jahr',
            decadeSelect: 'Wähle ein Jahrzehnt',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Vorheriger Monat (PageUp)',
            nextMonth: 'Nächster Monat (PageDown)',
            previousYear: 'Vorheriges Jahr (Ctrl + left)',
            nextYear: 'Nächstes Jahr (Ctrl + right)',
            previousDecade: 'Vorheriges Jahrzehnt',
            nextDecade: 'Nächstes Jahrzehnt',
            previousCentury: 'Vorheriges Jahrhundert',
            nextCentury: 'Nächstes Jahrhundert'
        },
        timePickerLocale: {
            placeholder: 'Zeit auswählen',
            rangePlaceholder: ['Startzeit', 'Endzeit']
        }
    },
    global: {
        placeholder: 'Bitte auswählen'
    },
    Table: {
        filterTitle: 'Filter-Menü',
        filterConfirm: 'OK',
        filterReset: 'Zurücksetzen',
        filterEmptyText: 'Keine Filter',
        emptyText: 'Keine Daten',
        selectAll: 'Selektiere Alle',
        selectInvert: 'Selektion Invertieren',
        selectionAll: 'Wählen Sie alle Daten aus',
        sortTitle: 'Sortieren',
        expand: 'Zeile erweitern',
        collapse: 'Zeile reduzieren',
        triggerDesc: 'Klicken zur absteigenden  Sortierung',
        triggerAsc: 'Klicken zur aufsteigenden Sortierung',
        cancelSort: 'Klicken zum Abbrechen der Sortierung'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Abbrechen',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Abbrechen'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Suchen',
        itemUnit: 'Eintrag',
        itemsUnit: 'Einträge',
        remove: 'Entfernen',
        selectCurrent: 'Aktuelle Seite auswählen',
        removeCurrent: 'Aktuelle Seite abwählen',
        selectAll: 'Alle Daten auswählen',
        removeAll: 'Alle Daten abwählen',
        selectInvert: 'Aktuelle Auswahl invertieren'
    },
    Upload: {
        uploading: 'Hochladen...',
        removeFile: 'Datei entfernen',
        uploadError: 'Fehler beim Hochladen',
        previewFile: 'Dateivorschau',
        downloadFile: 'Download-Datei'
    },
    Empty: {
        description: 'Keine Daten'
    },
    Text: {
        edit: 'Bearbeiten',
        copy: 'Kopieren',
        copied: 'Kopiert',
        expand: 'Erweitern'
    },
    PageHeader: {
        back: 'Zurück'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var el_GR = {
    locale: 'el',
    Pagination: {
        items_per_page: '/ σελίδα',
        jump_to: 'Μετάβαση',
        jump_to_confirm: 'επιβεβαιώνω',
        page: '',
        prev_page: 'Προηγούμενη Σελίδα',
        next_page: 'Επόμενη Σελίδα',
        prev_5: 'Προηγούμενες 5 Σελίδες',
        next_5: 'Επόμενες 5 σελίδες',
        prev_3: 'Προηγούμενες 3 Σελίδες',
        next_3: 'Επόμενες 3 Σελίδες'
    },
    DatePicker: {
        lang: {
            placeholder: 'Επιλέξτε ημερομηνία',
            rangePlaceholder: ['Αρχική ημερομηνία', 'Τελική ημερομηνία'],
            locale: 'el_GR',
            today: 'Σήμερα',
            now: 'Τώρα',
            backToToday: 'Πίσω στη σημερινή μέρα',
            ok: 'Ok',
            clear: 'Καθαρισμός',
            month: 'Μήνας',
            year: 'Έτος',
            timeSelect: 'Επιλογή ώρας',
            dateSelect: 'Επιλογή ημερομηνίας',
            monthSelect: 'Επιλογή μήνα',
            yearSelect: 'Επιλογή έτους',
            decadeSelect: 'Επιλογή δεκαετίας',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Προηγούμενος μήνας (PageUp)',
            nextMonth: 'Επόμενος μήνας (PageDown)',
            previousYear: 'Προηγούμενο έτος (Control + αριστερά)',
            nextYear: 'Επόμενο έτος (Control + δεξιά)',
            previousDecade: 'Προηγούμενη δεκαετία',
            nextDecade: 'Επόμενη δεκαετία',
            previousCentury: 'Προηγούμενος αιώνας',
            nextCentury: 'Επόμενος αιώνας'
        },
        timePickerLocale: {
            placeholder: 'Επιλέξτε ώρα'
        }
    },
    TimePicker: {
        placeholder: 'Επιλέξτε ώρα'
    },
    Calendar: {
        lang: {
            placeholder: 'Επιλέξτε ημερομηνία',
            rangePlaceholder: ['Αρχική ημερομηνία', 'Τελική ημερομηνία'],
            locale: 'el_GR',
            today: 'Σήμερα',
            now: 'Τώρα',
            backToToday: 'Πίσω στη σημερινή μέρα',
            ok: 'Ok',
            clear: 'Καθαρισμός',
            month: 'Μήνας',
            year: 'Έτος',
            timeSelect: 'Επιλογή ώρας',
            dateSelect: 'Επιλογή ημερομηνίας',
            monthSelect: 'Επιλογή μήνα',
            yearSelect: 'Επιλογή έτους',
            decadeSelect: 'Επιλογή δεκαετίας',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Προηγούμενος μήνας (PageUp)',
            nextMonth: 'Επόμενος μήνας (PageDown)',
            previousYear: 'Προηγούμενο έτος (Control + αριστερά)',
            nextYear: 'Επόμενο έτος (Control + δεξιά)',
            previousDecade: 'Προηγούμενη δεκαετία',
            nextDecade: 'Επόμενη δεκαετία',
            previousCentury: 'Προηγούμενος αιώνας',
            nextCentury: 'Επόμενος αιώνας'
        },
        timePickerLocale: {
            placeholder: 'Επιλέξτε ώρα'
        }
    },
    Table: {
        filterTitle: 'Μενού φίλτρων',
        filterConfirm: 'ΟΚ',
        filterReset: 'Επαναφορά',
        selectAll: 'Επιλογή τρέχουσας σελίδας',
        selectInvert: 'Αντιστροφή τρέχουσας σελίδας'
    },
    Modal: {
        okText: 'ΟΚ',
        cancelText: 'Άκυρο',
        justOkText: 'ΟΚ'
    },
    Popconfirm: {
        okText: 'ΟΚ',
        cancelText: 'Άκυρο'
    },
    Transfer: {
        searchPlaceholder: 'Αναζήτηση',
        itemUnit: 'αντικείμενο',
        itemsUnit: 'αντικείμενα'
    },
    Upload: {
        uploading: 'Μεταφόρτωση...',
        removeFile: 'Αφαίρεση αρχείου',
        uploadError: 'Σφάλμα μεταφόρτωσης',
        previewFile: 'Προεπισκόπηση αρχείου',
        downloadFile: 'Λήψη αρχείου'
    },
    Empty: {
        description: 'Δεν υπάρχουν δεδομένα'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var en_GB = {
    locale: 'en-gb',
    Pagination: {
        items_per_page: '/ page',
        jump_to: 'Go to',
        jump_to_confirm: 'confirm',
        page: '',
        prev_page: 'Previous Page',
        next_page: 'Next Page',
        prev_5: 'Previous 5 Pages',
        next_5: 'Next 5 Pages',
        prev_3: 'Previous 3 Pages',
        next_3: 'Next 3 Pages'
    },
    DatePicker: {
        lang: {
            placeholder: 'Select date',
            rangePlaceholder: ['Start date', 'End date'],
            locale: 'en_GB',
            today: 'Today',
            now: 'Now',
            backToToday: 'Back to today',
            ok: 'Ok',
            clear: 'Clear',
            month: 'Month',
            year: 'Year',
            timeSelect: 'Select time',
            dateSelect: 'Select date',
            monthSelect: 'Choose a month',
            yearSelect: 'Choose a year',
            decadeSelect: 'Choose a decade',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Previous month (PageUp)',
            nextMonth: 'Next month (PageDown)',
            previousYear: 'Last year (Control + left)',
            nextYear: 'Next year (Control + right)',
            previousDecade: 'Last decade',
            nextDecade: 'Next decade',
            previousCentury: 'Last century',
            nextCentury: 'Next century'
        },
        timePickerLocale: {
            placeholder: 'Select time'
        }
    },
    TimePicker: {
        placeholder: 'Select time'
    },
    Calendar: {
        lang: {
            placeholder: 'Select date',
            rangePlaceholder: ['Start date', 'End date'],
            locale: 'en_GB',
            today: 'Today',
            now: 'Now',
            backToToday: 'Back to today',
            ok: 'Ok',
            clear: 'Clear',
            month: 'Month',
            year: 'Year',
            timeSelect: 'Select time',
            dateSelect: 'Select date',
            monthSelect: 'Choose a month',
            yearSelect: 'Choose a year',
            decadeSelect: 'Choose a decade',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Previous month (PageUp)',
            nextMonth: 'Next month (PageDown)',
            previousYear: 'Last year (Control + left)',
            nextYear: 'Next year (Control + right)',
            previousDecade: 'Last decade',
            nextDecade: 'Next decade',
            previousCentury: 'Last century',
            nextCentury: 'Next century'
        },
        timePickerLocale: {
            placeholder: 'Select time'
        }
    },
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
        downloadFile: 'Download file'
    },
    Empty: {
        description: 'No data'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var es_ES = {
    locale: 'es',
    Pagination: {
        items_per_page: '/ página',
        jump_to: 'Ir a',
        jump_to_confirm: 'confirmar',
        page: '',
        prev_page: 'Página anterior',
        next_page: 'Página siguiente',
        prev_5: '5 páginas previas',
        next_5: '5 páginas siguientes',
        prev_3: '3 páginas previas',
        next_3: '3 páginas siguientes'
    },
    DatePicker: {
        lang: {
            placeholder: 'Seleccionar fecha',
            yearPlaceholder: 'Seleccionar año',
            quarterPlaceholder: 'Seleccionar trimestre',
            monthPlaceholder: 'Seleccionar mes',
            weekPlaceholder: 'Seleccionar semana',
            rangePlaceholder: ['Fecha inicial', 'Fecha final'],
            rangeYearPlaceholder: ['Año inicial', 'Año final'],
            rangeMonthPlaceholder: ['Mes inicial', 'Mes final'],
            rangeWeekPlaceholder: ['Semana inicial', 'Semana final'],
            locale: 'es_ES',
            today: 'Hoy',
            now: 'Ahora',
            backToToday: 'Volver a hoy',
            ok: 'Aceptar',
            clear: 'Limpiar',
            month: 'Mes',
            year: 'Año',
            timeSelect: 'Seleccionar hora',
            dateSelect: 'Seleccionar fecha',
            weekSelect: 'Elegir una semana',
            monthSelect: 'Elegir un mes',
            yearSelect: 'Elegir un año',
            decadeSelect: 'Elegir una década',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Mes anterior (PageUp)',
            nextMonth: 'Mes siguiente (PageDown)',
            previousYear: 'Año anterior (Control + left)',
            nextYear: 'Año siguiente (Control + right)',
            previousDecade: 'Década anterior',
            nextDecade: 'Década siguiente',
            previousCentury: 'Siglo anterior',
            nextCentury: 'Siglo siguiente'
        },
        timePickerLocale: {
            placeholder: 'Seleccionar hora',
            rangePlaceholder: ['Hora inicial', 'Hora final']
        }
    },
    TimePicker: {
        placeholder: 'Seleccionar hora',
        rangePlaceholder: ['Hora inicial', 'Hora final']
    },
    Calendar: {
        lang: {
            placeholder: 'Seleccionar fecha',
            yearPlaceholder: 'Seleccionar año',
            quarterPlaceholder: 'Seleccionar trimestre',
            monthPlaceholder: 'Seleccionar mes',
            weekPlaceholder: 'Seleccionar semana',
            rangePlaceholder: ['Fecha inicial', 'Fecha final'],
            rangeYearPlaceholder: ['Año inicial', 'Año final'],
            rangeMonthPlaceholder: ['Mes inicial', 'Mes final'],
            rangeWeekPlaceholder: ['Semana inicial', 'Semana final'],
            locale: 'es_ES',
            today: 'Hoy',
            now: 'Ahora',
            backToToday: 'Volver a hoy',
            ok: 'Aceptar',
            clear: 'Limpiar',
            month: 'Mes',
            year: 'Año',
            timeSelect: 'Seleccionar hora',
            dateSelect: 'Seleccionar fecha',
            weekSelect: 'Elegir una semana',
            monthSelect: 'Elegir un mes',
            yearSelect: 'Elegir un año',
            decadeSelect: 'Elegir una década',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Mes anterior (PageUp)',
            nextMonth: 'Mes siguiente (PageDown)',
            previousYear: 'Año anterior (Control + left)',
            nextYear: 'Año siguiente (Control + right)',
            previousDecade: 'Década anterior',
            nextDecade: 'Década siguiente',
            previousCentury: 'Siglo anterior',
            nextCentury: 'Siglo siguiente'
        },
        timePickerLocale: {
            placeholder: 'Seleccionar hora',
            rangePlaceholder: ['Hora inicial', 'Hora final']
        }
    },
    global: {
        placeholder: 'Seleccione'
    },
    Table: {
        filterTitle: 'Filtrar menú',
        filterConfirm: 'Aceptar',
        filterReset: 'Reiniciar',
        filterEmptyText: 'Sin filtros',
        emptyText: 'Sin datos',
        selectAll: 'Seleccionar todo',
        selectInvert: 'Invertir selección',
        selectionAll: 'Seleccionar todos los datos',
        sortTitle: 'Ordenar',
        expand: 'Expandir fila',
        collapse: 'Ocultar fila',
        triggerDesc: 'Clic para ordenar descendentemente',
        triggerAsc: 'Clic para ordenar ascedentemente',
        cancelSort: 'Clic para cancelar ordenación'
    },
    Modal: {
        okText: 'Aceptar',
        cancelText: 'Cancelar',
        justOkText: 'Aceptar'
    },
    Popconfirm: {
        okText: 'Aceptar',
        cancelText: 'Cancelar'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Buscar aquí',
        itemUnit: 'elemento',
        itemsUnit: 'elementos',
        remove: 'Eliminar',
        selectCurrent: 'Seleccionar página actual',
        removeCurrent: 'Quitar página actual',
        selectAll: 'Seleccionar todos los datos',
        removeAll: 'Eliminar todos los datos',
        selectInvert: 'Invertir página actual'
    },
    Upload: {
        uploading: 'Subiendo...',
        removeFile: 'Eliminar archivo',
        uploadError: 'Error al subir el archivo',
        previewFile: 'Vista previa',
        downloadFile: 'Descargar archivo'
    },
    Empty: {
        description: 'No hay datos'
    },
    Icon: {
        icon: 'ícono'
    },
    Text: {
        edit: 'editar',
        copy: 'copiar',
        copied: 'copiado',
        expand: 'expandir'
    },
    PageHeader: {
        back: 'volver'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var et_EE = {
    locale: 'et',
    Pagination: {
        items_per_page: '/ leheküljel',
        jump_to: 'Hüppa',
        jump_to_confirm: 'Kinnitage',
        page: '',
        prev_page: 'Eelmine leht',
        next_page: 'Järgmine leht',
        prev_5: 'Eelmised 5 lehekülge',
        next_5: 'Järgmised 5 lehekülge',
        prev_3: 'Eelmised 3 lehekülge',
        next_3: 'Järgmised 3 lehekülge'
    },
    DatePicker: {
        lang: {
            placeholder: 'Vali kuupäev',
            rangePlaceholder: ['Algus kuupäev', 'Lõpu kuupäev'],
            locale: 'et_EE',
            today: 'Täna',
            now: 'Praegu',
            backToToday: 'Tagasi tänase juurde',
            ok: 'Ok',
            clear: 'Tühista',
            month: 'Kuu',
            year: 'Aasta',
            timeSelect: 'Vali aeg',
            dateSelect: 'Vali kuupäev',
            monthSelect: 'Vali kuu',
            yearSelect: 'Vali aasta',
            decadeSelect: 'Vali dekaad',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Eelmine kuu (PageUp)',
            nextMonth: 'Järgmine kuu (PageDown)',
            previousYear: 'Eelmine aasta (Control + left)',
            nextYear: 'Järgmine aasta (Control + right)',
            previousDecade: 'Eelmine dekaad',
            nextDecade: 'Järgmine dekaad',
            previousCentury: 'Eelmine sajand',
            nextCentury: 'Järgmine sajand'
        },
        timePickerLocale: {
            placeholder: 'Vali aeg'
        }
    },
    TimePicker: {
        placeholder: 'Vali aeg'
    },
    Calendar: {
        lang: {
            placeholder: 'Vali kuupäev',
            rangePlaceholder: ['Algus kuupäev', 'Lõpu kuupäev'],
            locale: 'et_EE',
            today: 'Täna',
            now: 'Praegu',
            backToToday: 'Tagasi tänase juurde',
            ok: 'Ok',
            clear: 'Tühista',
            month: 'Kuu',
            year: 'Aasta',
            timeSelect: 'Vali aeg',
            dateSelect: 'Vali kuupäev',
            monthSelect: 'Vali kuu',
            yearSelect: 'Vali aasta',
            decadeSelect: 'Vali dekaad',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Eelmine kuu (PageUp)',
            nextMonth: 'Järgmine kuu (PageDown)',
            previousYear: 'Eelmine aasta (Control + left)',
            nextYear: 'Järgmine aasta (Control + right)',
            previousDecade: 'Eelmine dekaad',
            nextDecade: 'Järgmine dekaad',
            previousCentury: 'Eelmine sajand',
            nextCentury: 'Järgmine sajand'
        },
        timePickerLocale: {
            placeholder: 'Vali aeg'
        }
    },
    Table: {
        filterTitle: 'Filtri menüü',
        filterConfirm: 'OK',
        filterReset: 'Nulli',
        selectAll: 'Vali kõik',
        selectInvert: 'Inverteeri valik'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Tühista',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Tühista'
    },
    Transfer: {
        searchPlaceholder: 'Otsi siit',
        itemUnit: 'kogus',
        itemsUnit: 'kogus'
    },
    Upload: {
        uploading: 'Üleslaadimine...',
        removeFile: 'Eemalda fail',
        uploadError: 'Üleslaadimise tõrge',
        previewFile: 'Faili eelvaade',
        downloadFile: 'Laadige fail alla'
    },
    Empty: {
        description: 'Andmed puuduvad'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var fa_IR = {
    locale: 'fa',
    Pagination: {
        items_per_page: '/ صفحه',
        jump_to: 'برو به',
        jump_to_confirm: 'تایید',
        page: '',
        prev_page: 'صفحه قبلی',
        next_page: 'صفحه بعدی',
        prev_5: '۵ صفحه قبلی',
        next_5: '۵ صفحه بعدی',
        prev_3: '۳ صفحه قبلی',
        next_3: '۳ صفحه بعدی'
    },
    DatePicker: {
        lang: {
            placeholder: 'انتخاب تاریخ',
            rangePlaceholder: ['تاریخ شروع', 'تاریخ پایان'],
            locale: 'fa_IR',
            today: 'امروز',
            now: 'اکنون',
            backToToday: 'بازگشت به روز',
            ok: 'باشه',
            clear: 'پاک کردن',
            month: 'ماه',
            year: 'سال',
            timeSelect: 'انتخاب زمان',
            dateSelect: 'انتخاب تاریخ',
            monthSelect: 'یک ماه را انتخاب کنید',
            yearSelect: 'یک سال را انتخاب کنید',
            decadeSelect: 'یک دهه را انتخاب کنید',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'ماه قبل (PageUp)',
            nextMonth: 'ماه بعد (PageDown)',
            previousYear: 'سال قبل (Control + left)',
            nextYear: 'سال بعد (Control + right)',
            previousDecade: 'دهه قبل',
            nextDecade: 'دهه بعد',
            previousCentury: 'قرن قبل',
            nextCentury: 'قرن بعد'
        },
        timePickerLocale: {
            placeholder: 'انتخاب زمان'
        }
    },
    TimePicker: {
        placeholder: 'انتخاب زمان'
    },
    Calendar: {
        lang: {
            placeholder: 'انتخاب تاریخ',
            rangePlaceholder: ['تاریخ شروع', 'تاریخ پایان'],
            locale: 'fa_IR',
            today: 'امروز',
            now: 'اکنون',
            backToToday: 'بازگشت به روز',
            ok: 'باشه',
            clear: 'پاک کردن',
            month: 'ماه',
            year: 'سال',
            timeSelect: 'انتخاب زمان',
            dateSelect: 'انتخاب تاریخ',
            monthSelect: 'یک ماه را انتخاب کنید',
            yearSelect: 'یک سال را انتخاب کنید',
            decadeSelect: 'یک دهه را انتخاب کنید',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'ماه قبل (PageUp)',
            nextMonth: 'ماه بعد (PageDown)',
            previousYear: 'سال قبل (Control + left)',
            nextYear: 'سال بعد (Control + right)',
            previousDecade: 'دهه قبل',
            nextDecade: 'دهه بعد',
            previousCentury: 'قرن قبل',
            nextCentury: 'قرن بعد'
        },
        timePickerLocale: {
            placeholder: 'انتخاب زمان'
        }
    },
    Table: {
        filterTitle: 'منوی فیلتر',
        filterConfirm: 'تایید',
        filterReset: 'پاک کردن',
        selectAll: 'انتخاب صفحه‌ی کنونی',
        selectInvert: 'معکوس کردن انتخاب‌ها در صفحه ی کنونی',
        selectionAll: 'انتخاب همه داده‌ها',
        sortTitle: 'مرتب سازی',
        expand: 'باز شدن ردیف',
        collapse: 'بستن ردیف',
        triggerDesc: 'ترتیب نزولی',
        triggerAsc: 'ترتیب صعودی',
        cancelSort: 'لغوِ ترتیبِ داده شده'
    },
    Modal: {
        okText: 'تایید',
        cancelText: 'لغو',
        justOkText: 'تایید'
    },
    Popconfirm: {
        okText: 'تایید',
        cancelText: 'لغو'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'جستجو',
        itemUnit: '',
        itemsUnit: ''
    },
    Upload: {
        uploading: 'در حال آپلود...',
        removeFile: 'حذف فایل',
        uploadError: 'خطا در آپلود',
        previewFile: 'مشاهده‌ی فایل',
        downloadFile: 'دریافت فایل'
    },
    Empty: {
        description: 'داده‌ای موجود نیست'
    },
    Icon: {
        icon: 'آیکن'
    },
    Text: {
        edit: 'ویرایش',
        copy: 'کپس',
        copied: 'کپی شد',
        expand: 'توسعه'
    },
    PageHeader: {
        back: 'برگشت'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var fi_FI = {
    locale: 'fi',
    Pagination: {
        items_per_page: '/ sivu',
        jump_to: 'Mene',
        jump_to_confirm: 'Potvrdite',
        page: '',
        prev_page: 'Edellinen sivu',
        next_page: 'Seuraava sivu',
        prev_5: 'Edelliset 5 sivua',
        next_5: 'Seuraavat 5 sivua',
        prev_3: 'Edelliset 3 sivua',
        next_3: 'Seuraavat 3 sivua'
    },
    DatePicker: {
        lang: {
            placeholder: 'Valitse päivä',
            rangePlaceholder: ['Alku päivä', 'Loppu päivä'],
            locale: 'fi_FI',
            today: 'Tänään',
            now: 'Nyt',
            backToToday: 'Tämä päivä',
            ok: 'Ok',
            clear: 'Tyhjennä',
            month: 'Kuukausi',
            year: 'Vuosi',
            timeSelect: 'Valise aika',
            dateSelect: 'Valitse päivä',
            monthSelect: 'Valitse kuukausi',
            yearSelect: 'Valitse vuosi',
            decadeSelect: 'Valitse vuosikymmen',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Edellinen kuukausi (PageUp)',
            nextMonth: 'Seuraava kuukausi (PageDown)',
            previousYear: 'Edellinen vuosi (Control + left)',
            nextYear: 'Seuraava vuosi (Control + right)',
            previousDecade: 'Edellinen vuosikymmen',
            nextDecade: 'Seuraava vuosikymmen',
            previousCentury: 'Edellinen vuosisata',
            nextCentury: 'Seuraava vuosisata'
        },
        timePickerLocale: {
            placeholder: 'Valitse aika'
        }
    },
    TimePicker: {
        placeholder: 'Valitse aika'
    },
    Calendar: {
        lang: {
            placeholder: 'Valitse päivä',
            rangePlaceholder: ['Alku päivä', 'Loppu päivä'],
            locale: 'fi_FI',
            today: 'Tänään',
            now: 'Nyt',
            backToToday: 'Tämä päivä',
            ok: 'Ok',
            clear: 'Tyhjennä',
            month: 'Kuukausi',
            year: 'Vuosi',
            timeSelect: 'Valise aika',
            dateSelect: 'Valitse päivä',
            monthSelect: 'Valitse kuukausi',
            yearSelect: 'Valitse vuosi',
            decadeSelect: 'Valitse vuosikymmen',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Edellinen kuukausi (PageUp)',
            nextMonth: 'Seuraava kuukausi (PageDown)',
            previousYear: 'Edellinen vuosi (Control + left)',
            nextYear: 'Seuraava vuosi (Control + right)',
            previousDecade: 'Edellinen vuosikymmen',
            nextDecade: 'Seuraava vuosikymmen',
            previousCentury: 'Edellinen vuosisata',
            nextCentury: 'Seuraava vuosisata'
        },
        timePickerLocale: {
            placeholder: 'Valitse aika'
        }
    },
    Table: {
        filterTitle: 'Suodatus valikko',
        filterConfirm: 'OK',
        filterReset: 'Tyhjennä',
        selectAll: 'Valitse kaikki',
        selectInvert: 'Valitse päinvastoin',
        sortTitle: 'Lajittele'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Peruuta',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Peruuta'
    },
    Transfer: {
        searchPlaceholder: 'Etsi täältä',
        itemUnit: 'kohde',
        itemsUnit: 'kohdetta'
    },
    Upload: {
        uploading: 'Lähetetään...',
        removeFile: 'Poista tiedosto',
        uploadError: 'Virhe lähetyksessä',
        previewFile: 'Esikatsele tiedostoa',
        downloadFile: 'Lataa tiedosto'
    },
    Empty: {
        description: 'Ei kohteita'
    },
    Text: {
        edit: 'Muokkaa',
        copy: 'Kopioi',
        copied: 'Kopioitu',
        expand: 'Näytä lisää'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var fr_BE = {
    locale: 'fr',
    Pagination: {
        items_per_page: '/ page',
        jump_to: 'Aller à',
        jump_to_confirm: 'confirmer',
        page: '',
        prev_page: 'Page précédente',
        next_page: 'Page suivante',
        prev_5: '5 Pages précédentes',
        next_5: '5 Pages suivantes',
        prev_3: '3 Pages précédentes',
        next_3: '3 Pages suivantes'
    },
    DatePicker: {
        lang: {
            placeholder: 'Sélectionner une date',
            rangePlaceholder: ['Date de début', 'Date de fin'],
            locale: 'fr_BE',
            today: "Aujourd'hui",
            now: 'Maintenant',
            backToToday: "Aujourd'hui",
            ok: 'Ok',
            clear: 'Rétablir',
            month: 'Mois',
            year: 'Année',
            timeSelect: "Sélectionner l'heure",
            dateSelect: "Sélectionner l'heure",
            monthSelect: 'Choisissez un mois',
            yearSelect: 'Choisissez une année',
            decadeSelect: 'Choisissez une décennie',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Mois précédent (PageUp)',
            nextMonth: 'Mois suivant (PageDown)',
            previousYear: 'Année précédente (Ctrl + gauche)',
            nextYear: 'Année prochaine (Ctrl + droite)',
            previousDecade: 'Décennie précédente',
            nextDecade: 'Décennie suivante',
            previousCentury: 'Siècle précédent',
            nextCentury: 'Siècle suivant'
        },
        timePickerLocale: {
            placeholder: "Sélectionner l'heure"
        }
    },
    TimePicker: {
        placeholder: "Sélectionner l'heure"
    },
    Calendar: {
        lang: {
            placeholder: 'Sélectionner une date',
            rangePlaceholder: ['Date de début', 'Date de fin'],
            locale: 'fr_BE',
            today: "Aujourd'hui",
            now: 'Maintenant',
            backToToday: "Aujourd'hui",
            ok: 'Ok',
            clear: 'Rétablir',
            month: 'Mois',
            year: 'Année',
            timeSelect: "Sélectionner l'heure",
            dateSelect: "Sélectionner l'heure",
            monthSelect: 'Choisissez un mois',
            yearSelect: 'Choisissez une année',
            decadeSelect: 'Choisissez une décennie',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Mois précédent (PageUp)',
            nextMonth: 'Mois suivant (PageDown)',
            previousYear: 'Année précédente (Ctrl + gauche)',
            nextYear: 'Année prochaine (Ctrl + droite)',
            previousDecade: 'Décennie précédente',
            nextDecade: 'Décennie suivante',
            previousCentury: 'Siècle précédent',
            nextCentury: 'Siècle suivant'
        },
        timePickerLocale: {
            placeholder: "Sélectionner l'heure"
        }
    },
    Table: {
        filterTitle: 'Filtrer',
        filterConfirm: 'OK',
        filterReset: 'Réinitialiser'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuler',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuler'
    },
    Transfer: {
        searchPlaceholder: 'Recherche',
        itemUnit: 'élément',
        itemsUnit: 'éléments'
    },
    Upload: {
        uploading: 'Téléchargement...',
        removeFile: 'Effacer le fichier',
        uploadError: 'Erreur de téléchargement',
        previewFile: 'Fichier de prévisualisation',
        downloadFile: 'Télécharger un fichier'
    },
    Empty: {
        description: 'Aucune donnée'
    },
    Text: {
        edit: 'éditer',
        copy: 'copier',
        copied: 'copie effectuée',
        expand: 'développer'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var fr_FR = {
    locale: 'fr',
    Pagination: {
        items_per_page: '/ page',
        jump_to: 'Aller à',
        jump_to_confirm: 'confirmer',
        page: '',
        prev_page: 'Page précédente',
        next_page: 'Page suivante',
        prev_5: '5 Pages précédentes',
        next_5: '5 Pages suivantes',
        prev_3: '3 Pages précédentes',
        next_3: '3 Pages suivantes'
    },
    DatePicker: {
        lang: {
            placeholder: 'Sélectionner une date',
            yearPlaceholder: 'Sélectionner une année',
            quarterPlaceholder: 'Sélectionner un trimestre',
            monthPlaceholder: 'Sélectionner un mois',
            weekPlaceholder: 'Sélectionner une semaine',
            rangePlaceholder: ['Date de début', 'Date de fin'],
            rangeYearPlaceholder: ['Année de début', 'Année de fin'],
            rangeMonthPlaceholder: ['Mois de début', 'Mois de fin'],
            rangeWeekPlaceholder: ['Semaine de début', 'Semaine de fin'],
            locale: 'fr_FR',
            today: "Aujourd'hui",
            now: 'Maintenant',
            backToToday: "Aujourd'hui",
            ok: 'Ok',
            clear: 'Rétablir',
            month: 'Mois',
            year: 'Année',
            timeSelect: "Sélectionner l'heure",
            dateSelect: 'Sélectionner la date',
            monthSelect: 'Choisissez un mois',
            yearSelect: 'Choisissez une année',
            decadeSelect: 'Choisissez une décennie',
            yearFormat: 'YYYY',
            dateFormat: 'DD/MM/YYYY',
            dayFormat: 'DD',
            dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Mois précédent (PageUp)',
            nextMonth: 'Mois suivant (PageDown)',
            previousYear: 'Année précédente (Ctrl + gauche)',
            nextYear: 'Année prochaine (Ctrl + droite)',
            previousDecade: 'Décennie précédente',
            nextDecade: 'Décennie suivante',
            previousCentury: 'Siècle précédent',
            nextCentury: 'Siècle suivant'
        },
        timePickerLocale: {
            placeholder: "Sélectionner l'heure",
            rangePlaceholder: ['Heure de début', 'Heure de fin']
        }
    },
    TimePicker: {
        placeholder: "Sélectionner l'heure",
        rangePlaceholder: ['Heure de début', 'Heure de fin']
    },
    Calendar: {
        lang: {
            placeholder: 'Sélectionner une date',
            yearPlaceholder: 'Sélectionner une année',
            quarterPlaceholder: 'Sélectionner un trimestre',
            monthPlaceholder: 'Sélectionner un mois',
            weekPlaceholder: 'Sélectionner une semaine',
            rangePlaceholder: ['Date de début', 'Date de fin'],
            rangeYearPlaceholder: ['Année de début', 'Année de fin'],
            rangeMonthPlaceholder: ['Mois de début', 'Mois de fin'],
            rangeWeekPlaceholder: ['Semaine de début', 'Semaine de fin'],
            locale: 'fr_FR',
            today: "Aujourd'hui",
            now: 'Maintenant',
            backToToday: "Aujourd'hui",
            ok: 'Ok',
            clear: 'Rétablir',
            month: 'Mois',
            year: 'Année',
            timeSelect: "Sélectionner l'heure",
            dateSelect: 'Sélectionner la date',
            monthSelect: 'Choisissez un mois',
            yearSelect: 'Choisissez une année',
            decadeSelect: 'Choisissez une décennie',
            yearFormat: 'YYYY',
            dateFormat: 'DD/MM/YYYY',
            dayFormat: 'DD',
            dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Mois précédent (PageUp)',
            nextMonth: 'Mois suivant (PageDown)',
            previousYear: 'Année précédente (Ctrl + gauche)',
            nextYear: 'Année prochaine (Ctrl + droite)',
            previousDecade: 'Décennie précédente',
            nextDecade: 'Décennie suivante',
            previousCentury: 'Siècle précédent',
            nextCentury: 'Siècle suivant'
        },
        timePickerLocale: {
            placeholder: "Sélectionner l'heure",
            rangePlaceholder: ['Heure de début', 'Heure de fin']
        }
    },
    Table: {
        filterTitle: 'Filtrer',
        filterConfirm: 'OK',
        filterReset: 'Réinitialiser',
        selectAll: 'Sélectionner la page actuelle',
        selectInvert: 'Inverser la sélection de la page actuelle',
        selectionAll: 'Sélectionner toutes les données',
        sortTitle: 'Trier',
        expand: 'Développer la ligne',
        collapse: 'Réduire la ligne',
        triggerDesc: 'Trier par ordre décroissant',
        triggerAsc: 'Trier par ordre croissant',
        cancelSort: 'Annuler le tri'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuler',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuler'
    },
    Transfer: {
        searchPlaceholder: 'Rechercher',
        itemUnit: 'élément',
        itemsUnit: 'éléments'
    },
    Empty: {
        description: 'Aucune donnée'
    },
    Upload: {
        uploading: 'Téléchargement...',
        removeFile: 'Effacer le fichier',
        uploadError: 'Erreur de téléchargement',
        previewFile: 'Fichier de prévisualisation',
        downloadFile: 'Télécharger un fichier'
    },
    Text: {
        edit: 'Éditer',
        copy: 'Copier',
        copied: 'Copie effectuée',
        expand: 'Développer'
    },
    PageHeader: {
        back: 'Retour'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ga_IE = {
    locale: 'ga',
    Pagination: {
        items_per_page: '/ leathanach',
        jump_to: 'Téigh',
        jump_to_confirm: 'dheimhnigh',
        page: '',
        prev_page: 'Leathanach Roimhe Seo',
        next_page: 'An chéad leathanach eile',
        prev_5: '5 leathanach roimhe seo',
        next_5: 'Ar Aghaidh 5 Leathanaigh',
        prev_3: '3 leathanach roimhe seo',
        next_3: 'Ar Aghaidh 3 Leathanaigh'
    },
    DatePicker: {
        lang: {
            placeholder: 'Roghnaigh dáta',
            yearPlaceholder: 'Roghnaigh bliain',
            quarterPlaceholder: 'Roghnaigh ráithe',
            monthPlaceholder: 'Roghnaigh mí',
            weekPlaceholder: 'Roghnaigh seachtain',
            rangePlaceholder: ['Dáta tosaigh', 'Dáta deiridh'],
            rangeYearPlaceholder: ['Tús na bliana', 'Deireadh na bliana'],
            rangeMonthPlaceholder: ['Tosaigh mhí', 'Deireadh mhí'],
            rangeWeekPlaceholder: ['Tosaigh an tseachtain', 'Deireadh na seachtaine'],
            locale: 'ga_IE',
            today: 'inniu',
            now: 'anois',
            backToToday: 'Ar ais inniu',
            ok: 'ceart go leor',
            clear: 'soiléir',
            month: 'mhí',
            year: 'bhliain',
            timeSelect: 'roghnaigh am',
            dateSelect: 'roghnaigh dáta',
            weekSelect: 'Roghnaigh seachtain',
            monthSelect: 'Roghnaigh mí',
            yearSelect: 'Roghnaigh bliain',
            decadeSelect: 'Roghnaigh deich mbliana',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'An mhí roimhe seo (PageUp)',
            nextMonth: 'An mhí seo chugainn (PageDown)',
            previousYear: 'Anuraidh (Control + left)',
            nextYear: 'An bhliain seo chugainn (Control + right)',
            previousDecade: 'Le deich mbliana anuas',
            nextDecade: 'Deich mbliana amach romhainn',
            previousCentury: 'An chéid seo caite',
            nextCentury: 'An chéad aois eile'
        },
        timePickerLocale: {
            placeholder: 'Roghnaigh am',
            rangePlaceholder: ['Am tosaigh', 'Am deiridh']
        }
    },
    TimePicker: {
        placeholder: 'Roghnaigh am',
        rangePlaceholder: ['Am tosaigh', 'Am deiridh']
    },
    Calendar: {
        lang: {
            placeholder: 'Roghnaigh dáta',
            yearPlaceholder: 'Roghnaigh bliain',
            quarterPlaceholder: 'Roghnaigh ráithe',
            monthPlaceholder: 'Roghnaigh mí',
            weekPlaceholder: 'Roghnaigh seachtain',
            rangePlaceholder: ['Dáta tosaigh', 'Dáta deiridh'],
            rangeYearPlaceholder: ['Tús na bliana', 'Deireadh na bliana'],
            rangeMonthPlaceholder: ['Tosaigh mhí', 'Deireadh mhí'],
            rangeWeekPlaceholder: ['Tosaigh an tseachtain', 'Deireadh na seachtaine'],
            locale: 'ga_IE',
            today: 'inniu',
            now: 'anois',
            backToToday: 'Ar ais inniu',
            ok: 'ceart go leor',
            clear: 'soiléir',
            month: 'mhí',
            year: 'bhliain',
            timeSelect: 'roghnaigh am',
            dateSelect: 'roghnaigh dáta',
            weekSelect: 'Roghnaigh seachtain',
            monthSelect: 'Roghnaigh mí',
            yearSelect: 'Roghnaigh bliain',
            decadeSelect: 'Roghnaigh deich mbliana',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'An mhí roimhe seo (PageUp)',
            nextMonth: 'An mhí seo chugainn (PageDown)',
            previousYear: 'Anuraidh (Control + left)',
            nextYear: 'An bhliain seo chugainn (Control + right)',
            previousDecade: 'Le deich mbliana anuas',
            nextDecade: 'Deich mbliana amach romhainn',
            previousCentury: 'An chéid seo caite',
            nextCentury: 'An chéad aois eile'
        },
        timePickerLocale: {
            placeholder: 'Roghnaigh am',
            rangePlaceholder: ['Am tosaigh', 'Am deiridh']
        }
    },
    global: {
        placeholder: 'Please select'
    },
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
        selectionAll: 'Select all data',
        sortTitle: 'Sort',
        expand: 'Expand row',
        collapse: 'Collapse row',
        triggerDesc: 'Click sort by descend',
        triggerAsc: 'Click sort by ascend',
        cancelSort: 'Click to cancel sort'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items',
        remove: 'Remove',
        selectCurrent: 'Select current page',
        removeCurrent: 'Remove current page',
        selectAll: 'Select all data',
        removeAll: 'Remove all data',
        selectInvert: 'Invert current page'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
        downloadFile: 'Download file'
    },
    Empty: {
        description: 'No Data'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'Edit',
        copy: 'Copy',
        copied: 'Copied',
        expand: 'Expand'
    },
    PageHeader: {
        back: 'Back'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var gl_ES = {
    locale: 'gl',
    Pagination: {
        items_per_page: '/ páxina',
        jump_to: 'Ir a',
        jump_to_confirm: 'confirmar',
        page: '',
        prev_page: 'Páxina anterior',
        next_page: 'Páxina seguinte',
        prev_5: '5 páxinas previas',
        next_5: '5 páxinas seguintes',
        prev_3: '3 páxinas previas',
        next_3: '3 páxinas seguintes'
    },
    DatePicker: {
        lang: {
            placeholder: 'Escolla data',
            rangePlaceholder: ['Data inicial', 'Data final'],
            locale: 'gl_ES',
            today: 'Hoxe',
            now: 'Agora',
            backToToday: 'Voltar a hoxe',
            ok: 'Aceptar',
            clear: 'Limpar',
            month: 'Mes',
            year: 'Ano',
            timeSelect: 'Seleccionar hora',
            dateSelect: 'Seleccionar data',
            monthSelect: 'Elexir un mes',
            yearSelect: 'Elexir un año',
            decadeSelect: 'Elexir unha década',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Mes anterior (PageUp)',
            nextMonth: 'Mes seguinte (PageDown)',
            previousYear: 'Ano anterior (Control + left)',
            nextYear: 'Ano seguinte (Control + right)',
            previousDecade: 'Década anterior',
            nextDecade: 'Década seguinte',
            previousCentury: 'Século anterior',
            nextCentury: 'Século seguinte'
        },
        timePickerLocale: {
            placeholder: 'Escolla hora'
        }
    },
    TimePicker: {
        placeholder: 'Escolla hora'
    },
    Calendar: {
        lang: {
            placeholder: 'Escolla data',
            rangePlaceholder: ['Data inicial', 'Data final'],
            locale: 'gl_ES',
            today: 'Hoxe',
            now: 'Agora',
            backToToday: 'Voltar a hoxe',
            ok: 'Aceptar',
            clear: 'Limpar',
            month: 'Mes',
            year: 'Ano',
            timeSelect: 'Seleccionar hora',
            dateSelect: 'Seleccionar data',
            monthSelect: 'Elexir un mes',
            yearSelect: 'Elexir un año',
            decadeSelect: 'Elexir unha década',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Mes anterior (PageUp)',
            nextMonth: 'Mes seguinte (PageDown)',
            previousYear: 'Ano anterior (Control + left)',
            nextYear: 'Ano seguinte (Control + right)',
            previousDecade: 'Década anterior',
            nextDecade: 'Década seguinte',
            previousCentury: 'Século anterior',
            nextCentury: 'Século seguinte'
        },
        timePickerLocale: {
            placeholder: 'Escolla hora'
        }
    },
    global: {
        placeholder: 'Escolla'
    },
    Table: {
        filterTitle: 'Filtrar menú',
        filterConfirm: 'Aceptar',
        filterReset: 'Reiniciar',
        selectAll: 'Seleccionar todo',
        selectInvert: 'Invertir selección',
        sortTitle: 'Ordenar'
    },
    Modal: {
        okText: 'Aceptar',
        cancelText: 'Cancelar',
        justOkText: 'Aceptar'
    },
    Popconfirm: {
        okText: 'Aceptar',
        cancelText: 'Cancelar'
    },
    Transfer: {
        searchPlaceholder: 'Buscar aquí',
        itemUnit: 'elemento',
        itemsUnit: 'elementos'
    },
    Upload: {
        uploading: 'Subindo...',
        removeFile: 'Eliminar arquivo',
        uploadError: 'Error ao subir o arquivo',
        previewFile: 'Vista previa',
        downloadFile: 'Descargar arquivo'
    },
    Empty: {
        description: 'Non hai datos'
    },
    Icon: {
        icon: 'icona'
    },
    Text: {
        edit: 'editar',
        copy: 'copiar',
        copied: 'copiado',
        expand: 'expandir'
    },
    PageHeader: {
        back: 'voltar'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var he_IL = {
    locale: 'he',
    Pagination: {
        items_per_page: '/ עמוד',
        jump_to: 'עבור אל',
        jump_to_confirm: 'אישור',
        page: '',
        prev_page: 'העמוד הקודם',
        next_page: 'העמוד הבא',
        prev_5: '5 עמודים קודמים',
        next_5: '5 עמודים הבאים',
        prev_3: '3 עמודים קודמים',
        next_3: '3 עמודים הבאים'
    },
    DatePicker: {
        lang: {
            placeholder: 'בחר תאריך',
            rangePlaceholder: ['תאריך התחלה', 'תאריך סיום'],
            locale: 'he_IL',
            today: 'היום',
            now: 'עכשיו',
            backToToday: 'חזור להיום',
            ok: 'אישור',
            clear: 'איפוס',
            month: 'חודש',
            year: 'שנה',
            timeSelect: 'בחר שעה',
            dateSelect: 'בחר תאריך',
            weekSelect: 'בחר שבוע',
            monthSelect: 'בחר חודש',
            yearSelect: 'בחר שנה',
            decadeSelect: 'בחר עשור',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'חודש קודם (PageUp)',
            nextMonth: 'חודש הבא (PageDown)',
            previousYear: 'שנה שעברה (Control + left)',
            nextYear: 'שנה הבאה (Control + right)',
            previousDecade: 'העשור הקודם',
            nextDecade: 'העשור הבא',
            previousCentury: 'המאה הקודמת',
            nextCentury: 'המאה הבאה'
        },
        timePickerLocale: {
            placeholder: 'בחר שעה'
        }
    },
    TimePicker: {
        placeholder: 'בחר שעה'
    },
    Calendar: {
        lang: {
            placeholder: 'בחר תאריך',
            rangePlaceholder: ['תאריך התחלה', 'תאריך סיום'],
            locale: 'he_IL',
            today: 'היום',
            now: 'עכשיו',
            backToToday: 'חזור להיום',
            ok: 'אישור',
            clear: 'איפוס',
            month: 'חודש',
            year: 'שנה',
            timeSelect: 'בחר שעה',
            dateSelect: 'בחר תאריך',
            weekSelect: 'בחר שבוע',
            monthSelect: 'בחר חודש',
            yearSelect: 'בחר שנה',
            decadeSelect: 'בחר עשור',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'חודש קודם (PageUp)',
            nextMonth: 'חודש הבא (PageDown)',
            previousYear: 'שנה שעברה (Control + left)',
            nextYear: 'שנה הבאה (Control + right)',
            previousDecade: 'העשור הקודם',
            nextDecade: 'העשור הבא',
            previousCentury: 'המאה הקודמת',
            nextCentury: 'המאה הבאה'
        },
        timePickerLocale: {
            placeholder: 'בחר שעה'
        }
    },
    global: {
        placeholder: 'אנא בחר'
    },
    Table: {
        filterTitle: 'תפריט סינון',
        filterConfirm: 'אישור',
        filterReset: 'איפוס',
        selectAll: 'בחר הכל',
        selectInvert: 'הפוך בחירה',
        selectionAll: 'בחר את כל הנתונים',
        sortTitle: 'מיון',
        expand: 'הרחב שורה',
        collapse: 'צמצם שורהw',
        triggerDesc: 'לחץ על מיון לפי סדר יורד',
        triggerAsc: 'לחץ על מיון לפי סדר עולה',
        cancelSort: 'לחץ כדי לבטל את המיון'
    },
    Modal: {
        okText: 'אישור',
        cancelText: 'ביטול',
        justOkText: 'אישור'
    },
    Popconfirm: {
        okText: 'אישור',
        cancelText: 'ביטול'
    },
    Transfer: {
        searchPlaceholder: 'חפש כאן',
        itemUnit: 'פריט',
        itemsUnit: 'פריטים'
    },
    Upload: {
        uploading: 'מעלה...',
        removeFile: 'הסר קובץ',
        uploadError: 'שגיאת העלאה',
        previewFile: 'הצג קובץ',
        downloadFile: 'הורד קובץ'
    },
    Empty: {
        description: 'אין מידע'
    },
    Icon: {
        icon: 'סמל'
    },
    Text: {
        edit: 'ערוך',
        copy: 'העתק',
        copied: 'הועתק',
        expand: 'הרחב'
    },
    PageHeader: {
        back: 'חזרה'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var hi_IN = {
    locale: 'hi',
    Pagination: {
        items_per_page: '/ पृष्ठ',
        jump_to: 'इस पर चलें',
        jump_to_confirm: 'पुष्टि करें',
        page: '',
        prev_page: 'पिछला पृष्ठ',
        next_page: 'अगला पृष्ठ',
        prev_5: 'पिछले 5 पृष्ठ',
        next_5: 'अगले 5 पृष्ठ',
        prev_3: 'पिछले 3 पृष्ठ',
        next_3: 'अगले 3 पेज'
    },
    DatePicker: {
        lang: {
            placeholder: 'तारीख़ चुनें',
            rangePlaceholder: ['प्रारंभ तिथि', 'समाप्ति तिथि'],
            locale: 'hi_IN',
            today: 'आज',
            now: 'अभी',
            backToToday: 'आज तक',
            ok: 'ठीक',
            clear: 'स्पष्ट',
            month: 'महीना',
            year: 'साल',
            timeSelect: 'समय का चयन करें',
            dateSelect: 'तारीख़ चुनें',
            weekSelect: 'एक सप्ताह चुनें',
            monthSelect: 'एक महीना चुनें',
            yearSelect: 'एक वर्ष चुनें',
            decadeSelect: 'एक दशक चुनें',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'पिछला महीना (पेजअप)',
            nextMonth: 'अगले महीने (पेजडाउन)',
            previousYear: 'पिछले साल (Ctrl + बाएं)',
            nextYear: 'अगले साल (Ctrl + दाहिना)',
            previousDecade: 'पिछला दशक',
            nextDecade: 'अगले दशक',
            previousCentury: 'पीछ्ली शताब्दी',
            nextCentury: 'अगली सदी'
        },
        timePickerLocale: {
            placeholder: 'समय का चयन करें'
        }
    },
    TimePicker: {
        placeholder: 'समय का चयन करें'
    },
    Calendar: {
        lang: {
            placeholder: 'तारीख़ चुनें',
            rangePlaceholder: ['प्रारंभ तिथि', 'समाप्ति तिथि'],
            locale: 'hi_IN',
            today: 'आज',
            now: 'अभी',
            backToToday: 'आज तक',
            ok: 'ठीक',
            clear: 'स्पष्ट',
            month: 'महीना',
            year: 'साल',
            timeSelect: 'समय का चयन करें',
            dateSelect: 'तारीख़ चुनें',
            weekSelect: 'एक सप्ताह चुनें',
            monthSelect: 'एक महीना चुनें',
            yearSelect: 'एक वर्ष चुनें',
            decadeSelect: 'एक दशक चुनें',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'पिछला महीना (पेजअप)',
            nextMonth: 'अगले महीने (पेजडाउन)',
            previousYear: 'पिछले साल (Ctrl + बाएं)',
            nextYear: 'अगले साल (Ctrl + दाहिना)',
            previousDecade: 'पिछला दशक',
            nextDecade: 'अगले दशक',
            previousCentury: 'पीछ्ली शताब्दी',
            nextCentury: 'अगली सदी'
        },
        timePickerLocale: {
            placeholder: 'समय का चयन करें'
        }
    },
    global: {
        placeholder: 'कृपया चुनें'
    },
    Table: {
        filterTitle: 'सूची बंद करें',
        filterConfirm: 'अच्छी तरह से',
        filterReset: 'रीसेट',
        emptyText: 'कोई जानकारी नहीं',
        selectAll: 'वर्तमान पृष्ठ का चयन करें',
        selectInvert: 'वर्तमान पृष्ठ घुमाएं',
        sortTitle: 'द्वारा क्रमबद्ध करें'
    },
    Modal: {
        okText: 'अच्छी तरह से',
        cancelText: 'रद्द करना',
        justOkText: 'अच्छी तरह से'
    },
    Popconfirm: {
        okText: 'अच्छी तरह से',
        cancelText: 'रद्द करना'
    },
    Transfer: {
        titles: ['', ''],
        notFoundContent: 'नहीं मिला',
        searchPlaceholder: 'यहां खोजें',
        itemUnit: 'तत्त्व',
        itemsUnit: 'विषय-वस्तु'
    },
    Select: {
        notFoundContent: 'नहीं मिला'
    },
    Upload: {
        uploading: 'अपलोडिंग...',
        removeFile: 'फ़ाइल निकालें',
        uploadError: 'अपलोड में त्रुटि',
        previewFile: 'फ़ाइल पूर्वावलोकन',
        downloadFile: 'फ़ाइल डाउनलोड करें'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var hr_HR = {
    locale: 'hr',
    Pagination: {
        items_per_page: '/ str',
        jump_to: 'Idi na',
        jump_to_confirm: 'potvrdi',
        page: '',
        prev_page: 'Prijašnja stranica',
        next_page: 'Sljedeća stranica',
        prev_5: 'Prijašnjih 5 stranica',
        next_5: 'Sljedećih 5 stranica',
        prev_3: 'Prijašnje 3 stranice',
        next_3: 'Sljedeće 3 stranice'
    },
    DatePicker: {
        lang: {
            placeholder: 'Odaberite datum',
            rangePlaceholder: ['Početni datum', 'Završni datum'],
            locale: 'hr_HR',
            today: 'Danas',
            now: 'Sad',
            backToToday: 'Natrag na danas',
            ok: 'Ok',
            clear: 'Očisti',
            month: 'Mjesec',
            year: 'Godina',
            timeSelect: 'odaberite vrijeme',
            dateSelect: 'odaberite datum',
            weekSelect: 'Odaberite tjedan',
            monthSelect: 'Odaberite mjesec',
            yearSelect: 'Odaberite godinu',
            decadeSelect: 'Odaberite desetljeće',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Prošli mjesec (PageUp)',
            nextMonth: 'Sljedeći mjesec (PageDown)',
            previousYear: 'Prošla godina (Control + left)',
            nextYear: 'Sljedeća godina (Control + right)',
            previousDecade: 'Prošlo desetljeće',
            nextDecade: 'Sljedeće desetljeće',
            previousCentury: 'Prošlo stoljeće',
            nextCentury: 'Sljedeće stoljeće'
        },
        timePickerLocale: {
            placeholder: 'Odaberite vrijeme'
        }
    },
    TimePicker: {
        placeholder: 'Odaberite vrijeme'
    },
    Calendar: {
        lang: {
            placeholder: 'Odaberite datum',
            rangePlaceholder: ['Početni datum', 'Završni datum'],
            locale: 'hr_HR',
            today: 'Danas',
            now: 'Sad',
            backToToday: 'Natrag na danas',
            ok: 'Ok',
            clear: 'Očisti',
            month: 'Mjesec',
            year: 'Godina',
            timeSelect: 'odaberite vrijeme',
            dateSelect: 'odaberite datum',
            weekSelect: 'Odaberite tjedan',
            monthSelect: 'Odaberite mjesec',
            yearSelect: 'Odaberite godinu',
            decadeSelect: 'Odaberite desetljeće',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Prošli mjesec (PageUp)',
            nextMonth: 'Sljedeći mjesec (PageDown)',
            previousYear: 'Prošla godina (Control + left)',
            nextYear: 'Sljedeća godina (Control + right)',
            previousDecade: 'Prošlo desetljeće',
            nextDecade: 'Sljedeće desetljeće',
            previousCentury: 'Prošlo stoljeće',
            nextCentury: 'Sljedeće stoljeće'
        },
        timePickerLocale: {
            placeholder: 'Odaberite vrijeme'
        }
    },
    global: {
        placeholder: 'Molimo označite'
    },
    Table: {
        filterTitle: 'Filter meni',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Označi trenutnu stranicu',
        selectInvert: 'Invertiraj trenutnu stranicu',
        sortTitle: 'Sortiraj'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Odustani',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Odustani'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Pretraži ovdje',
        itemUnit: 'stavka',
        itemsUnit: 'stavke'
    },
    Upload: {
        uploading: 'Upload u tijeku...',
        removeFile: 'Makni datoteku',
        uploadError: 'Greška kod uploada',
        previewFile: 'Pogledaj datoteku',
        downloadFile: 'Preuzmi datoteku'
    },
    Empty: {
        description: 'Nema podataka'
    },
    Icon: {
        icon: 'ikona'
    },
    Text: {
        edit: 'uredi',
        copy: 'kopiraj',
        copied: 'kopiranje uspješno',
        expand: 'proširi'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var hu_HU = {
    locale: 'hu',
    Pagination: {
        items_per_page: '/ oldal',
        jump_to: 'Ugrás',
        jump_to_confirm: 'megerősít',
        page: '',
        prev_page: 'Előző oldal',
        next_page: 'Következő oldal',
        prev_5: 'Előző 5 oldal',
        next_5: 'Következő 5 oldal',
        prev_3: 'Előző 3 oldal',
        next_3: 'Következő 3 oldal'
    },
    DatePicker: {
        lang: {
            placeholder: 'Válasszon dátumot',
            rangePlaceholder: ['Kezdő dátum', 'Befejezés dátuma'],
            locale: 'hu_HU',
            today: 'Ma',
            now: 'Most',
            backToToday: 'Vissza a mai napra',
            ok: 'Ok',
            clear: 'Törlés',
            month: 'Hónap',
            year: 'Év',
            timeSelect: 'Időpont kiválasztása',
            dateSelect: 'Dátum kiválasztása',
            monthSelect: 'Hónap kiválasztása',
            yearSelect: 'Év kiválasztása',
            decadeSelect: 'Évtized kiválasztása',
            yearFormat: 'YYYY',
            dateFormat: 'YYYY/MM/DD',
            dayFormat: 'DD',
            dateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Előző hónap (PageUp)',
            nextMonth: 'Következő hónap (PageDown)',
            previousYear: 'Múlt év (Control + left)',
            nextYear: 'Jövő év (Control + right)',
            previousDecade: 'Előző évtized',
            nextDecade: 'Következő évtized',
            previousCentury: 'Múlt évszázad',
            nextCentury: 'Jövő évszázad'
        },
        timePickerLocale: {
            placeholder: 'Válasszon időt'
        }
    },
    TimePicker: {
        placeholder: 'Válasszon időt'
    },
    Calendar: {
        lang: {
            placeholder: 'Válasszon dátumot',
            rangePlaceholder: ['Kezdő dátum', 'Befejezés dátuma'],
            locale: 'hu_HU',
            today: 'Ma',
            now: 'Most',
            backToToday: 'Vissza a mai napra',
            ok: 'Ok',
            clear: 'Törlés',
            month: 'Hónap',
            year: 'Év',
            timeSelect: 'Időpont kiválasztása',
            dateSelect: 'Dátum kiválasztása',
            monthSelect: 'Hónap kiválasztása',
            yearSelect: 'Év kiválasztása',
            decadeSelect: 'Évtized kiválasztása',
            yearFormat: 'YYYY',
            dateFormat: 'YYYY/MM/DD',
            dayFormat: 'DD',
            dateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Előző hónap (PageUp)',
            nextMonth: 'Következő hónap (PageDown)',
            previousYear: 'Múlt év (Control + left)',
            nextYear: 'Jövő év (Control + right)',
            previousDecade: 'Előző évtized',
            nextDecade: 'Következő évtized',
            previousCentury: 'Múlt évszázad',
            nextCentury: 'Jövő évszázad'
        },
        timePickerLocale: {
            placeholder: 'Válasszon időt'
        }
    },
    Table: {
        filterTitle: 'Szűrők',
        filterConfirm: 'Alkalmazás',
        filterReset: 'Visszaállítás',
        selectAll: 'Jelenlegi oldal kiválasztása',
        selectInvert: 'Jelenlegi oldal inverze',
        sortTitle: 'Rendezés'
    },
    Modal: {
        okText: 'Alkalmazás',
        cancelText: 'Visszavonás',
        justOkText: 'Alkalmazás'
    },
    Popconfirm: {
        okText: 'Alkalmazás',
        cancelText: 'Visszavonás'
    },
    Transfer: {
        searchPlaceholder: 'Keresés',
        itemUnit: 'elem',
        itemsUnit: 'elemek'
    },
    Upload: {
        uploading: 'Feltöltés...',
        removeFile: 'Fájl eltávolítása',
        uploadError: 'Feltöltési hiba',
        previewFile: 'Fájl előnézet',
        downloadFile: 'Fájl letöltése'
    },
    Empty: {
        description: 'Nincs adat'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var hy_AM = {
    locale: 'hy-am',
    Pagination: {
        items_per_page: '/ էջ',
        jump_to: 'Գնալ',
        jump_to_confirm: 'հաստատել',
        page: '',
        prev_page: 'Նախորդ Էջ',
        next_page: 'Հաջորդ Էջ',
        prev_5: 'Նախորդ 5 Էջերը',
        next_5: 'Հաջորդ 5 Էջերը',
        prev_3: 'Նախորդ 3 Էջերը',
        next_3: 'Հաջորդ 3 Էջերը'
    },
    DatePicker: {
        lang: {
            locale: 'hy-am',
            placeholder: 'Ընտրեք ամսաթիվը',
            rangePlaceholder: ['Մեկնարկի ամսաթիվ', 'Ավարտի ամսաթիվը'],
            today: 'Այսօր',
            now: 'Հիմա',
            backToToday: 'Վերադառնալ այսօր',
            ok: 'Օկ',
            clear: 'Մաքրել',
            month: 'Ամիս',
            year: 'Տարի',
            timeSelect: 'ընտրեք ժամը',
            dateSelect: 'ընտրեք ամսաթիվը',
            weekSelect: 'Ընտրեք շաբաթը',
            monthSelect: 'Ընտրեք ամիսը',
            yearSelect: 'Ընտրեք տարին',
            decadeSelect: 'Ընտրեք տասնամյակը',
            yearFormat: 'YYYY',
            dateFormat: 'DD/MM//YYYY',
            dayFormat: 'DD',
            dateTimeFormat: 'DD/MM//YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Անցած ամիս (PageUp)',
            nextMonth: 'Մյուս ամիս (PageDown)',
            previousYear: 'Անցած տարի (Control + left)',
            nextYear: 'Մյուս տարի (Control + right)',
            previousDecade: 'Անցած տասնամյակ',
            nextDecade: 'Մյուս տասնամյակ',
            previousCentury: 'Անցած դար',
            nextCentury: 'Մյուս դար'
        },
        timePickerLocale: {
            placeholder: 'Ընտրեք ժամը'
        }
    },
    TimePicker: {
        placeholder: 'Ընտրեք ժամը'
    },
    Calendar: {
        lang: {
            locale: 'hy-am',
            placeholder: 'Ընտրեք ամսաթիվը',
            rangePlaceholder: ['Մեկնարկի ամսաթիվ', 'Ավարտի ամսաթիվը'],
            today: 'Այսօր',
            now: 'Հիմա',
            backToToday: 'Վերադառնալ այսօր',
            ok: 'Օկ',
            clear: 'Մաքրել',
            month: 'Ամիս',
            year: 'Տարի',
            timeSelect: 'ընտրեք ժամը',
            dateSelect: 'ընտրեք ամսաթիվը',
            weekSelect: 'Ընտրեք շաբաթը',
            monthSelect: 'Ընտրեք ամիսը',
            yearSelect: 'Ընտրեք տարին',
            decadeSelect: 'Ընտրեք տասնամյակը',
            yearFormat: 'YYYY',
            dateFormat: 'DD/MM//YYYY',
            dayFormat: 'DD',
            dateTimeFormat: 'DD/MM//YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Անցած ամիս (PageUp)',
            nextMonth: 'Մյուս ամիս (PageDown)',
            previousYear: 'Անցած տարի (Control + left)',
            nextYear: 'Մյուս տարի (Control + right)',
            previousDecade: 'Անցած տասնամյակ',
            nextDecade: 'Մյուս տասնամյակ',
            previousCentury: 'Անցած դար',
            nextCentury: 'Մյուս դար'
        },
        timePickerLocale: {
            placeholder: 'Ընտրեք ժամը'
        }
    },
    global: {
        placeholder: 'Ընտրեք'
    },
    Table: {
        filterTitle: 'ֆիլտրի ընտրացանկ',
        filterConfirm: 'ֆիլտրել',
        filterReset: 'Զրոյացնել',
        selectAll: 'Ընտրեք ընթացիկ էջը',
        selectInvert: 'Փոխարկել ընթացիկ էջը',
        sortTitle: 'Տեսակավորել',
        expand: 'Ընդլայնեք տողը',
        collapse: 'Կրճատել տողը'
    },
    Modal: {
        okText: 'Օկ',
        cancelText: 'Չեղարկել',
        justOkText: 'Օկ'
    },
    Popconfirm: {
        okText: 'Հաստատել',
        cancelText: 'Մերժել'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Որոնեք այստեղ',
        itemUnit: 'պարագան',
        itemsUnit: 'պարագաները'
    },
    Upload: {
        uploading: 'Ներբեռնում...',
        removeFile: 'Հեռացնել ֆայլը',
        uploadError: 'Ներբեռնման սխալ',
        previewFile: 'Դիտել ֆայլը',
        downloadFile: 'Ներբեռնել ֆայլը'
    },
    Empty: {
        description: 'Տվյալներ չկան'
    },
    Icon: {
        icon: 'պատկեր'
    },
    Text: {
        edit: 'Խմբագրել',
        copy: 'Պատճենել',
        copied: 'Պատճենվել է',
        expand: 'Տեսնել ավելին'
    },
    PageHeader: {
        back: 'Հետ'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var id_ID = {
    locale: 'id',
    Pagination: {
        items_per_page: '/ halaman',
        jump_to: 'Menuju',
        jump_to_confirm: 'konfirmasi',
        page: '',
        prev_page: 'Halaman Sebelumnya',
        next_page: 'Halaman Berikutnya',
        prev_5: '5 Halaman Sebelumnya',
        next_5: '5 Halaman Berikutnya',
        prev_3: '3 Halaman Sebelumnya',
        next_3: '3 Halaman Berikutnya'
    },
    DatePicker: {
        lang: {
            placeholder: 'Pilih tanggal',
            rangePlaceholder: ['Mulai tanggal', 'Tanggal akhir'],
            locale: 'id_ID',
            today: 'Hari ini',
            now: 'Sekarang',
            backToToday: 'Kembali ke hari ini',
            ok: 'Baik',
            clear: 'Bersih',
            month: 'Bulan',
            year: 'Tahun',
            timeSelect: 'pilih waktu',
            dateSelect: 'pilih tanggal',
            weekSelect: 'Pilih satu minggu',
            monthSelect: 'Pilih satu bulan',
            yearSelect: 'Pilih satu tahun',
            decadeSelect: 'Pilih satu dekade',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Bulan sebelumnya (PageUp)',
            nextMonth: 'Bulan selanjutnya (PageDown)',
            previousYear: 'Tahun lalu (Control + kiri)',
            nextYear: 'Tahun selanjutnya (Kontrol + kanan)',
            previousDecade: 'Dekade terakhir',
            nextDecade: 'Dekade berikutnya',
            previousCentury: 'Abad terakhir',
            nextCentury: 'Abad berikutnya'
        },
        timePickerLocale: {
            placeholder: 'Pilih waktu'
        }
    },
    TimePicker: {
        placeholder: 'Pilih waktu'
    },
    Calendar: {
        lang: {
            placeholder: 'Pilih tanggal',
            rangePlaceholder: ['Mulai tanggal', 'Tanggal akhir'],
            locale: 'id_ID',
            today: 'Hari ini',
            now: 'Sekarang',
            backToToday: 'Kembali ke hari ini',
            ok: 'Baik',
            clear: 'Bersih',
            month: 'Bulan',
            year: 'Tahun',
            timeSelect: 'pilih waktu',
            dateSelect: 'pilih tanggal',
            weekSelect: 'Pilih satu minggu',
            monthSelect: 'Pilih satu bulan',
            yearSelect: 'Pilih satu tahun',
            decadeSelect: 'Pilih satu dekade',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Bulan sebelumnya (PageUp)',
            nextMonth: 'Bulan selanjutnya (PageDown)',
            previousYear: 'Tahun lalu (Control + kiri)',
            nextYear: 'Tahun selanjutnya (Kontrol + kanan)',
            previousDecade: 'Dekade terakhir',
            nextDecade: 'Dekade berikutnya',
            previousCentury: 'Abad terakhir',
            nextCentury: 'Abad berikutnya'
        },
        timePickerLocale: {
            placeholder: 'Pilih waktu'
        }
    },
    Table: {
        filterTitle: 'Saring',
        filterConfirm: 'OK',
        filterReset: 'Hapus',
        selectAll: 'Pilih semua di halaman ini',
        selectInvert: 'Balikkan pilihan di halaman ini',
        sortTitle: 'Urutkan'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Batal',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Batal'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Cari',
        itemUnit: 'item',
        itemsUnit: 'item'
    },
    Upload: {
        uploading: 'Mengunggah...',
        removeFile: 'Hapus file',
        uploadError: 'Kesalahan pengunggahan',
        previewFile: 'File pratinjau',
        downloadFile: 'Unduh berkas'
    },
    Empty: {
        description: 'Tidak ada data'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var is_IS = {
    locale: 'is',
    Pagination: {
        items_per_page: '/ síðu',
        jump_to: 'Síða',
        jump_to_confirm: 'staðfest',
        page: '',
        prev_page: 'Fyrri síða',
        next_page: 'Næsta síða',
        prev_5: 'Til baka 5 síður',
        next_5: 'Áfram 5 síður',
        prev_3: 'Til baka 3 síður',
        next_3: 'Áfram 3 síður'
    },
    DatePicker: {
        lang: {
            placeholder: 'Veldu dag',
            rangePlaceholder: ['Upphafsdagur', 'Lokadagur'],
            locale: 'is_IS',
            today: 'Í dag',
            now: 'Núna',
            backToToday: 'Til baka til dagsins í dag',
            ok: 'Í lagi',
            clear: 'Hreinsa',
            month: 'Mánuður',
            year: 'Ár',
            timeSelect: 'Velja tíma',
            dateSelect: 'Velja dag',
            monthSelect: 'Velja mánuð',
            yearSelect: 'Velja ár',
            decadeSelect: 'Velja áratug',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Fyrri mánuður (PageUp)',
            nextMonth: 'Næsti mánuður (PageDown)',
            previousYear: 'Fyrra ár (Control + left)',
            nextYear: 'Næsta ár (Control + right)',
            previousDecade: 'Fyrri áratugur',
            nextDecade: 'Næsti áratugur',
            previousCentury: 'Fyrri öld',
            nextCentury: 'Næsta öld'
        },
        timePickerLocale: {
            placeholder: 'Velja tíma'
        }
    },
    TimePicker: {
        placeholder: 'Velja tíma'
    },
    Calendar: {
        lang: {
            placeholder: 'Veldu dag',
            rangePlaceholder: ['Upphafsdagur', 'Lokadagur'],
            locale: 'is_IS',
            today: 'Í dag',
            now: 'Núna',
            backToToday: 'Til baka til dagsins í dag',
            ok: 'Í lagi',
            clear: 'Hreinsa',
            month: 'Mánuður',
            year: 'Ár',
            timeSelect: 'Velja tíma',
            dateSelect: 'Velja dag',
            monthSelect: 'Velja mánuð',
            yearSelect: 'Velja ár',
            decadeSelect: 'Velja áratug',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Fyrri mánuður (PageUp)',
            nextMonth: 'Næsti mánuður (PageDown)',
            previousYear: 'Fyrra ár (Control + left)',
            nextYear: 'Næsta ár (Control + right)',
            previousDecade: 'Fyrri áratugur',
            nextDecade: 'Næsti áratugur',
            previousCentury: 'Fyrri öld',
            nextCentury: 'Næsta öld'
        },
        timePickerLocale: {
            placeholder: 'Velja tíma'
        }
    },
    Table: {
        filterTitle: 'Afmarkanir',
        filterConfirm: 'Staðfesta',
        filterReset: 'Núllstilla',
        selectAll: 'Velja allt',
        selectInvert: 'Viðsnúa vali'
    },
    Modal: {
        okText: 'Áfram',
        cancelText: 'Hætta við',
        justOkText: 'Í lagi'
    },
    Popconfirm: {
        okText: 'Áfram',
        cancelText: 'Hætta við'
    },
    Transfer: {
        searchPlaceholder: 'Leita hér',
        itemUnit: 'færsla',
        itemsUnit: 'færslur'
    },
    Upload: {
        uploading: 'Hleð upp...',
        removeFile: 'Fjarlægja skrá',
        uploadError: 'Villa við að hlaða upp',
        previewFile: 'Forskoða skrá',
        downloadFile: 'Hlaða niður skrá'
    },
    Empty: {
        description: 'Engin gögn'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var it_IT = {
    locale: 'it',
    Pagination: {
        items_per_page: '/ pagina',
        jump_to: 'vai a',
        jump_to_confirm: 'Conferma',
        page: '',
        prev_page: 'Pagina precedente',
        next_page: 'Pagina successiva',
        prev_5: 'Precedente 5 pagine',
        next_5: 'Prossime 5 pagine',
        prev_3: 'Precedente 3 pagine',
        next_3: 'Prossime 3 pagine'
    },
    DatePicker: {
        lang: {
            placeholder: 'Selezionare la data',
            rangePlaceholder: ["Data d'inizio", 'Data di fine'],
            locale: 'it_IT',
            today: 'Oggi',
            now: 'Adesso',
            backToToday: 'Torna ad oggi',
            ok: 'Ok',
            clear: 'Cancella',
            month: 'Mese',
            year: 'Anno',
            timeSelect: "Seleziona l'ora",
            dateSelect: 'Seleziona la data',
            monthSelect: 'Seleziona il mese',
            yearSelect: "Seleziona l'anno",
            decadeSelect: 'Seleziona il decennio',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Il mese scorso (PageUp)',
            nextMonth: 'Il prossimo mese (PageDown)',
            previousYear: "L'anno scorso (Control + sinistra)",
            nextYear: "L'anno prossimo (Control + destra)",
            previousDecade: 'Ultimo decennio',
            nextDecade: 'Prossimo decennio',
            previousCentury: 'Secolo precedente',
            nextCentury: 'Prossimo secolo'
        },
        timePickerLocale: {
            placeholder: "Selezionare l'orario"
        }
    },
    TimePicker: {
        placeholder: "Selezionare l'orario"
    },
    Calendar: {
        lang: {
            placeholder: 'Selezionare la data',
            rangePlaceholder: ["Data d'inizio", 'Data di fine'],
            locale: 'it_IT',
            today: 'Oggi',
            now: 'Adesso',
            backToToday: 'Torna ad oggi',
            ok: 'Ok',
            clear: 'Cancella',
            month: 'Mese',
            year: 'Anno',
            timeSelect: "Seleziona l'ora",
            dateSelect: 'Seleziona la data',
            monthSelect: 'Seleziona il mese',
            yearSelect: "Seleziona l'anno",
            decadeSelect: 'Seleziona il decennio',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Il mese scorso (PageUp)',
            nextMonth: 'Il prossimo mese (PageDown)',
            previousYear: "L'anno scorso (Control + sinistra)",
            nextYear: "L'anno prossimo (Control + destra)",
            previousDecade: 'Ultimo decennio',
            nextDecade: 'Prossimo decennio',
            previousCentury: 'Secolo precedente',
            nextCentury: 'Prossimo secolo'
        },
        timePickerLocale: {
            placeholder: "Selezionare l'orario"
        }
    },
    global: {
        placeholder: 'Selezionare'
    },
    Table: {
        filterTitle: 'Menù Filtro',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Seleziona pagina corrente',
        selectInvert: 'Inverti selezione nella pagina corrente',
        sortTitle: 'Ordina',
        triggerDesc: 'Clicca per ordinare in modo discendente',
        triggerAsc: ' Clicca per ordinare in modo ascendente',
        cancelSort: 'Clicca per eliminare i filtri'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annulla',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annulla'
    },
    Transfer: {
        searchPlaceholder: 'Cerca qui',
        itemUnit: 'elemento',
        itemsUnit: 'elementi'
    },
    Upload: {
        uploading: 'Caricamento...',
        removeFile: 'Rimuovi il file',
        uploadError: 'Errore di caricamento',
        previewFile: 'Anteprima file',
        downloadFile: 'Download file'
    },
    Empty: {
        description: 'Nessun dato'
    },
    Icon: {
        icon: 'icona'
    },
    Text: {
        edit: 'modifica',
        copy: 'copia',
        copied: 'copia effettuata',
        expand: 'espandi'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ja_JP = {
    locale: 'ja',
    Pagination: {
        items_per_page: '/ ページ',
        jump_to: '移動',
        jump_to_confirm: '確認する',
        page: 'ページ',
        prev_page: '前のページ',
        next_page: '次のページ',
        prev_5: '前 5ページ',
        next_5: '次 5ページ',
        prev_3: '前 3ページ',
        next_3: '次 3ページ'
    },
    DatePicker: {
        lang: {
            placeholder: '日付を選択',
            rangePlaceholder: ['開始日付', '終了日付'],
            locale: 'ja_JP',
            today: '今日',
            now: '現在時刻',
            backToToday: '今日に戻る',
            ok: '決定',
            timeSelect: '時間を選択',
            dateSelect: '日時を選択',
            weekSelect: '週を選択',
            clear: 'クリア',
            month: '月',
            year: '年',
            previousMonth: '前月 (ページアップキー)',
            nextMonth: '翌月 (ページダウンキー)',
            monthSelect: '月を選択',
            yearSelect: '年を選択',
            decadeSelect: '年代を選択',
            yearFormat: 'YYYY年',
            dayFormat: 'D日',
            dateFormat: 'YYYY年M月D日',
            dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
            previousYear: '前年 (Controlを押しながら左キー)',
            nextYear: '翌年 (Controlを押しながら右キー)',
            previousDecade: '前の年代',
            nextDecade: '次の年代',
            previousCentury: '前の世紀',
            nextCentury: '次の世紀'
        },
        timePickerLocale: {
            placeholder: '時刻を選択'
        }
    },
    TimePicker: {
        placeholder: '時刻を選択'
    },
    Calendar: {
        lang: {
            placeholder: '日付を選択',
            rangePlaceholder: ['開始日付', '終了日付'],
            locale: 'ja_JP',
            today: '今日',
            now: '現在時刻',
            backToToday: '今日に戻る',
            ok: '決定',
            timeSelect: '時間を選択',
            dateSelect: '日時を選択',
            weekSelect: '週を選択',
            clear: 'クリア',
            month: '月',
            year: '年',
            previousMonth: '前月 (ページアップキー)',
            nextMonth: '翌月 (ページダウンキー)',
            monthSelect: '月を選択',
            yearSelect: '年を選択',
            decadeSelect: '年代を選択',
            yearFormat: 'YYYY年',
            dayFormat: 'D日',
            dateFormat: 'YYYY年M月D日',
            dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
            previousYear: '前年 (Controlを押しながら左キー)',
            nextYear: '翌年 (Controlを押しながら右キー)',
            previousDecade: '前の年代',
            nextDecade: '次の年代',
            previousCentury: '前の世紀',
            nextCentury: '次の世紀'
        },
        timePickerLocale: {
            placeholder: '時刻を選択'
        }
    },
    Table: {
        filterTitle: 'フィルター',
        filterConfirm: 'OK',
        filterReset: 'リセット',
        filterEmptyText: 'フィルターなし',
        selectAll: 'ページ単位で選択',
        selectInvert: 'ページ単位で反転',
        selectionAll: 'すべてを選択',
        sortTitle: 'ソート',
        expand: '展開する',
        collapse: '折り畳む',
        triggerDesc: 'クリックで降順にソート',
        triggerAsc: 'クリックで昇順にソート',
        cancelSort: 'ソートをキャンセル'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'キャンセル',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'キャンセル'
    },
    Transfer: {
        searchPlaceholder: 'ここを検索',
        itemUnit: 'アイテム',
        itemsUnit: 'アイテム'
    },
    Upload: {
        uploading: 'アップロード中...',
        removeFile: 'ファイルを削除',
        uploadError: 'アップロードエラー',
        previewFile: 'ファイルをプレビュー',
        downloadFile: 'ダウンロードファイル'
    },
    Empty: {
        description: 'データがありません'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ka_GE = {
    locale: 'ka',
    Pagination: {
        items_per_page: '/ გვ.',
        jump_to: 'გადასვლა',
        jump_to_confirm: 'დადასტურება',
        page: '',
        prev_page: 'წინა გვერდი',
        next_page: 'შემდეგი გვერდი',
        prev_5: 'წინა 5 გვერდი',
        next_5: 'შემდეგი 5 გვერდი',
        prev_3: 'წინა 3 გვერდი',
        next_3: 'შემდეგი 3 გვერდი'
    },
    DatePicker: {
        lang: {
            placeholder: 'აირჩიეთ თარიღი',
            yearPlaceholder: 'აირჩიეთ წელი',
            quarterPlaceholder: 'აირჩიეთ კვარტალი',
            monthPlaceholder: 'აირჩიეთ თვე',
            weekPlaceholder: 'აირჩიეთ კვირა',
            rangePlaceholder: ['დაწყების თარიღი', 'დასრულების თარიღი'],
            rangeYearPlaceholder: ['დაწყების წელი', 'დასრულების წელი'],
            rangeMonthPlaceholder: ['დაწყების თვე', 'დასრულების თვე'],
            rangeWeekPlaceholder: ['დაწყების კვირა', 'დასრულების კვირა'],
            locale: 'ka_GE',
            today: 'დღეს',
            now: 'ახლა',
            backToToday: 'მიმდინარე თარიღი',
            ok: 'დიახ',
            clear: 'გასუფთავება',
            month: 'თვე',
            year: 'წელი',
            timeSelect: 'აირჩიეთ დრო',
            dateSelect: 'აირჩიეთ თარიღი',
            weekSelect: 'აირჩიეთ კვირა',
            monthSelect: 'აირჩიეთ თვე',
            yearSelect: 'აირჩიეთ წელი',
            decadeSelect: 'აირჩიე ათწლეული',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'წინა თვე (PageUp)',
            nextMonth: 'შემდეგი თვე (PageDown)',
            previousYear: 'წინა წელი (Control + left)',
            nextYear: 'შემდეგი წელი (Control + right)',
            previousDecade: 'წინა ათწლეული',
            nextDecade: 'შემდეგი ათწლეული',
            previousCentury: 'წინა საუკუნე',
            nextCentury: 'შემდეგი საუკუნე'
        },
        timePickerLocale: {
            placeholder: 'აირჩიეთ დრო',
            rangePlaceholder: ['დაწყების დრო', 'დასრულების დრო']
        }
    },
    TimePicker: {
        placeholder: 'აირჩიეთ დრო',
        rangePlaceholder: ['დაწყების დრო', 'დასრულების დრო']
    },
    Calendar: {
        lang: {
            placeholder: 'აირჩიეთ თარიღი',
            yearPlaceholder: 'აირჩიეთ წელი',
            quarterPlaceholder: 'აირჩიეთ კვარტალი',
            monthPlaceholder: 'აირჩიეთ თვე',
            weekPlaceholder: 'აირჩიეთ კვირა',
            rangePlaceholder: ['დაწყების თარიღი', 'დასრულების თარიღი'],
            rangeYearPlaceholder: ['დაწყების წელი', 'დასრულების წელი'],
            rangeMonthPlaceholder: ['დაწყების თვე', 'დასრულების თვე'],
            rangeWeekPlaceholder: ['დაწყების კვირა', 'დასრულების კვირა'],
            locale: 'ka_GE',
            today: 'დღეს',
            now: 'ახლა',
            backToToday: 'მიმდინარე თარიღი',
            ok: 'დიახ',
            clear: 'გასუფთავება',
            month: 'თვე',
            year: 'წელი',
            timeSelect: 'აირჩიეთ დრო',
            dateSelect: 'აირჩიეთ თარიღი',
            weekSelect: 'აირჩიეთ კვირა',
            monthSelect: 'აირჩიეთ თვე',
            yearSelect: 'აირჩიეთ წელი',
            decadeSelect: 'აირჩიე ათწლეული',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'წინა თვე (PageUp)',
            nextMonth: 'შემდეგი თვე (PageDown)',
            previousYear: 'წინა წელი (Control + left)',
            nextYear: 'შემდეგი წელი (Control + right)',
            previousDecade: 'წინა ათწლეული',
            nextDecade: 'შემდეგი ათწლეული',
            previousCentury: 'წინა საუკუნე',
            nextCentury: 'შემდეგი საუკუნე'
        },
        timePickerLocale: {
            placeholder: 'აირჩიეთ დრო',
            rangePlaceholder: ['დაწყების დრო', 'დასრულების დრო']
        }
    },
    global: {
        placeholder: 'აირჩიეთ'
    },
    Table: {
        filterTitle: 'ფილტრი',
        filterConfirm: 'დიახ',
        filterReset: 'განულება',
        filterEmptyText: 'ფილტრები არ არის',
        emptyText: 'მონაცემები არ არის',
        selectAll: 'აირჩიეთ მიმდინარე გვერდი',
        selectInvert: 'გვერდის მიმართულების შეცვლა',
        selectionAll: 'აირჩიეთ ყველა მონაცემი',
        sortTitle: 'სორტირება',
        expand: 'მწკრივის გაშლა',
        collapse: 'მწკრივის ჩაკეცვა',
        triggerDesc: 'დააჭირეთ კლებადობით დასალაგებლად',
        triggerAsc: 'დააჭირეთ ზრდადობით დასალაგებლად',
        cancelSort: 'დააჭირეთ დალაგების გასაუქმებლად'
    },
    Modal: {
        okText: 'დიახ',
        cancelText: 'გაუქმება',
        justOkText: 'დიახ'
    },
    Popconfirm: {
        okText: 'დიახ',
        cancelText: 'გაუქმება'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'ძიება',
        itemUnit: 'ელემ.',
        itemsUnit: 'ელემ.',
        remove: 'Remove',
        selectCurrent: 'აირჩიეთ მიმდინარე გვერდი',
        removeCurrent: 'წაშალეთ მიმდინარე გვერდი',
        selectAll: 'აირჩიეთ ყველა მონაცემი',
        removeAll: 'წაშალეთ ყველა მონაცემი',
        selectInvert: 'მიმდინარე გვერდის შებრუნება'
    },
    Upload: {
        uploading: 'იტვირტება...',
        removeFile: 'ფაილის წაშლა',
        uploadError: 'ატვირთვის შეცდომა',
        previewFile: 'ფაილის გადახედვა',
        downloadFile: 'ფაილის ჩამოტვირთვა'
    },
    Empty: {
        description: 'მონაცემი არ არის'
    },
    Icon: {
        icon: 'ხატულა'
    },
    Text: {
        edit: 'რედაქტირება',
        copy: 'კოპირება',
        copied: 'წარმატებით დაკოპირდა',
        expand: 'გახსნა'
    },
    PageHeader: {
        back: 'უკან'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var kmr_IQ = {
    locale: 'ku',
    Pagination: {
        items_per_page: '/ rûpel',
        jump_to: 'Biçe',
        jump_to_confirm: 'piştrast bike',
        page: '',
        prev_page: 'Rûpelê Pêş',
        next_page: 'Rûpelê Paş',
        prev_5: '5 Rûpelên Pêş',
        next_5: '5 Rûpelên Paş',
        prev_3: '3 Rûpelên Pêş',
        next_3: '3 Rûpelên Paş'
    },
    DatePicker: {
        lang: {
            placeholder: 'Dîrok hilbijêre',
            rangePlaceholder: ['Dîroka destpêkê', 'Dîroka dawîn'],
            locale: 'ku',
            today: 'Îro',
            now: 'Niha',
            backToToday: 'Vegere îro',
            ok: 'Temam',
            clear: 'Paqij bike',
            month: 'Meh',
            year: 'Sal',
            timeSelect: 'Demê hilbijêre',
            dateSelect: 'Dîrok hilbijêre',
            monthSelect: 'Meh hilbijêre',
            yearSelect: 'Sal hilbijêre',
            decadeSelect: 'Dehsal hilbijêre',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Meha peş (PageUp))',
            nextMonth: 'Meha paş (PageDown)',
            previousYear: 'Sala peş (Control + şep)',
            nextYear: 'Sala paş (Control + rast)',
            previousDecade: 'Dehsalen peş',
            nextDecade: 'Dehsalen paş',
            previousCentury: 'Sedsalen peş',
            nextCentury: 'Sedsalen paş'
        },
        timePickerLocale: {
            placeholder: 'Demê hilbijêre'
        }
    },
    TimePicker: {
        placeholder: 'Demê hilbijêre'
    },
    Calendar: {
        lang: {
            placeholder: 'Dîrok hilbijêre',
            rangePlaceholder: ['Dîroka destpêkê', 'Dîroka dawîn'],
            locale: 'ku',
            today: 'Îro',
            now: 'Niha',
            backToToday: 'Vegere îro',
            ok: 'Temam',
            clear: 'Paqij bike',
            month: 'Meh',
            year: 'Sal',
            timeSelect: 'Demê hilbijêre',
            dateSelect: 'Dîrok hilbijêre',
            monthSelect: 'Meh hilbijêre',
            yearSelect: 'Sal hilbijêre',
            decadeSelect: 'Dehsal hilbijêre',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Meha peş (PageUp))',
            nextMonth: 'Meha paş (PageDown)',
            previousYear: 'Sala peş (Control + şep)',
            nextYear: 'Sala paş (Control + rast)',
            previousDecade: 'Dehsalen peş',
            nextDecade: 'Dehsalen paş',
            previousCentury: 'Sedsalen peş',
            nextCentury: 'Sedsalen paş'
        },
        timePickerLocale: {
            placeholder: 'Demê hilbijêre'
        }
    },
    Table: {
        filterTitle: 'Menuê peldanka',
        filterConfirm: 'Temam',
        filterReset: 'Jê bibe',
        selectAll: 'Hemî hilbijêre',
        selectInvert: 'Hilbijartinan veguhere'
    },
    Modal: {
        okText: 'Temam',
        cancelText: 'Betal ke',
        justOkText: 'Temam'
    },
    Popconfirm: {
        okText: 'Temam',
        cancelText: 'Betal ke'
    },
    Transfer: {
        searchPlaceholder: 'Lêgerîn',
        itemUnit: 'tişt',
        itemsUnit: 'tişt'
    },
    Upload: {
        uploading: 'Bardike...',
        removeFile: 'Pelê rabike',
        uploadError: 'Xeta barkirine',
        previewFile: 'Pelê pêşbibîne',
        downloadFile: 'Pelê dakêşin'
    },
    Empty: {
        description: 'Agahî tune'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var kn_IN = {
    locale: 'kn',
    Pagination: {
        items_per_page: '/ ಪುಟ',
        jump_to: 'ಜಿಗಿತವನ್ನು',
        jump_to_confirm: 'ಖಚಿತಪಡಿಸಲು ಜಿಗಿತವನ್ನು',
        page: '',
        prev_page: 'ಹಿಂದಿನ ಪುಟ',
        next_page: 'ಮುಂದಿನ ಪುಟ',
        prev_5: 'ಹಿಂದಿನ 5 ಪುಟಗಳು',
        next_5: 'ಮುಂದಿನ 5 ಪುಟಗಳು',
        prev_3: 'ಹಿಂದಿನ 3 ಪುಟಗಳು',
        next_3: 'ಮುಂದಿನ 3 ಪುಟಗಳು'
    },
    DatePicker: {
        lang: {
            placeholder: 'ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ',
            rangePlaceholder: ['ಪ್ರಾರಂಭ ದಿನಾಂಕ', 'ಅಂತಿಮ ದಿನಾಂಕ'],
            locale: 'kn_IN',
            today: 'ಇಂದು',
            now: 'ಈಗ',
            backToToday: 'ಇಂದು ಹಿಂದಿರುಗಿ',
            ok: 'ಸರಿ',
            clear: 'ಸ್ಪಷ್ಟ',
            month: 'ತಿಂಗಳು',
            year: 'ವರ್ಷ',
            timeSelect: 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ',
            dateSelect: 'ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
            weekSelect: 'ಒಂದು ವಾರದ ಆರಿಸಿ',
            monthSelect: 'ಒಂದು ತಿಂಗಳು ಆಯ್ಕೆಮಾಡಿ',
            yearSelect: 'ಒಂದು ವರ್ಷ ಆರಿಸಿ',
            decadeSelect: 'ಒಂದು ದಶಕದ ಆಯ್ಕೆಮಾಡಿ',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'ಹಿಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಅಪ್)',
            nextMonth: 'ಮುಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಡೌನ್)',
            previousYear: 'ಕಳೆದ ವರ್ಷ (Ctrl + ಎಡ)',
            nextYear: 'ಮುಂದಿನ ವರ್ಷ (Ctrl + ಬಲ)',
            previousDecade: 'ಕಳೆದ ದಶಕ',
            nextDecade: 'ಮುಂದಿನ ದಶಕ',
            previousCentury: 'ಕಳೆದ ಶತಮಾನ',
            nextCentury: 'ಮುಂದಿನ ಶತಮಾನ'
        },
        timePickerLocale: {
            placeholder: 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ'
        }
    },
    TimePicker: {
        placeholder: 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ'
    },
    Calendar: {
        lang: {
            placeholder: 'ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ',
            rangePlaceholder: ['ಪ್ರಾರಂಭ ದಿನಾಂಕ', 'ಅಂತಿಮ ದಿನಾಂಕ'],
            locale: 'kn_IN',
            today: 'ಇಂದು',
            now: 'ಈಗ',
            backToToday: 'ಇಂದು ಹಿಂದಿರುಗಿ',
            ok: 'ಸರಿ',
            clear: 'ಸ್ಪಷ್ಟ',
            month: 'ತಿಂಗಳು',
            year: 'ವರ್ಷ',
            timeSelect: 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ',
            dateSelect: 'ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
            weekSelect: 'ಒಂದು ವಾರದ ಆರಿಸಿ',
            monthSelect: 'ಒಂದು ತಿಂಗಳು ಆಯ್ಕೆಮಾಡಿ',
            yearSelect: 'ಒಂದು ವರ್ಷ ಆರಿಸಿ',
            decadeSelect: 'ಒಂದು ದಶಕದ ಆಯ್ಕೆಮಾಡಿ',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'ಹಿಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಅಪ್)',
            nextMonth: 'ಮುಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಡೌನ್)',
            previousYear: 'ಕಳೆದ ವರ್ಷ (Ctrl + ಎಡ)',
            nextYear: 'ಮುಂದಿನ ವರ್ಷ (Ctrl + ಬಲ)',
            previousDecade: 'ಕಳೆದ ದಶಕ',
            nextDecade: 'ಮುಂದಿನ ದಶಕ',
            previousCentury: 'ಕಳೆದ ಶತಮಾನ',
            nextCentury: 'ಮುಂದಿನ ಶತಮಾನ'
        },
        timePickerLocale: {
            placeholder: 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ'
        }
    },
    global: {
        placeholder: 'ದಯವಿಟ್ಟು ಆರಿಸಿ'
    },
    Table: {
        filterTitle: 'ಪಟ್ಟಿ ಸೋಸಿ',
        filterConfirm: 'ಸರಿ',
        filterReset: 'ಮರುಹೊಂದಿಸಿ',
        emptyText: 'ಮಾಹಿತಿ ಇಲ್ಲ',
        selectAll: 'ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        selectInvert: 'ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ತಿರುಗಿಸಿ',
        sortTitle: 'ವಿಂಗಡಿಸಿ'
    },
    Modal: {
        okText: 'ಸರಿ',
        cancelText: 'ರದ್ದು',
        justOkText: 'ಸರಿ'
    },
    Popconfirm: {
        okText: 'ಸರಿ',
        cancelText: 'ರದ್ದು'
    },
    Transfer: {
        titles: ['', ''],
        notFoundContent: 'ದೊರೆತಿಲ್ಲ',
        searchPlaceholder: 'ಇಲ್ಲಿ ಹುಡುಕಿ',
        itemUnit: 'ವಿಷಯ',
        itemsUnit: 'ವಿಷಯಗಳು'
    },
    Select: {
        notFoundContent: 'ದೊರೆತಿಲ್ಲ'
    },
    Upload: {
        uploading: 'ಏರಿಸಿ...',
        removeFile: 'ಫೈಲ್ ತೆಗೆದುಹಾಕಿ',
        uploadError: 'ಏರಿಸುವ ದೋಷ',
        previewFile: 'ಫೈಲ್ ಮುನ್ನೋಟ',
        downloadFile: 'ಫೈಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ko_KR = {
    locale: 'ko',
    Pagination: {
        items_per_page: '/ 쪽',
        jump_to: '이동하기',
        jump_to_confirm: '확인하다',
        page: '',
        prev_page: '이전 페이지',
        next_page: '다음 페이지',
        prev_5: '이전 5 페이지',
        next_5: '다음 5 페이지',
        prev_3: '이전 3 페이지',
        next_3: '다음 3 페이지'
    },
    DatePicker: {
        lang: {
            placeholder: '날짜 선택',
            rangePlaceholder: ['시작일', '종료일'],
            locale: 'ko_KR',
            today: '오늘',
            now: '현재 시각',
            backToToday: '오늘로 돌아가기',
            ok: '확인',
            clear: '지우기',
            month: '월',
            year: '년',
            timeSelect: '시간 선택',
            dateSelect: '날짜 선택',
            monthSelect: '달 선택',
            yearSelect: '연 선택',
            decadeSelect: '연대 선택',
            yearFormat: 'YYYY년',
            dateFormat: 'YYYY-MM-DD',
            dayFormat: 'Do',
            dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
            monthBeforeYear: false,
            previousMonth: '이전 달 (PageUp)',
            nextMonth: '다음 달 (PageDown)',
            previousYear: '이전 해 (Control + left)',
            nextYear: '다음 해 (Control + right)',
            previousDecade: '이전 연대',
            nextDecade: '다음 연대',
            previousCentury: '이전 세기',
            nextCentury: '다음 세기'
        },
        timePickerLocale: {
            placeholder: '날짜 선택'
        }
    },
    TimePicker: {
        placeholder: '날짜 선택'
    },
    Calendar: {
        lang: {
            placeholder: '날짜 선택',
            rangePlaceholder: ['시작일', '종료일'],
            locale: 'ko_KR',
            today: '오늘',
            now: '현재 시각',
            backToToday: '오늘로 돌아가기',
            ok: '확인',
            clear: '지우기',
            month: '월',
            year: '년',
            timeSelect: '시간 선택',
            dateSelect: '날짜 선택',
            monthSelect: '달 선택',
            yearSelect: '연 선택',
            decadeSelect: '연대 선택',
            yearFormat: 'YYYY년',
            dateFormat: 'YYYY-MM-DD',
            dayFormat: 'Do',
            dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
            monthBeforeYear: false,
            previousMonth: '이전 달 (PageUp)',
            nextMonth: '다음 달 (PageDown)',
            previousYear: '이전 해 (Control + left)',
            nextYear: '다음 해 (Control + right)',
            previousDecade: '이전 연대',
            nextDecade: '다음 연대',
            previousCentury: '이전 세기',
            nextCentury: '다음 세기'
        },
        timePickerLocale: {
            placeholder: '날짜 선택'
        }
    },
    Table: {
        filterTitle: '필터 메뉴',
        filterConfirm: '확인',
        filterReset: '초기화',
        selectAll: '모두 선택',
        selectInvert: '선택 반전'
    },
    Modal: {
        okText: '확인',
        cancelText: '취소',
        justOkText: '확인'
    },
    Popconfirm: {
        okText: '확인',
        cancelText: '취소'
    },
    Transfer: {
        searchPlaceholder: '여기에 검색하세요',
        itemUnit: '개',
        itemsUnit: '개'
    },
    Upload: {
        uploading: '업로드 중...',
        removeFile: '파일 삭제',
        uploadError: '업로드 실패',
        previewFile: '파일 미리보기',
        downloadFile: '파일 다운로드'
    },
    Empty: {
        description: '데이터 없음'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ku_IQ = {
    locale: 'ku-iq',
    Pagination: {
        items_per_page: '/ rûpel',
        jump_to: 'Biçe',
        jump_to_confirm: 'piştrast bike',
        page: '',
        prev_page: 'Rûpelê Pêş',
        next_page: 'Rûpelê Paş',
        prev_5: '5 Rûpelên Pêş',
        next_5: '5 Rûpelên Paş',
        prev_3: '3 Rûpelên Pêş',
        next_3: '3 Rûpelên Paş'
    },
    DatePicker: {
        lang: {
            placeholder: 'Dîrok hilbijêre',
            rangePlaceholder: ['Dîroka destpêkê', 'Dîroka dawîn'],
            locale: 'ku',
            today: 'Îro',
            now: 'Niha',
            backToToday: 'Vegere îro',
            ok: 'Temam',
            clear: 'Paqij bike',
            month: 'Meh',
            year: 'Sal',
            timeSelect: 'Demê hilbijêre',
            dateSelect: 'Dîrok hilbijêre',
            monthSelect: 'Meh hilbijêre',
            yearSelect: 'Sal hilbijêre',
            decadeSelect: 'Dehsal hilbijêre',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Meha peş (PageUp))',
            nextMonth: 'Meha paş (PageDown)',
            previousYear: 'Sala peş (Control + şep)',
            nextYear: 'Sala paş (Control + rast)',
            previousDecade: 'Dehsalen peş',
            nextDecade: 'Dehsalen paş',
            previousCentury: 'Sedsalen peş',
            nextCentury: 'Sedsalen paş'
        },
        timePickerLocale: {
            placeholder: 'Demê hilbijêre'
        }
    },
    TimePicker: {
        placeholder: 'Demê hilbijêre'
    },
    Calendar: {
        lang: {
            placeholder: 'Dîrok hilbijêre',
            rangePlaceholder: ['Dîroka destpêkê', 'Dîroka dawîn'],
            locale: 'ku',
            today: 'Îro',
            now: 'Niha',
            backToToday: 'Vegere îro',
            ok: 'Temam',
            clear: 'Paqij bike',
            month: 'Meh',
            year: 'Sal',
            timeSelect: 'Demê hilbijêre',
            dateSelect: 'Dîrok hilbijêre',
            monthSelect: 'Meh hilbijêre',
            yearSelect: 'Sal hilbijêre',
            decadeSelect: 'Dehsal hilbijêre',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Meha peş (PageUp))',
            nextMonth: 'Meha paş (PageDown)',
            previousYear: 'Sala peş (Control + şep)',
            nextYear: 'Sala paş (Control + rast)',
            previousDecade: 'Dehsalen peş',
            nextDecade: 'Dehsalen paş',
            previousCentury: 'Sedsalen peş',
            nextCentury: 'Sedsalen paş'
        },
        timePickerLocale: {
            placeholder: 'Demê hilbijêre'
        }
    },
    Table: {
        filterTitle: 'Menuê peldanka',
        filterConfirm: 'Temam',
        filterReset: 'Jê bibe',
        selectAll: 'Hemî hilbijêre',
        selectInvert: 'Hilbijartinan veguhere'
    },
    Modal: {
        okText: 'Temam',
        cancelText: 'Betal ke',
        justOkText: 'Temam'
    },
    Popconfirm: {
        okText: 'Temam',
        cancelText: 'Betal ke'
    },
    Transfer: {
        searchPlaceholder: 'Lêgerîn',
        itemUnit: 'tişt',
        itemsUnit: 'tişt'
    },
    Upload: {
        uploading: 'Bardike...',
        removeFile: 'Pelê rabike',
        uploadError: 'Xeta barkirine',
        previewFile: 'Pelê pêşbibîne',
        downloadFile: 'Pelê dakêşin'
    },
    Empty: {
        description: 'Agahî tune'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var lt_LT = {
    locale: 'lt',
    Pagination: {
        items_per_page: '/ psl.',
        jump_to: 'Pereiti',
        jump_to_confirm: 'patvirtinti',
        page: '',
        prev_page: 'Atgal',
        next_page: 'Pirmyn',
        prev_5: 'Grįžti 5 pls.',
        next_5: 'Peršokti 5 pls.',
        prev_3: 'Grįžti 3 pls.',
        next_3: 'Peršokti 3 pls.'
    },
    DatePicker: {
        lang: {
            placeholder: 'Pasirinkite datą',
            yearPlaceholder: 'Pasirinkite metus',
            quarterPlaceholder: 'Pasirinkite ketvirtį',
            monthPlaceholder: 'Pasirinkite mėnesį',
            weekPlaceholder: 'Pasirinkite savaitę',
            rangePlaceholder: ['Pradžios data', 'Pabaigos data'],
            rangeYearPlaceholder: ['Pradžios metai', 'Pabaigos metai'],
            rangeMonthPlaceholder: ['Pradžios mėnesis', 'Pabaigos mėnesis'],
            rangeWeekPlaceholder: ['Pradžios savaitė', 'Pabaigos savaitė'],
            locale: 'lt_LT',
            today: 'Šiandien',
            now: 'Dabar',
            backToToday: 'Rodyti šiandien',
            ok: 'Gerai',
            clear: 'Išvalyti',
            month: 'Mėnesis',
            year: 'Metai',
            timeSelect: 'Pasirinkti laiką',
            dateSelect: 'Pasirinkti datą',
            monthSelect: 'Pasirinkti mėnesį',
            yearSelect: 'Pasirinkti metus',
            decadeSelect: 'Pasirinkti dešimtmetį',
            yearFormat: 'YYYY',
            dateFormat: 'YYYY-MM-DD',
            dayFormat: 'DD',
            dateTimeFormat: 'YYYY-MM-DD HH:MM:SS',
            monthBeforeYear: true,
            previousMonth: 'Buvęs mėnesis (PageUp)',
            nextMonth: 'Sekantis mėnesis (PageDown)',
            previousYear: 'Buvę metai (Control + left)',
            nextYear: 'Sekantis metai (Control + right)',
            previousDecade: 'Buvęs dešimtmetis',
            nextDecade: 'Sekantis dešimtmetis',
            previousCentury: 'Buvęs amžius',
            nextCentury: 'Sekantis amžius'
        },
        timePickerLocale: {
            placeholder: 'Pasirinkite laiką',
            rangePlaceholder: ['Pradžios laikas', 'Pabaigos laikas']
        }
    },
    TimePicker: {
        placeholder: 'Pasirinkite laiką',
        rangePlaceholder: ['Pradžios laikas', 'Pabaigos laikas']
    },
    Calendar: {
        lang: {
            placeholder: 'Pasirinkite datą',
            yearPlaceholder: 'Pasirinkite metus',
            quarterPlaceholder: 'Pasirinkite ketvirtį',
            monthPlaceholder: 'Pasirinkite mėnesį',
            weekPlaceholder: 'Pasirinkite savaitę',
            rangePlaceholder: ['Pradžios data', 'Pabaigos data'],
            rangeYearPlaceholder: ['Pradžios metai', 'Pabaigos metai'],
            rangeMonthPlaceholder: ['Pradžios mėnesis', 'Pabaigos mėnesis'],
            rangeWeekPlaceholder: ['Pradžios savaitė', 'Pabaigos savaitė'],
            locale: 'lt_LT',
            today: 'Šiandien',
            now: 'Dabar',
            backToToday: 'Rodyti šiandien',
            ok: 'Gerai',
            clear: 'Išvalyti',
            month: 'Mėnesis',
            year: 'Metai',
            timeSelect: 'Pasirinkti laiką',
            dateSelect: 'Pasirinkti datą',
            monthSelect: 'Pasirinkti mėnesį',
            yearSelect: 'Pasirinkti metus',
            decadeSelect: 'Pasirinkti dešimtmetį',
            yearFormat: 'YYYY',
            dateFormat: 'YYYY-MM-DD',
            dayFormat: 'DD',
            dateTimeFormat: 'YYYY-MM-DD HH:MM:SS',
            monthBeforeYear: true,
            previousMonth: 'Buvęs mėnesis (PageUp)',
            nextMonth: 'Sekantis mėnesis (PageDown)',
            previousYear: 'Buvę metai (Control + left)',
            nextYear: 'Sekantis metai (Control + right)',
            previousDecade: 'Buvęs dešimtmetis',
            nextDecade: 'Sekantis dešimtmetis',
            previousCentury: 'Buvęs amžius',
            nextCentury: 'Sekantis amžius'
        },
        timePickerLocale: {
            placeholder: 'Pasirinkite laiką',
            rangePlaceholder: ['Pradžios laikas', 'Pabaigos laikas']
        }
    },
    Table: {
        filterTitle: 'Filtras',
        filterConfirm: 'Gerai',
        filterReset: 'Atstatyti',
        filterEmptyText: 'Be filtrų',
        emptyText: 'Nėra duomenų',
        selectAll: 'Pasirinkti viską',
        selectInvert: 'Apversti pasirinkimą',
        selectionAll: 'Rinktis visus',
        sortTitle: 'Rikiavimas',
        expand: 'Išskleisti',
        collapse: 'Suskleisti',
        triggerDesc: 'Spustelėkite norėdami rūšiuoti mažėjančia tvarka',
        triggerAsc: 'Spustelėkite norėdami rūšiuoti didėjančia tvarka',
        cancelSort: 'Spustelėkite, kad atšauktumėte rūšiavimą'
    },
    Modal: {
        okText: 'Taip',
        cancelText: 'Atšaukti',
        justOkText: 'Gerai'
    },
    Popconfirm: {
        okText: 'Taip',
        cancelText: 'Atšaukti'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Paieška',
        itemUnit: 'vnt.',
        itemsUnit: 'vnt.',
        remove: 'Pašalinti',
        selectAll: 'Pasirinkti visus',
        selectCurrent: 'Pasirinkite dabartinį puslapį',
        selectInvert: 'Atkeist pasirinkimą',
        removeAll: 'Ištrinti visus duomenis',
        removeCurrent: 'Ištrinti dabartinį puslapį'
    },
    Upload: {
        uploading: 'Gaunami duomenys...',
        removeFile: 'Ištrinti failą',
        uploadError: 'Įkeliant įvyko klaida',
        previewFile: 'Failo peržiūra',
        downloadFile: 'Įkelti failą'
    },
    Empty: {
        description: 'Nėra duomenų'
    },
    Icon: {
        icon: 'piktograma'
    },
    Text: {
        edit: 'Redaguoti',
        copy: 'Kopijuoti',
        copied: 'Nukopijuota',
        expand: 'Plačiau'
    },
    PageHeader: {
        back: 'Atgal'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var lv_LV = {
    locale: 'lv',
    Pagination: {
        items_per_page: '/ lappuse',
        jump_to: 'iet uz',
        jump_to_confirm: 'apstiprināt',
        page: '',
        prev_page: 'Iepriekšējā lapa',
        next_page: 'Nākamā lapaspuse',
        prev_5: 'Iepriekšējās 5 lapas',
        next_5: 'Nākamās 5 lapas',
        prev_3: 'Iepriekšējās 3 lapas',
        next_3: 'Nākamās 3 lapas'
    },
    DatePicker: {
        lang: {
            placeholder: 'Izvēlieties datumu',
            rangePlaceholder: ['Sākuma datums', 'Beigu datums'],
            locale: 'lv_LV',
            today: 'Šodien',
            now: 'Tagad',
            backToToday: 'Atpakaļ pie šodienas',
            ok: 'Ok',
            clear: 'Skaidrs',
            month: 'Mēnesis',
            year: 'Gads',
            timeSelect: 'Izvēlieties laiku',
            dateSelect: 'Izvēlieties datumu',
            monthSelect: 'Izvēlieties mēnesi',
            yearSelect: 'Izvēlieties gadu',
            decadeSelect: 'Izvēlieties desmit gadus',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Iepriekšējais mēnesis (PageUp)',
            nextMonth: 'Nākammēnes (PageDown)',
            previousYear: 'Pagājušais gads (Control + left)',
            nextYear: 'Nākamgad (Control + right)',
            previousDecade: 'Pēdējā desmitgadē',
            nextDecade: 'Nākamā desmitgade',
            previousCentury: 'Pagājušajā gadsimtā',
            nextCentury: 'Nākamajā gadsimtā'
        },
        timePickerLocale: {
            placeholder: 'Izvēlieties laiku'
        }
    },
    TimePicker: {
        placeholder: 'Izvēlieties laiku'
    },
    Calendar: {
        lang: {
            placeholder: 'Izvēlieties datumu',
            rangePlaceholder: ['Sākuma datums', 'Beigu datums'],
            locale: 'lv_LV',
            today: 'Šodien',
            now: 'Tagad',
            backToToday: 'Atpakaļ pie šodienas',
            ok: 'Ok',
            clear: 'Skaidrs',
            month: 'Mēnesis',
            year: 'Gads',
            timeSelect: 'Izvēlieties laiku',
            dateSelect: 'Izvēlieties datumu',
            monthSelect: 'Izvēlieties mēnesi',
            yearSelect: 'Izvēlieties gadu',
            decadeSelect: 'Izvēlieties desmit gadus',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Iepriekšējais mēnesis (PageUp)',
            nextMonth: 'Nākammēnes (PageDown)',
            previousYear: 'Pagājušais gads (Control + left)',
            nextYear: 'Nākamgad (Control + right)',
            previousDecade: 'Pēdējā desmitgadē',
            nextDecade: 'Nākamā desmitgade',
            previousCentury: 'Pagājušajā gadsimtā',
            nextCentury: 'Nākamajā gadsimtā'
        },
        timePickerLocale: {
            placeholder: 'Izvēlieties laiku'
        }
    },
    Table: {
        filterTitle: 'Filtrēšanas izvēlne',
        filterConfirm: 'OK',
        filterReset: 'Atiestatīt',
        selectAll: 'Atlasiet pašreizējo lapu',
        selectInvert: 'Pārvērst pašreizējo lapu'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Atcelt',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Atcelt'
    },
    Transfer: {
        searchPlaceholder: 'Meklēt šeit',
        itemUnit: 'vienumu',
        itemsUnit: 'vienumus'
    },
    Upload: {
        uploading: 'Augšupielāde...',
        removeFile: 'Noņemt failu',
        uploadError: 'Augšupielādes kļūda',
        previewFile: 'Priekšskatiet failu',
        downloadFile: 'Lejupielādēt failu'
    },
    Empty: {
        description: 'Nav datu'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var mk_MK = {
    locale: 'mk',
    Pagination: {
        items_per_page: '/ стр',
        jump_to: 'Оди на',
        jump_to_confirm: 'потврди',
        page: '',
        prev_page: 'Претходна страница',
        next_page: 'Наредна страница',
        prev_5: 'Претходни 5 страници',
        next_5: 'Наредни 5 страници',
        prev_3: 'Претходни 3 страници',
        next_3: 'Наредни 3 страници'
    },
    DatePicker: {
        lang: {
            placeholder: 'Избери датум',
            rangePlaceholder: ['Од датум', 'До датум'],
            locale: 'mk_MK',
            today: 'Денес',
            now: 'Сега',
            backToToday: 'Назад до денес',
            ok: 'ОК',
            clear: 'Избриши',
            month: 'Месец',
            year: 'Година',
            timeSelect: 'Избери време',
            dateSelect: 'Избери датум',
            monthSelect: 'Избери месец',
            yearSelect: 'Избери година',
            decadeSelect: 'Избери деценија',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Претходен месец (PageUp)',
            nextMonth: 'Нареден месец (PageDown)',
            previousYear: 'Претходна година (Control + left)',
            nextYear: 'Наредна година (Control + right)',
            previousDecade: 'Претходна деценија',
            nextDecade: 'Наредна деценија',
            previousCentury: 'Претходен век',
            nextCentury: 'Нареден век'
        },
        timePickerLocale: {
            placeholder: 'Избери време'
        }
    },
    TimePicker: {
        placeholder: 'Избери време'
    },
    Calendar: {
        lang: {
            placeholder: 'Избери датум',
            rangePlaceholder: ['Од датум', 'До датум'],
            locale: 'mk_MK',
            today: 'Денес',
            now: 'Сега',
            backToToday: 'Назад до денес',
            ok: 'ОК',
            clear: 'Избриши',
            month: 'Месец',
            year: 'Година',
            timeSelect: 'Избери време',
            dateSelect: 'Избери датум',
            monthSelect: 'Избери месец',
            yearSelect: 'Избери година',
            decadeSelect: 'Избери деценија',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Претходен месец (PageUp)',
            nextMonth: 'Нареден месец (PageDown)',
            previousYear: 'Претходна година (Control + left)',
            nextYear: 'Наредна година (Control + right)',
            previousDecade: 'Претходна деценија',
            nextDecade: 'Наредна деценија',
            previousCentury: 'Претходен век',
            nextCentury: 'Нареден век'
        },
        timePickerLocale: {
            placeholder: 'Избери време'
        }
    },
    global: {
        placeholder: 'Ве молиме означете'
    },
    Table: {
        filterTitle: 'Мени за филтрирање',
        filterConfirm: 'ОК',
        filterReset: 'Избриши',
        selectAll: 'Одбери страница',
        selectInvert: 'Инвертирај страница'
    },
    Modal: {
        okText: 'ОК',
        cancelText: 'Откажи',
        justOkText: 'ОК'
    },
    Popconfirm: {
        okText: 'ОК',
        cancelText: 'Откажи'
    },
    Transfer: {
        searchPlaceholder: 'Пребарај тука',
        itemUnit: 'предмет',
        itemsUnit: 'предмети'
    },
    Upload: {
        uploading: 'Се прикачува...',
        removeFile: 'Избриши фајл',
        uploadError: 'Грешка при прикачување',
        previewFile: 'Прикажи фајл',
        downloadFile: 'Преземи фајл'
    },
    Empty: {
        description: 'Нема податоци'
    },
    Icon: {
        icon: 'Икона'
    },
    Text: {
        edit: 'Уреди',
        copy: 'Копирај',
        copied: 'Копирано',
        expand: 'Зголеми'
    },
    PageHeader: {
        back: 'Назад'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var mn_MN = {
    locale: 'mn-mn',
    Pagination: {
        items_per_page: '/ хуудас',
        jump_to: 'Шилжих',
        jump_to_confirm: 'сонгох',
        page: '',
        prev_page: 'Өмнөх хуудас',
        next_page: 'Дараагийн хуудас',
        prev_5: 'Дараагийн 5 хуудас',
        next_5: 'Дараагийн 5 хуудас',
        prev_3: 'Дараагийн 3 хуудас',
        next_3: 'Дараагийн 3 хуудас'
    },
    DatePicker: {
        lang: {
            placeholder: 'Огноо сонгох',
            rangePlaceholder: ['Эхлэх огноо', 'Дуусах огноо'],
            locale: 'mn_MN',
            today: 'Өнөөдөр',
            now: 'Одоо',
            backToToday: 'Өнөөдөрлүү буцах',
            ok: 'Ok',
            clear: 'Цэвэрлэх',
            month: 'Сар',
            year: 'Жил',
            timeSelect: 'Цаг сонгох',
            dateSelect: 'Огноо сонгох',
            weekSelect: '7 хоног сонгох',
            monthSelect: 'Сар сонгох',
            yearSelect: 'Жил сонгох',
            decadeSelect: 'Арван сонгох',
            yearFormat: 'YYYY',
            dateFormat: 'YYYY/MM/DD',
            dayFormat: 'DD',
            dateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Өмнөх сар (PageUp)',
            nextMonth: 'Дараа сар (PageDown)',
            previousYear: 'Өмнөх жил (Control + left)',
            nextYear: 'Дараа жил (Control + right)',
            previousDecade: 'Өмнөх арван',
            nextDecade: 'Дараа арван',
            previousCentury: 'Өмнөх зуун',
            nextCentury: 'Дараа зуун'
        },
        timePickerLocale: {
            placeholder: 'Цаг сонгох'
        }
    },
    TimePicker: {
        placeholder: 'Цаг сонгох'
    },
    Calendar: {
        lang: {
            placeholder: 'Огноо сонгох',
            rangePlaceholder: ['Эхлэх огноо', 'Дуусах огноо'],
            locale: 'mn_MN',
            today: 'Өнөөдөр',
            now: 'Одоо',
            backToToday: 'Өнөөдөрлүү буцах',
            ok: 'Ok',
            clear: 'Цэвэрлэх',
            month: 'Сар',
            year: 'Жил',
            timeSelect: 'Цаг сонгох',
            dateSelect: 'Огноо сонгох',
            weekSelect: '7 хоног сонгох',
            monthSelect: 'Сар сонгох',
            yearSelect: 'Жил сонгох',
            decadeSelect: 'Арван сонгох',
            yearFormat: 'YYYY',
            dateFormat: 'YYYY/MM/DD',
            dayFormat: 'DD',
            dateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Өмнөх сар (PageUp)',
            nextMonth: 'Дараа сар (PageDown)',
            previousYear: 'Өмнөх жил (Control + left)',
            nextYear: 'Дараа жил (Control + right)',
            previousDecade: 'Өмнөх арван',
            nextDecade: 'Дараа арван',
            previousCentury: 'Өмнөх зуун',
            nextCentury: 'Дараа зуун'
        },
        timePickerLocale: {
            placeholder: 'Цаг сонгох'
        }
    },
    Table: {
        filterTitle: 'Хайх цэс',
        filterConfirm: 'OK',
        filterReset: 'Цэвэрлэх',
        selectAll: 'Бүгдийг сонгох',
        selectInvert: 'Бусдыг сонгох'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Цуцлах',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Цуцлах'
    },
    Transfer: {
        searchPlaceholder: 'Хайх',
        itemUnit: 'Зүйл',
        itemsUnit: 'Зүйлүүд'
    },
    Upload: {
        uploading: 'Хуулж байна...',
        removeFile: 'Файл устгах',
        uploadError: 'Хуулахад алдаа гарлаа',
        previewFile: 'Файлыг түргэн үзэх',
        downloadFile: 'Файлыг татах'
    },
    Empty: {
        description: 'Мэдээлэл байхгүй байна'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ms_MY = {
    locale: 'ms-my',
    Pagination: {
        items_per_page: '/ halaman',
        jump_to: 'Lompat ke',
        jump_to_confirm: 'Sahkan',
        page: '',
        prev_page: 'Halaman sebelumnya',
        next_page: 'Halam seterusnya',
        prev_5: '5 halaman sebelum',
        next_5: '5 halaman seterusnya',
        prev_3: '3 halaman sebelumnya',
        next_3: '3 halaman seterusnya'
    },
    DatePicker: {
        lang: {
            placeholder: 'Pilih tarikh',
            rangePlaceholder: ['Tarikh mula', 'Tarikh akhir'],
            locale: 'ms_MY',
            today: 'Hari ini',
            now: 'Sekarang',
            backToToday: 'Kembali ke hari ini',
            ok: 'Ok',
            timeSelect: 'Pilih masa',
            dateSelect: 'Pilih tarikh',
            weekSelect: 'Pilih minggu',
            clear: 'Padam',
            month: 'Bulan',
            year: 'Tahun',
            previousMonth: 'Bulan lepas',
            nextMonth: 'Bulan depan',
            monthSelect: 'Pilih bulan',
            yearSelect: 'Pilih tahun',
            decadeSelect: 'Pilih dekad',
            yearFormat: 'YYYY',
            dayFormat: 'D',
            dateFormat: 'M/D/YYYY',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            previousYear: 'Tahun lepas (Ctrl+left)',
            nextYear: 'Tahun depan (Ctrl+right)',
            previousDecade: 'Dekad lepas',
            nextDecade: 'Dekad depan',
            previousCentury: 'Abad lepas',
            nextCentury: 'Abad depan'
        },
        timePickerLocale: {
            placeholder: 'Sila pilih masa'
        }
    },
    TimePicker: {
        placeholder: 'Sila pilih masa'
    },
    Calendar: {
        lang: {
            placeholder: 'Pilih tarikh',
            rangePlaceholder: ['Tarikh mula', 'Tarikh akhir'],
            locale: 'ms_MY',
            today: 'Hari ini',
            now: 'Sekarang',
            backToToday: 'Kembali ke hari ini',
            ok: 'Ok',
            timeSelect: 'Pilih masa',
            dateSelect: 'Pilih tarikh',
            weekSelect: 'Pilih minggu',
            clear: 'Padam',
            month: 'Bulan',
            year: 'Tahun',
            previousMonth: 'Bulan lepas',
            nextMonth: 'Bulan depan',
            monthSelect: 'Pilih bulan',
            yearSelect: 'Pilih tahun',
            decadeSelect: 'Pilih dekad',
            yearFormat: 'YYYY',
            dayFormat: 'D',
            dateFormat: 'M/D/YYYY',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            previousYear: 'Tahun lepas (Ctrl+left)',
            nextYear: 'Tahun depan (Ctrl+right)',
            previousDecade: 'Dekad lepas',
            nextDecade: 'Dekad depan',
            previousCentury: 'Abad lepas',
            nextCentury: 'Abad depan'
        },
        timePickerLocale: {
            placeholder: 'Sila pilih masa'
        }
    },
    global: {
        placeholder: 'Sila pilih'
    },
    PageHeader: {
        back: 'Kembali'
    },
    Text: {
        edit: 'Sunting',
        copy: 'Salin',
        copied: 'Berjaya menyalin',
        expand: 'Kembang'
    },
    Empty: {
        description: 'Tiada data'
    },
    Table: {
        filterTitle: 'Cari dengan tajuk',
        filterConfirm: 'Ok',
        filterReset: 'Menetapkan semula',
        emptyText: 'Tiada data',
        selectAll: 'Pilih semua',
        selectInvert: 'Terbalikkan'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Batal',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Batal'
    },
    Transfer: {
        notFoundContent: 'Tidak dijumpai',
        searchPlaceholder: 'Carian di sini',
        itemUnit: 'item',
        itemsUnit: 'item'
    },
    Icon: {
        icon: 'ikon'
    },
    Select: {
        notFoundContent: 'Tidak Dijumpai'
    },
    Upload: {
        uploading: 'Sedang memuat naik...',
        removeFile: 'Buang fail',
        uploadError: 'Masalah muat naik',
        previewFile: 'Tengok fail',
        downloadFile: 'Muat turun fail'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var nb_NO = {
    locale: 'nb',
    Pagination: {
        items_per_page: '/ side',
        jump_to: 'Gå til side',
        page: '',
        prev_page: 'Forrige side',
        next_page: 'Neste side',
        prev_5: '5 forrige',
        next_5: '5 neste',
        prev_3: '3 forrige',
        next_3: '3 neste'
    },
    DatePicker: {
        lang: {
            placeholder: 'Velg dato',
            yearPlaceholder: 'Velg år',
            quarterPlaceholder: 'Velg kvartal',
            monthPlaceholder: 'Velg måned',
            weekPlaceholder: 'Velg uke',
            rangePlaceholder: ['Startdato', 'Sluttdato'],
            rangeYearPlaceholder: ['Startår', 'Sluttår'],
            rangeMonthPlaceholder: ['Startmåned', 'Sluttmåned'],
            rangeWeekPlaceholder: ['Start uke', 'Sluttuke'],
            locale: 'nb_NO',
            today: 'I dag',
            now: 'Nå',
            backToToday: 'Gå til i dag',
            ok: 'Ok',
            clear: 'Annuller',
            month: 'Måned',
            year: 'År',
            timeSelect: 'Velg tidspunkt',
            dateSelect: 'Velg dato',
            weekSelect: 'Velg uke',
            monthSelect: 'Velg måned',
            yearSelect: 'Velg år',
            decadeSelect: 'Velg tiår',
            yearFormat: 'YYYY',
            dateFormat: 'DD.MM.YYYY',
            dayFormat: 'DD',
            dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Forrige måned (PageUp)',
            nextMonth: 'Neste måned (PageDown)',
            previousYear: 'Forrige år (Control + venstre)',
            nextYear: 'Neste år (Control + høyre)',
            previousDecade: 'Forrige tiår',
            nextDecade: 'Neste tiår',
            previousCentury: 'Forrige århundre',
            nextCentury: 'Neste århundre'
        },
        timePickerLocale: {
            placeholder: 'Velg tid',
            rangePlaceholder: ['Starttid', 'Sluttid']
        }
    },
    TimePicker: {
        placeholder: 'Velg tid',
        rangePlaceholder: ['Starttid', 'Sluttid']
    },
    Calendar: {
        lang: {
            placeholder: 'Velg dato',
            yearPlaceholder: 'Velg år',
            quarterPlaceholder: 'Velg kvartal',
            monthPlaceholder: 'Velg måned',
            weekPlaceholder: 'Velg uke',
            rangePlaceholder: ['Startdato', 'Sluttdato'],
            rangeYearPlaceholder: ['Startår', 'Sluttår'],
            rangeMonthPlaceholder: ['Startmåned', 'Sluttmåned'],
            rangeWeekPlaceholder: ['Start uke', 'Sluttuke'],
            locale: 'nb_NO',
            today: 'I dag',
            now: 'Nå',
            backToToday: 'Gå til i dag',
            ok: 'Ok',
            clear: 'Annuller',
            month: 'Måned',
            year: 'År',
            timeSelect: 'Velg tidspunkt',
            dateSelect: 'Velg dato',
            weekSelect: 'Velg uke',
            monthSelect: 'Velg måned',
            yearSelect: 'Velg år',
            decadeSelect: 'Velg tiår',
            yearFormat: 'YYYY',
            dateFormat: 'DD.MM.YYYY',
            dayFormat: 'DD',
            dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Forrige måned (PageUp)',
            nextMonth: 'Neste måned (PageDown)',
            previousYear: 'Forrige år (Control + venstre)',
            nextYear: 'Neste år (Control + høyre)',
            previousDecade: 'Forrige tiår',
            nextDecade: 'Neste tiår',
            previousCentury: 'Forrige århundre',
            nextCentury: 'Neste århundre'
        },
        timePickerLocale: {
            placeholder: 'Velg tid',
            rangePlaceholder: ['Starttid', 'Sluttid']
        }
    },
    global: {
        placeholder: 'Vennligst velg'
    },
    Table: {
        filterTitle: 'Filtermeny',
        filterConfirm: 'OK',
        filterReset: 'Nullstill',
        filterEmptyText: 'Ingen filtre',
        selectAll: 'Velg alle',
        selectInvert: 'Inverter gjeldende side',
        selectionAll: 'Velg all data',
        sortTitle: 'Sorter',
        expand: 'Utvid rad',
        collapse: 'Skjul rad',
        triggerDesc: 'Sorter data i synkende rekkefølge',
        triggerAsc: 'Sorterer data i stigende rekkefølge',
        cancelSort: 'Klikk for å avbryte sorteringen'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Avbryt',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Avbryt'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Søk her',
        itemUnit: 'element',
        itemsUnit: 'elementer',
        remove: 'Fjern',
        selectCurrent: 'Velg gjeldende side',
        removeCurrent: 'Fjern gjeldende side',
        selectAll: 'Velg all data',
        removeAll: 'Fjern all data',
        selectInvert: 'Inverter gjeldende side'
    },
    Upload: {
        uploading: 'Laster opp...',
        removeFile: 'Fjern fil',
        uploadError: 'Feil ved opplastning',
        previewFile: 'Forhåndsvisning',
        downloadFile: 'Last ned fil'
    },
    Empty: {
        description: 'Ingen data'
    },
    Icon: {
        icon: 'ikon'
    },
    Text: {
        edit: 'Rediger',
        copy: 'Kopier',
        copied: 'Kopiert',
        expand: 'Utvid'
    },
    PageHeader: {
        back: 'Tilbake'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ne_NP = {
    locale: 'ne-np',
    Pagination: {
        items_per_page: '/ page',
        jump_to: 'Go to',
        jump_to_confirm: 'confirm',
        page: '',
        prev_page: 'Previous Page',
        next_page: 'Next Page',
        prev_5: 'Previous 5 Pages',
        next_5: 'Next 5 Pages',
        prev_3: 'Previous 3 Pages',
        next_3: 'Next 3 Pages'
    },
    DatePicker: {
        lang: {
            placeholder: 'Select date',
            yearPlaceholder: 'Select year',
            quarterPlaceholder: 'Select quarter',
            monthPlaceholder: 'Select month',
            weekPlaceholder: 'Select week',
            rangePlaceholder: ['Start date', 'End date'],
            rangeYearPlaceholder: ['Start year', 'End year'],
            rangeMonthPlaceholder: ['Start month', 'End month'],
            rangeWeekPlaceholder: ['Start week', 'End week'],
            locale: 'en_US',
            today: 'Today',
            now: 'Now',
            backToToday: 'Back to today',
            ok: 'Ok',
            clear: 'Clear',
            month: 'Month',
            year: 'Year',
            timeSelect: 'select time',
            dateSelect: 'select date',
            weekSelect: 'Choose a week',
            monthSelect: 'Choose a month',
            yearSelect: 'Choose a year',
            decadeSelect: 'Choose a decade',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Previous month (PageUp)',
            nextMonth: 'Next month (PageDown)',
            previousYear: 'Last year (Control + left)',
            nextYear: 'Next year (Control + right)',
            previousDecade: 'Last decade',
            nextDecade: 'Next decade',
            previousCentury: 'Last century',
            nextCentury: 'Next century'
        },
        timePickerLocale: {
            placeholder: 'Select time',
            rangePlaceholder: ['Start time', 'End time']
        }
    },
    TimePicker: {
        placeholder: 'Select time',
        rangePlaceholder: ['Start time', 'End time']
    },
    Calendar: {
        lang: {
            placeholder: 'Select date',
            yearPlaceholder: 'Select year',
            quarterPlaceholder: 'Select quarter',
            monthPlaceholder: 'Select month',
            weekPlaceholder: 'Select week',
            rangePlaceholder: ['Start date', 'End date'],
            rangeYearPlaceholder: ['Start year', 'End year'],
            rangeMonthPlaceholder: ['Start month', 'End month'],
            rangeWeekPlaceholder: ['Start week', 'End week'],
            locale: 'en_US',
            today: 'Today',
            now: 'Now',
            backToToday: 'Back to today',
            ok: 'Ok',
            clear: 'Clear',
            month: 'Month',
            year: 'Year',
            timeSelect: 'select time',
            dateSelect: 'select date',
            weekSelect: 'Choose a week',
            monthSelect: 'Choose a month',
            yearSelect: 'Choose a year',
            decadeSelect: 'Choose a decade',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Previous month (PageUp)',
            nextMonth: 'Next month (PageDown)',
            previousYear: 'Last year (Control + left)',
            nextYear: 'Next year (Control + right)',
            previousDecade: 'Last decade',
            nextDecade: 'Next decade',
            previousCentury: 'Last century',
            nextCentury: 'Next century'
        },
        timePickerLocale: {
            placeholder: 'Select time',
            rangePlaceholder: ['Start time', 'End time']
        }
    },
    Table: {
        filterTitle: 'फिल्टर मेनु',
        filterConfirm: 'हो',
        filterReset: 'रीसेट',
        selectAll: 'सबै छान्नुुहोस्',
        selectInvert: 'छनौट उल्टाउनुहोस'
    },
    Modal: {
        okText: 'हो',
        cancelText: 'होईन',
        justOkText: 'हो'
    },
    Popconfirm: {
        okText: 'हो',
        cancelText: 'होईन'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'यहाँ खोज्नुहोस्',
        itemUnit: 'वस्तु',
        itemsUnit: 'वस्तुहरू'
    },
    Upload: {
        uploading: 'अपलोड गर्दै...',
        removeFile: 'फाइल हटाउनुहोस्',
        uploadError: 'अप्लोडमा समस्या भयो',
        previewFile: 'फाइल पूर्वावलोकन गर्नुहोस्',
        downloadFile: 'डाउनलोड फाइल'
    },
    Empty: {
        description: 'डाटा छैन'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var nl_BE = {
    locale: 'nl-be',
    Pagination: {
        items_per_page: '/ pagina',
        jump_to: 'Ga naar',
        jump_to_confirm: 'bevestigen',
        page: '',
        prev_page: 'Vorige pagina',
        next_page: 'Volgende pagina',
        prev_5: "Vorige 5 pagina's",
        next_5: "Volgende 5 pagina's",
        prev_3: "Vorige 3 pagina's",
        next_3: "Volgende 3 pagina's"
    },
    DatePicker: {
        lang: {
            placeholder: 'Selecteer datum',
            rangePlaceholder: ['Begin datum', 'Eind datum'],
            locale: 'nl_BE',
            today: 'Vandaag',
            now: 'Nu',
            backToToday: 'Terug naar vandaag',
            ok: 'Ok',
            clear: 'Reset',
            month: 'Maand',
            year: 'Jaar',
            timeSelect: 'Selecteer tijd',
            dateSelect: 'Selecteer datum',
            monthSelect: 'Kies een maand',
            yearSelect: 'Kies een jaar',
            decadeSelect: 'Kies een decennium',
            yearFormat: 'YYYY',
            dateFormat: 'D-M-YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D-M-YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Vorige maand (PageUp)',
            nextMonth: 'Volgende maand (PageDown)',
            previousYear: 'Vorig jaar (Control + left)',
            nextYear: 'Volgend jaar (Control + right)',
            previousDecade: 'Vorig decennium',
            nextDecade: 'Volgend decennium',
            previousCentury: 'Vorige eeuw',
            nextCentury: 'Volgende eeuw'
        },
        timePickerLocale: {
            placeholder: 'Selecteer tijd'
        }
    },
    TimePicker: {
        placeholder: 'Selecteer tijd'
    },
    Calendar: {
        lang: {
            placeholder: 'Selecteer datum',
            rangePlaceholder: ['Begin datum', 'Eind datum'],
            locale: 'nl_BE',
            today: 'Vandaag',
            now: 'Nu',
            backToToday: 'Terug naar vandaag',
            ok: 'Ok',
            clear: 'Reset',
            month: 'Maand',
            year: 'Jaar',
            timeSelect: 'Selecteer tijd',
            dateSelect: 'Selecteer datum',
            monthSelect: 'Kies een maand',
            yearSelect: 'Kies een jaar',
            decadeSelect: 'Kies een decennium',
            yearFormat: 'YYYY',
            dateFormat: 'D-M-YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D-M-YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Vorige maand (PageUp)',
            nextMonth: 'Volgende maand (PageDown)',
            previousYear: 'Vorig jaar (Control + left)',
            nextYear: 'Volgend jaar (Control + right)',
            previousDecade: 'Vorig decennium',
            nextDecade: 'Volgend decennium',
            previousCentury: 'Vorige eeuw',
            nextCentury: 'Volgende eeuw'
        },
        timePickerLocale: {
            placeholder: 'Selecteer tijd'
        }
    },
    Table: {
        filterTitle: 'FilterMenu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Selecteer huidige pagina',
        selectInvert: 'Selecteer huidige pagina'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuleer',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuleer'
    },
    Transfer: {
        searchPlaceholder: 'Zoek hier',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Upload: {
        uploading: 'Uploaden...',
        removeFile: 'Bestand verwijderen',
        uploadError: 'Upload fout',
        previewFile: 'Preview bestand',
        downloadFile: 'Download bestand'
    },
    Empty: {
        description: 'Geen gegevens'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var nl_NL = {
    locale: 'nl',
    Pagination: {
        items_per_page: '/ pagina',
        jump_to: 'Ga naar',
        jump_to_confirm: 'bevestigen',
        page: '',
        prev_page: 'Vorige pagina',
        next_page: 'Volgende pagina',
        prev_5: "Vorige 5 pagina's",
        next_5: "Volgende 5 pagina's",
        prev_3: "Vorige 3 pagina's",
        next_3: "Volgende 3 pagina's"
    },
    DatePicker: {
        lang: {
            placeholder: 'Selecteer datum',
            rangePlaceholder: ['Begin datum', 'Eind datum'],
            locale: 'nl_NL',
            today: 'Vandaag',
            now: 'Nu',
            backToToday: 'Terug naar vandaag',
            ok: 'Ok',
            clear: 'Reset',
            month: 'Maand',
            year: 'Jaar',
            timeSelect: 'Selecteer tijd',
            dateSelect: 'Selecteer datum',
            monthSelect: 'Kies een maand',
            yearSelect: 'Kies een jaar',
            decadeSelect: 'Kies een decennium',
            yearFormat: 'YYYY',
            dateFormat: 'D-M-YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D-M-YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Vorige maand (PageUp)',
            nextMonth: 'Volgende maand (PageDown)',
            previousYear: 'Vorig jaar (Control + left)',
            nextYear: 'Volgend jaar (Control + right)',
            previousDecade: 'Vorig decennium',
            nextDecade: 'Volgend decennium',
            previousCentury: 'Vorige eeuw',
            nextCentury: 'Volgende eeuw'
        },
        timePickerLocale: {
            placeholder: 'Selecteer tijd'
        }
    },
    TimePicker: {
        placeholder: 'Selecteer tijd'
    },
    Calendar: {
        lang: {
            placeholder: 'Selecteer datum',
            rangePlaceholder: ['Begin datum', 'Eind datum'],
            locale: 'nl_NL',
            today: 'Vandaag',
            now: 'Nu',
            backToToday: 'Terug naar vandaag',
            ok: 'Ok',
            clear: 'Reset',
            month: 'Maand',
            year: 'Jaar',
            timeSelect: 'Selecteer tijd',
            dateSelect: 'Selecteer datum',
            monthSelect: 'Kies een maand',
            yearSelect: 'Kies een jaar',
            decadeSelect: 'Kies een decennium',
            yearFormat: 'YYYY',
            dateFormat: 'D-M-YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D-M-YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Vorige maand (PageUp)',
            nextMonth: 'Volgende maand (PageDown)',
            previousYear: 'Vorig jaar (Control + left)',
            nextYear: 'Volgend jaar (Control + right)',
            previousDecade: 'Vorig decennium',
            nextDecade: 'Volgend decennium',
            previousCentury: 'Vorige eeuw',
            nextCentury: 'Volgende eeuw'
        },
        timePickerLocale: {
            placeholder: 'Selecteer tijd'
        }
    },
    global: {
        placeholder: 'Maak een selectie'
    },
    Table: {
        filterTitle: 'Filteren',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        selectAll: 'Selecteer huidige pagina',
        selectInvert: 'Deselecteer huidige pagina',
        sortTitle: 'Sorteren',
        expand: 'Rij uitklappen',
        collapse: 'Rij inklappen'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuleren',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuleren'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Zoeken',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Upload: {
        uploading: 'Uploaden...',
        removeFile: 'Verwijder bestand',
        uploadError: 'Fout tijdens uploaden',
        previewFile: 'Bekijk bestand',
        downloadFile: 'Downloaden bestand'
    },
    Empty: {
        description: 'Geen gegevens'
    },
    Icon: {
        icon: 'icoon'
    },
    Text: {
        edit: 'Bewerken',
        copy: 'Kopieren',
        copied: 'Gekopieerd',
        expand: 'Uitklappen'
    },
    PageHeader: {
        back: 'Terug'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var pl_PL = {
    locale: 'pl',
    Pagination: {
        items_per_page: 'na stronę',
        jump_to: 'Idź do',
        jump_to_confirm: 'potwierdź',
        page: '',
        prev_page: 'Poprzednia strona',
        next_page: 'Następna strona',
        prev_5: 'Poprzednie 5 stron',
        next_5: 'Następne 5 stron',
        prev_3: 'Poprzednie 3 strony',
        next_3: 'Następne 3 strony'
    },
    DatePicker: {
        lang: {
            placeholder: 'Wybierz datę',
            rangePlaceholder: ['Data początkowa', 'Data końcowa'],
            locale: 'pl_PL',
            today: 'Dzisiaj',
            now: 'Teraz',
            backToToday: 'Ustaw dzisiaj',
            ok: 'Ok',
            clear: 'Wyczyść',
            month: 'Miesiąc',
            year: 'Rok',
            timeSelect: 'Ustaw czas',
            dateSelect: 'Ustaw datę',
            monthSelect: 'Wybierz miesiąc',
            yearSelect: 'Wybierz rok',
            decadeSelect: 'Wybierz dekadę',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Poprzedni miesiąc (PageUp)',
            nextMonth: 'Następny miesiąc (PageDown)',
            previousYear: 'Ostatni rok (Ctrl + left)',
            nextYear: 'Następny rok (Ctrl + right)',
            previousDecade: 'Ostatnia dekada',
            nextDecade: 'Następna dekada',
            previousCentury: 'Ostatni wiek',
            nextCentury: 'Następny wiek'
        },
        timePickerLocale: {
            placeholder: 'Wybierz godzinę'
        }
    },
    TimePicker: {
        placeholder: 'Wybierz godzinę'
    },
    Calendar: {
        lang: {
            placeholder: 'Wybierz datę',
            rangePlaceholder: ['Data początkowa', 'Data końcowa'],
            locale: 'pl_PL',
            today: 'Dzisiaj',
            now: 'Teraz',
            backToToday: 'Ustaw dzisiaj',
            ok: 'Ok',
            clear: 'Wyczyść',
            month: 'Miesiąc',
            year: 'Rok',
            timeSelect: 'Ustaw czas',
            dateSelect: 'Ustaw datę',
            monthSelect: 'Wybierz miesiąc',
            yearSelect: 'Wybierz rok',
            decadeSelect: 'Wybierz dekadę',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Poprzedni miesiąc (PageUp)',
            nextMonth: 'Następny miesiąc (PageDown)',
            previousYear: 'Ostatni rok (Ctrl + left)',
            nextYear: 'Następny rok (Ctrl + right)',
            previousDecade: 'Ostatnia dekada',
            nextDecade: 'Następna dekada',
            previousCentury: 'Ostatni wiek',
            nextCentury: 'Następny wiek'
        },
        timePickerLocale: {
            placeholder: 'Wybierz godzinę'
        }
    },
    Table: {
        filterTitle: 'Menu filtra',
        filterConfirm: 'OK',
        filterReset: 'Wyczyść',
        selectAll: 'Zaznacz bieżącą stronę',
        selectInvert: 'Odwróć zaznaczenie',
        triggerDesc: 'Sortuj rosnąco',
        triggerAsc: 'Sortuj malejąco',
        cancelSort: 'Usuń sortowanie'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Anuluj',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Anuluj'
    },
    Transfer: {
        searchPlaceholder: 'Szukaj',
        itemUnit: 'obiekt',
        itemsUnit: 'obiekty'
    },
    Upload: {
        uploading: 'Wysyłanie...',
        removeFile: 'Usuń plik',
        uploadError: 'Błąd wysyłania',
        previewFile: 'Podejrzyj plik',
        downloadFile: 'Pobieranie pliku'
    },
    Empty: {
        description: 'Brak danych'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var pt_BR = {
    locale: 'pt-br',
    Pagination: {
        items_per_page: '/ página',
        jump_to: 'Vá até',
        jump_to_confirm: 'confirme',
        page: '',
        prev_page: 'Página anterior',
        next_page: 'Próxima página',
        prev_5: '5 páginas anteriores',
        next_5: '5 próximas páginas',
        prev_3: '3 páginas anteriores',
        next_3: '3 próximas páginas'
    },
    DatePicker: {
        lang: {
            placeholder: 'Selecionar data',
            rangePlaceholder: ['Data inicial', 'Data final'],
            locale: 'pt_BR',
            today: 'Hoje',
            now: 'Agora',
            backToToday: 'Voltar para hoje',
            ok: 'Ok',
            clear: 'Limpar',
            month: 'Mês',
            year: 'Ano',
            timeSelect: 'Selecionar hora',
            dateSelect: 'Selecionar data',
            monthSelect: 'Escolher mês',
            yearSelect: 'Escolher ano',
            decadeSelect: 'Escolher década',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: false,
            previousMonth: 'Mês anterior (PageUp)',
            nextMonth: 'Próximo mês (PageDown)',
            previousYear: 'Ano anterior (Control + esquerda)',
            nextYear: 'Próximo ano (Control + direita)',
            previousDecade: 'Década anterior',
            nextDecade: 'Próxima década',
            previousCentury: 'Século anterior',
            nextCentury: 'Próximo século'
        },
        timePickerLocale: {
            placeholder: 'Hora'
        }
    },
    TimePicker: {
        placeholder: 'Hora'
    },
    Calendar: {
        lang: {
            placeholder: 'Selecionar data',
            rangePlaceholder: ['Data inicial', 'Data final'],
            locale: 'pt_BR',
            today: 'Hoje',
            now: 'Agora',
            backToToday: 'Voltar para hoje',
            ok: 'Ok',
            clear: 'Limpar',
            month: 'Mês',
            year: 'Ano',
            timeSelect: 'Selecionar hora',
            dateSelect: 'Selecionar data',
            monthSelect: 'Escolher mês',
            yearSelect: 'Escolher ano',
            decadeSelect: 'Escolher década',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: false,
            previousMonth: 'Mês anterior (PageUp)',
            nextMonth: 'Próximo mês (PageDown)',
            previousYear: 'Ano anterior (Control + esquerda)',
            nextYear: 'Próximo ano (Control + direita)',
            previousDecade: 'Década anterior',
            nextDecade: 'Próxima década',
            previousCentury: 'Século anterior',
            nextCentury: 'Próximo século'
        },
        timePickerLocale: {
            placeholder: 'Hora'
        }
    },
    global: {
        placeholder: 'Por favor escolha'
    },
    Table: {
        filterTitle: 'Menu de Filtro',
        filterConfirm: 'OK',
        filterReset: 'Resetar',
        selectAll: 'Selecionar página atual',
        selectInvert: 'Inverter seleção',
        selectionAll: 'Selecionar todo o conteúdo',
        sortTitle: 'Ordenar título',
        expand: 'Expandir linha',
        collapse: 'Colapsar linha',
        triggerDesc: 'Clique organiza por descendente',
        triggerAsc: 'Clique organiza por ascendente',
        cancelSort: 'Clique para cancelar organização'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancelar',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancelar'
    },
    Transfer: {
        searchPlaceholder: 'Procurar',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Upload: {
        uploading: 'Enviando...',
        removeFile: 'Remover arquivo',
        uploadError: 'Erro no envio',
        previewFile: 'Visualizar arquivo',
        downloadFile: 'Baixar arquivo'
    },
    Empty: {
        description: 'Não há dados'
    },
    Icon: {
        icon: 'ícone'
    },
    Text: {
        edit: 'editar',
        copy: 'copiar',
        copied: 'copiado',
        expand: 'expandir'
    },
    PageHeader: {
        back: 'Retornar'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var pt_PT = {
    locale: 'pt',
    Pagination: {
        items_per_page: '/ página',
        jump_to: 'Saltar',
        jump_to_confirm: 'confirmar',
        page: '',
        prev_page: 'Página Anterior',
        next_page: 'Página Seguinte',
        prev_5: 'Recuar 5 Páginas',
        next_5: 'Avançar 5 Páginas',
        prev_3: 'Recuar 3 Páginas',
        next_3: 'Avançar 3 Páginas'
    },
    DatePicker: {
        lang: {
            locale: 'pt_PT',
            today: 'Hoje',
            now: 'Agora',
            backToToday: 'Hoje',
            ok: 'Ok',
            clear: 'Limpar',
            month: 'Mês',
            year: 'Ano',
            timeSelect: 'Hora',
            dateSelect: 'Selecionar data',
            monthSelect: 'Selecionar mês',
            yearSelect: 'Selecionar ano',
            decadeSelect: 'Selecionar década',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: false,
            previousMonth: 'Mês anterior (PageUp)',
            nextMonth: 'Mês seguinte (PageDown)',
            previousYear: 'Ano anterior (Control + left)',
            nextYear: 'Ano seguinte (Control + right)',
            previousDecade: 'Última década',
            nextDecade: 'Próxima década',
            previousCentury: 'Último século',
            nextCentury: 'Próximo século',
            placeholder: 'Data',
            rangePlaceholder: ['Data inicial', 'Data final'],
            monthFormat: 'MMMM'
        },
        timePickerLocale: {
            placeholder: 'Hora'
        }
    },
    TimePicker: {
        placeholder: 'Hora'
    },
    Calendar: {
        lang: {
            locale: 'pt_PT',
            today: 'Hoje',
            now: 'Agora',
            backToToday: 'Hoje',
            ok: 'Ok',
            clear: 'Limpar',
            month: 'Mês',
            year: 'Ano',
            timeSelect: 'Hora',
            dateSelect: 'Selecionar data',
            monthSelect: 'Selecionar mês',
            yearSelect: 'Selecionar ano',
            decadeSelect: 'Selecionar década',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: false,
            previousMonth: 'Mês anterior (PageUp)',
            nextMonth: 'Mês seguinte (PageDown)',
            previousYear: 'Ano anterior (Control + left)',
            nextYear: 'Ano seguinte (Control + right)',
            previousDecade: 'Última década',
            nextDecade: 'Próxima década',
            previousCentury: 'Último século',
            nextCentury: 'Próximo século',
            placeholder: 'Data',
            rangePlaceholder: ['Data inicial', 'Data final'],
            monthFormat: 'MMMM'
        },
        timePickerLocale: {
            placeholder: 'Hora'
        }
    },
    Table: {
        filterTitle: 'Filtro',
        filterConfirm: 'Aplicar',
        filterReset: 'Reiniciar',
        selectAll: 'Selecionar página atual',
        selectInvert: 'Inverter seleção',
        sortTitle: 'Ordenação'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancelar',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancelar'
    },
    Transfer: {
        searchPlaceholder: 'Procurar...',
        itemUnit: 'item',
        itemsUnit: 'itens'
    },
    Upload: {
        uploading: 'A carregar...',
        removeFile: 'Remover',
        uploadError: 'Erro ao carregar',
        previewFile: 'Pré-visualizar',
        downloadFile: 'Baixar'
    },
    Empty: {
        description: 'Sem resultados'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ro_RO = {
    locale: 'ro',
    Pagination: {
        items_per_page: '/ pagină',
        jump_to: 'Mergi la',
        jump_to_confirm: 'confirm',
        page: '',
        prev_page: 'Pagina Anterioară',
        next_page: 'Pagina Următoare',
        prev_5: '5 Pagini Anterioare',
        next_5: '5 Pagini Următoare',
        prev_3: '3 Pagini Anterioare',
        next_3: '3 Pagini Următoare'
    },
    DatePicker: {
        lang: {
            placeholder: 'Selectează data',
            rangePlaceholder: ['Data start', 'Data sfârșit'],
            locale: 'ro_RO',
            today: 'Azi',
            now: 'Acum',
            backToToday: 'Înapoi la azi',
            ok: 'Ok',
            clear: 'Șterge',
            month: 'Lună',
            year: 'An',
            timeSelect: 'selectează timpul',
            dateSelect: 'selectează data',
            weekSelect: 'Alege o săptămână',
            monthSelect: 'Alege o lună',
            yearSelect: 'Alege un an',
            decadeSelect: 'Alege un deceniu',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Luna anterioară (PageUp)',
            nextMonth: 'Luna următoare (PageDown)',
            previousYear: 'Anul anterior (Control + stânga)',
            nextYear: 'Anul următor (Control + dreapta)',
            previousDecade: 'Deceniul anterior',
            nextDecade: 'Deceniul următor',
            previousCentury: 'Secolul anterior',
            nextCentury: 'Secolul următor'
        },
        timePickerLocale: {
            placeholder: 'Selectează ora'
        }
    },
    TimePicker: {
        placeholder: 'Selectează ora'
    },
    Calendar: {
        lang: {
            placeholder: 'Selectează data',
            rangePlaceholder: ['Data start', 'Data sfârșit'],
            locale: 'ro_RO',
            today: 'Azi',
            now: 'Acum',
            backToToday: 'Înapoi la azi',
            ok: 'Ok',
            clear: 'Șterge',
            month: 'Lună',
            year: 'An',
            timeSelect: 'selectează timpul',
            dateSelect: 'selectează data',
            weekSelect: 'Alege o săptămână',
            monthSelect: 'Alege o lună',
            yearSelect: 'Alege un an',
            decadeSelect: 'Alege un deceniu',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Luna anterioară (PageUp)',
            nextMonth: 'Luna următoare (PageDown)',
            previousYear: 'Anul anterior (Control + stânga)',
            nextYear: 'Anul următor (Control + dreapta)',
            previousDecade: 'Deceniul anterior',
            nextDecade: 'Deceniul următor',
            previousCentury: 'Secolul anterior',
            nextCentury: 'Secolul următor'
        },
        timePickerLocale: {
            placeholder: 'Selectează ora'
        }
    },
    global: {
        placeholder: 'Selectează'
    },
    Table: {
        filterTitle: 'Filtrează',
        filterConfirm: 'OK',
        filterReset: 'Resetează',
        selectAll: 'Selectează pagina curentă',
        selectInvert: 'Inversează pagina curentă',
        sortTitle: 'Ordonează',
        expand: 'Extinde rândul',
        collapse: 'Micșorează rândul'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Anulare',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Anulare'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Căutare',
        itemUnit: 'element',
        itemsUnit: 'elemente'
    },
    Upload: {
        uploading: 'Se transferă...',
        removeFile: 'Înlătură fișierul',
        uploadError: 'Eroare la upload',
        previewFile: 'Previzualizare fișier',
        downloadFile: 'Descărcare fișier'
    },
    Empty: {
        description: 'Fără date'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'editează',
        copy: 'copiază',
        copied: 'copiat',
        expand: 'extinde'
    },
    PageHeader: {
        back: 'înapoi'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ru_RU = {
    locale: 'ru',
    Pagination: {
        items_per_page: '/ стр.',
        jump_to: 'Перейти',
        jump_to_confirm: 'подтвердить',
        page: '',
        prev_page: 'Назад',
        next_page: 'Вперед',
        prev_5: 'Предыдущие 5',
        next_5: 'Следующие 5',
        prev_3: 'Предыдущие 3',
        next_3: 'Следующие 3'
    },
    DatePicker: {
        lang: {
            placeholder: 'Выберите дату',
            yearPlaceholder: 'Выберите год',
            quarterPlaceholder: 'Выберите квартал',
            monthPlaceholder: 'Выберите месяц',
            weekPlaceholder: 'Выберите неделю',
            rangePlaceholder: ['Начальная дата', 'Конечная дата'],
            rangeYearPlaceholder: ['Начальный год', 'Год окончания'],
            rangeMonthPlaceholder: ['Начальный месяц', 'Конечный месяц'],
            rangeWeekPlaceholder: ['Начальная неделя', 'Конечная неделя'],
            locale: 'ru_RU',
            today: 'Сегодня',
            now: 'Сейчас',
            backToToday: 'Текущая дата',
            ok: 'Ok',
            clear: 'Очистить',
            month: 'Месяц',
            year: 'Год',
            timeSelect: 'Выбрать время',
            dateSelect: 'Выбрать дату',
            monthSelect: 'Выбрать месяц',
            yearSelect: 'Выбрать год',
            decadeSelect: 'Выбрать десятилетие',
            yearFormat: 'YYYY',
            dateFormat: 'D-M-YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D-M-YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Предыдущий месяц (PageUp)',
            nextMonth: 'Следующий месяц (PageDown)',
            previousYear: 'Предыдущий год (Control + left)',
            nextYear: 'Следующий год (Control + right)',
            previousDecade: 'Предыдущее десятилетие',
            nextDecade: 'Следущее десятилетие',
            previousCentury: 'Предыдущий век',
            nextCentury: 'Следующий век'
        },
        timePickerLocale: {
            placeholder: 'Выберите время',
            rangePlaceholder: ['Время начала', 'Время окончания']
        }
    },
    TimePicker: {
        placeholder: 'Выберите время',
        rangePlaceholder: ['Время начала', 'Время окончания']
    },
    Calendar: {
        lang: {
            placeholder: 'Выберите дату',
            yearPlaceholder: 'Выберите год',
            quarterPlaceholder: 'Выберите квартал',
            monthPlaceholder: 'Выберите месяц',
            weekPlaceholder: 'Выберите неделю',
            rangePlaceholder: ['Начальная дата', 'Конечная дата'],
            rangeYearPlaceholder: ['Начальный год', 'Год окончания'],
            rangeMonthPlaceholder: ['Начальный месяц', 'Конечный месяц'],
            rangeWeekPlaceholder: ['Начальная неделя', 'Конечная неделя'],
            locale: 'ru_RU',
            today: 'Сегодня',
            now: 'Сейчас',
            backToToday: 'Текущая дата',
            ok: 'Ok',
            clear: 'Очистить',
            month: 'Месяц',
            year: 'Год',
            timeSelect: 'Выбрать время',
            dateSelect: 'Выбрать дату',
            monthSelect: 'Выбрать месяц',
            yearSelect: 'Выбрать год',
            decadeSelect: 'Выбрать десятилетие',
            yearFormat: 'YYYY',
            dateFormat: 'D-M-YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D-M-YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Предыдущий месяц (PageUp)',
            nextMonth: 'Следующий месяц (PageDown)',
            previousYear: 'Предыдущий год (Control + left)',
            nextYear: 'Следующий год (Control + right)',
            previousDecade: 'Предыдущее десятилетие',
            nextDecade: 'Следущее десятилетие',
            previousCentury: 'Предыдущий век',
            nextCentury: 'Следующий век'
        },
        timePickerLocale: {
            placeholder: 'Выберите время',
            rangePlaceholder: ['Время начала', 'Время окончания']
        }
    },
    global: {
        placeholder: 'Пожалуйста выберите'
    },
    Table: {
        filterTitle: 'Фильтр',
        filterConfirm: 'OK',
        filterReset: 'Сбросить',
        filterEmptyText: 'Без фильтров',
        emptyText: 'Нет данных',
        selectAll: 'Выбрать всё',
        selectInvert: 'Инвертировать выбор',
        selectionAll: 'Выбрать все данные',
        sortTitle: 'Сортировка',
        expand: 'Развернуть строку',
        collapse: 'Свернуть строку',
        triggerDesc: 'Нажмите для сортировки по убыванию',
        triggerAsc: 'Нажмите для сортировки по возрастанию',
        cancelSort: 'Нажмите, чтобы отменить сортировку'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Отмена',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Отмена'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Поиск',
        itemUnit: 'элем.',
        itemsUnit: 'элем.',
        remove: 'Удалить',
        selectAll: 'Выбрать все данные',
        selectCurrent: 'Выбрать текущую страницу',
        selectInvert: 'Показать в обратном порядке',
        removeAll: 'Удалить все данные',
        removeCurrent: 'Удалить текущую страницу'
    },
    Upload: {
        uploading: 'Загрузка...',
        removeFile: 'Удалить файл',
        uploadError: 'При загрузке произошла ошибка',
        previewFile: 'Предпросмотр файла',
        downloadFile: 'Загрузить файл'
    },
    Empty: {
        description: 'Нет данных'
    },
    Icon: {
        icon: 'иконка'
    },
    Text: {
        edit: 'Редактировать',
        copy: 'Копировать',
        copied: 'Скопировано',
        expand: 'Раскрыть'
    },
    PageHeader: {
        back: 'Назад'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var sk_SK = {
    locale: 'sk',
    Pagination: {
        items_per_page: '/ strana',
        jump_to: 'Choď na',
        jump_to_confirm: 'potvrdit',
        page: '',
        prev_page: 'Predchádzajúca strana',
        next_page: 'Nasledujúca strana',
        prev_5: 'Predchádzajúcich 5 strán',
        next_5: 'Nasledujúcich 5 strán',
        prev_3: 'Predchádzajúce 3 strany',
        next_3: 'Nasledujúce 3 strany'
    },
    DatePicker: {
        lang: {
            placeholder: 'Vybrať dátum',
            rangePlaceholder: ['Od', 'Do'],
            locale: 'sk_SK',
            today: 'Dnes',
            now: 'Teraz',
            backToToday: 'Späť na dnes',
            ok: 'Ok',
            clear: 'Vymazať',
            month: 'Mesiac',
            year: 'Rok',
            timeSelect: 'Vybrať čas',
            dateSelect: 'Vybrať dátum',
            monthSelect: 'Vybrať mesiac',
            yearSelect: 'Vybrať rok',
            decadeSelect: 'Vybrať dekádu',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Predchádzajúci mesiac (PageUp)',
            nextMonth: 'Nasledujúci mesiac (PageDown)',
            previousYear: 'Predchádzajúci rok (Control + left)',
            nextYear: 'Nasledujúci rok (Control + right)',
            previousDecade: 'Predchádzajúca dekáda',
            nextDecade: 'Nasledujúca dekáda',
            previousCentury: 'Predchádzajúce storočie',
            nextCentury: 'Nasledujúce storočie'
        },
        timePickerLocale: {
            placeholder: 'Vybrať čas'
        }
    },
    TimePicker: {
        placeholder: 'Vybrať čas'
    },
    Calendar: {
        lang: {
            placeholder: 'Vybrať dátum',
            rangePlaceholder: ['Od', 'Do'],
            locale: 'sk_SK',
            today: 'Dnes',
            now: 'Teraz',
            backToToday: 'Späť na dnes',
            ok: 'Ok',
            clear: 'Vymazať',
            month: 'Mesiac',
            year: 'Rok',
            timeSelect: 'Vybrať čas',
            dateSelect: 'Vybrať dátum',
            monthSelect: 'Vybrať mesiac',
            yearSelect: 'Vybrať rok',
            decadeSelect: 'Vybrať dekádu',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Predchádzajúci mesiac (PageUp)',
            nextMonth: 'Nasledujúci mesiac (PageDown)',
            previousYear: 'Predchádzajúci rok (Control + left)',
            nextYear: 'Nasledujúci rok (Control + right)',
            previousDecade: 'Predchádzajúca dekáda',
            nextDecade: 'Nasledujúca dekáda',
            previousCentury: 'Predchádzajúce storočie',
            nextCentury: 'Nasledujúce storočie'
        },
        timePickerLocale: {
            placeholder: 'Vybrať čas'
        }
    },
    global: {
        placeholder: 'Prosím vyberte'
    },
    Table: {
        filterTitle: 'Filter',
        filterConfirm: 'OK',
        filterReset: 'Obnoviť',
        selectAll: 'Vybrať všetko',
        selectInvert: 'Vybrať opačné',
        sortTitle: 'Zoradiť',
        expand: 'Rozbaliť riadok',
        collapse: 'Zbaliť riadok'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Zrušiť',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Zrušiť'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Vyhľadávanie',
        itemUnit: 'položka',
        itemsUnit: 'položiek'
    },
    Upload: {
        uploading: 'Nahrávanie...',
        removeFile: 'Odstrániť súbor',
        uploadError: 'Chyba pri nahrávaní',
        previewFile: 'Zobraziť súbor',
        downloadFile: 'Stiahnuť súbor'
    },
    Empty: {
        description: 'Žiadne dáta'
    },
    Icon: {
        icon: 'ikona'
    },
    Text: {
        edit: 'Upraviť',
        copy: 'Kopírovať',
        copied: 'Skopírované',
        expand: 'Zväčšiť'
    },
    PageHeader: {
        back: 'Späť'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var sl_SI = {
    locale: 'sl',
    Pagination: {
        items_per_page: '/ strani',
        jump_to: 'Pojdi na',
        jump_to_confirm: 'potrdi',
        page: '',
        prev_page: 'Prejšnja stran',
        next_page: 'Naslednja stran',
        prev_5: 'Prejšnjih 5 strani',
        next_5: 'Naslednjih 5 strani',
        prev_3: 'Prejšnje 3 strani',
        next_3: 'Naslednje 3 strani'
    },
    DatePicker: {
        lang: {
            locale: 'sl',
            placeholder: 'Izberite datum',
            rangePlaceholder: ['Začetni datum', 'Končni datum'],
            today: 'Danes',
            now: 'Trenutno',
            backToToday: 'Nazaj na trenutni datum',
            ok: 'Ok',
            clear: 'Počisti',
            month: 'Mesec',
            year: 'Leto',
            timeSelect: 'Izberi čas',
            dateSelect: 'Izberi datum',
            monthSelect: 'Izberite mesec',
            yearSelect: 'Izberite leto',
            decadeSelect: 'Izberite desetletje',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthFormat: 'MMMM',
            monthBeforeYear: true,
            previousMonth: 'Prejšnji mesec (PageUp)',
            nextMonth: 'Naslednji mesec (PageDown)',
            previousYear: 'Lansko leto (Control + left)',
            nextYear: 'Naslednje leto (Control + right)',
            previousDecade: 'Prejšnje desetletje',
            nextDecade: 'Naslednje desetletje',
            previousCentury: 'Zadnje stoletje',
            nextCentury: 'Naslednje stoletje'
        },
        timePickerLocale: {
            placeholder: 'Izberite čas'
        }
    },
    TimePicker: {
        placeholder: 'Izberite čas'
    },
    Calendar: {
        lang: {
            locale: 'sl',
            placeholder: 'Izberite datum',
            rangePlaceholder: ['Začetni datum', 'Končni datum'],
            today: 'Danes',
            now: 'Trenutno',
            backToToday: 'Nazaj na trenutni datum',
            ok: 'Ok',
            clear: 'Počisti',
            month: 'Mesec',
            year: 'Leto',
            timeSelect: 'Izberi čas',
            dateSelect: 'Izberi datum',
            monthSelect: 'Izberite mesec',
            yearSelect: 'Izberite leto',
            decadeSelect: 'Izberite desetletje',
            yearFormat: 'YYYY',
            dateFormat: 'D.M.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D.M.YYYY HH:mm:ss',
            monthFormat: 'MMMM',
            monthBeforeYear: true,
            previousMonth: 'Prejšnji mesec (PageUp)',
            nextMonth: 'Naslednji mesec (PageDown)',
            previousYear: 'Lansko leto (Control + left)',
            nextYear: 'Naslednje leto (Control + right)',
            previousDecade: 'Prejšnje desetletje',
            nextDecade: 'Naslednje desetletje',
            previousCentury: 'Zadnje stoletje',
            nextCentury: 'Naslednje stoletje'
        },
        timePickerLocale: {
            placeholder: 'Izberite čas'
        }
    },
    Table: {
        filterTitle: 'Filter',
        filterConfirm: 'Filtriraj',
        filterReset: 'Pobriši filter',
        selectAll: 'Izberi vse na trenutni strani',
        selectInvert: 'Obrni izbor na trenutni strani'
    },
    Modal: {
        okText: 'V redu',
        cancelText: 'Prekliči',
        justOkText: 'V redu'
    },
    Popconfirm: {
        okText: 'v redu',
        cancelText: 'Prekliči'
    },
    Transfer: {
        searchPlaceholder: 'Išči tukaj',
        itemUnit: 'Objekt',
        itemsUnit: 'Objektov'
    },
    Upload: {
        uploading: 'Nalaganje...',
        removeFile: 'Odstrani datoteko',
        uploadError: 'Napaka pri nalaganju',
        previewFile: 'Predogled datoteke',
        downloadFile: 'Prenos datoteke'
    },
    Empty: {
        description: 'Ni podatkov'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var sr_RS = {
    locale: 'sr',
    Pagination: {
        items_per_page: '/ strani',
        jump_to: 'Idi na',
        page: '',
        prev_page: 'Prethodna strana',
        next_page: 'Sledeća strana',
        prev_5: 'Prethodnih 5 Strana',
        next_5: 'Sledećih 5 Strana',
        prev_3: 'Prethodnih 3 Strane',
        next_3: 'Sledećih 3 Strane'
    },
    DatePicker: {
        lang: {
            placeholder: 'Izaberite datum',
            rangePlaceholder: ['Početni datum', 'Krajnji datum'],
            locale: 'sr_RS',
            today: 'Danas',
            now: 'Sada',
            backToToday: 'Vrati se na danas',
            ok: 'U redu',
            clear: 'Obriši',
            month: 'Mesec',
            year: 'Godina',
            timeSelect: 'Izaberi vreme',
            dateSelect: 'Izaberi datum',
            monthSelect: 'Izaberi mesec',
            yearSelect: 'Izaberi godinu',
            decadeSelect: 'Izaberi deceniju',
            yearFormat: 'YYYY',
            dateFormat: 'DD.MM.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Prethodni mesec (PageUp)',
            nextMonth: 'Sledeći mesec (PageDown)',
            previousYear: 'Prethodna godina (Control + left)',
            nextYear: 'Sledeća godina (Control + right)',
            previousDecade: 'Prethodna decenija',
            nextDecade: 'Sledeća decenija',
            previousCentury: 'Prethodni vek',
            nextCentury: 'Sledeći vek'
        },
        timePickerLocale: {
            placeholder: 'Izaberite vreme'
        }
    },
    TimePicker: {
        placeholder: 'Izaberite vreme'
    },
    Calendar: {
        lang: {
            placeholder: 'Izaberite datum',
            rangePlaceholder: ['Početni datum', 'Krajnji datum'],
            locale: 'sr_RS',
            today: 'Danas',
            now: 'Sada',
            backToToday: 'Vrati se na danas',
            ok: 'U redu',
            clear: 'Obriši',
            month: 'Mesec',
            year: 'Godina',
            timeSelect: 'Izaberi vreme',
            dateSelect: 'Izaberi datum',
            monthSelect: 'Izaberi mesec',
            yearSelect: 'Izaberi godinu',
            decadeSelect: 'Izaberi deceniju',
            yearFormat: 'YYYY',
            dateFormat: 'DD.MM.YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Prethodni mesec (PageUp)',
            nextMonth: 'Sledeći mesec (PageDown)',
            previousYear: 'Prethodna godina (Control + left)',
            nextYear: 'Sledeća godina (Control + right)',
            previousDecade: 'Prethodna decenija',
            nextDecade: 'Sledeća decenija',
            previousCentury: 'Prethodni vek',
            nextCentury: 'Sledeći vek'
        },
        timePickerLocale: {
            placeholder: 'Izaberite vreme'
        }
    },
    Table: {
        filterTitle: 'Filter',
        filterConfirm: 'Primeni filter',
        filterReset: 'Resetuj filter',
        selectAll: 'Obeleži sve na trenutnoj strani',
        selectInvert: 'Obrni selekciju na trenutnoj stranici'
    },
    Modal: {
        okText: 'U redu',
        cancelText: 'Otkaži',
        justOkText: 'U redu'
    },
    Popconfirm: {
        okText: 'U redu',
        cancelText: 'Otkaži'
    },
    Transfer: {
        searchPlaceholder: 'Pretražite ovde',
        itemUnit: 'stavka',
        itemsUnit: 'stavki'
    },
    Upload: {
        uploading: 'Slanje...',
        removeFile: 'Ukloni fajl',
        uploadError: 'Greška prilikom slanja',
        previewFile: 'Pogledaj fajl',
        downloadFile: 'Preuzmi datoteku'
    },
    Empty: {
        description: 'Nema podataka'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var sv_SE = {
    locale: 'sv',
    Pagination: {
        items_per_page: '/ sida',
        jump_to: 'Gå till',
        jump_to_confirm: 'bekräfta',
        page: '',
        prev_page: 'Föreg sida',
        next_page: 'Nästa sida',
        prev_5: 'Föreg 5 sidor',
        next_5: 'Nästa 5 sidor',
        prev_3: 'Föreg 3 sidor',
        next_3: 'Nästa 3 sidor'
    },
    DatePicker: {
        lang: {
            placeholder: 'Välj datum',
            rangePlaceholder: ['Startdatum', 'Slutdatum'],
            locale: 'sv_SE',
            today: 'I dag',
            now: 'Nu',
            backToToday: 'Till idag',
            ok: 'Ok',
            clear: 'Avbryt',
            month: 'Månad',
            year: 'År',
            timeSelect: 'Välj tidpunkt',
            dateSelect: 'Välj datum',
            monthSelect: 'Välj månad',
            yearSelect: 'Välj år',
            decadeSelect: 'Välj årtionde',
            yearFormat: 'YYYY',
            dateFormat: 'YYYY-MM-DD',
            dayFormat: 'D',
            dateTimeFormat: 'YYYY-MM-DD H:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Förra månaden (PageUp)',
            nextMonth: 'Nästa månad (PageDown)',
            previousYear: 'Föreg år (Control + left)',
            nextYear: 'Nästa år (Control + right)',
            previousDecade: 'Föreg årtionde',
            nextDecade: 'Nästa årtionde',
            previousCentury: 'Föreg århundrade',
            nextCentury: 'Nästa århundrade'
        },
        timePickerLocale: {
            placeholder: 'Välj tid'
        }
    },
    TimePicker: {
        placeholder: 'Välj tid'
    },
    Calendar: {
        lang: {
            placeholder: 'Välj datum',
            rangePlaceholder: ['Startdatum', 'Slutdatum'],
            locale: 'sv_SE',
            today: 'I dag',
            now: 'Nu',
            backToToday: 'Till idag',
            ok: 'Ok',
            clear: 'Avbryt',
            month: 'Månad',
            year: 'År',
            timeSelect: 'Välj tidpunkt',
            dateSelect: 'Välj datum',
            monthSelect: 'Välj månad',
            yearSelect: 'Välj år',
            decadeSelect: 'Välj årtionde',
            yearFormat: 'YYYY',
            dateFormat: 'YYYY-MM-DD',
            dayFormat: 'D',
            dateTimeFormat: 'YYYY-MM-DD H:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Förra månaden (PageUp)',
            nextMonth: 'Nästa månad (PageDown)',
            previousYear: 'Föreg år (Control + left)',
            nextYear: 'Nästa år (Control + right)',
            previousDecade: 'Föreg årtionde',
            nextDecade: 'Nästa årtionde',
            previousCentury: 'Föreg århundrade',
            nextCentury: 'Nästa århundrade'
        },
        timePickerLocale: {
            placeholder: 'Välj tid'
        }
    },
    Table: {
        filterTitle: 'Filtermeny',
        filterConfirm: 'OK',
        filterReset: 'Rensa'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Avbryt',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Avbryt'
    },
    Transfer: {
        searchPlaceholder: 'Sök',
        itemUnit: 'objekt',
        itemsUnit: 'objekt'
    },
    Empty: {
        description: 'Ingen information'
    },
    Text: {
        edit: 'editera',
        copy: 'kopiera',
        copied: 'kopierad',
        expand: 'expandera'
    },
    Upload: {
        uploading: 'Uppladdning...',
        removeFile: 'Ta bort fil',
        uploadError: 'Uppladdningsfel',
        previewFile: 'Förhandsgranska filen',
        downloadFile: 'Nedladdning fil'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var ta_IN = {
    locale: 'ta',
    Pagination: {
        items_per_page: '/ பக்கம்',
        jump_to: 'அடுத்த',
        jump_to_confirm: 'உறுதிப்படுத்தவும்',
        page: '',
        prev_page: 'முந்தைய பக்கம்',
        next_page: 'அடுத்த பக்கம்',
        prev_5: 'முந்தைய 5 பக்கங்கள்',
        next_5: 'அடுத்த 5 பக்கங்கள்',
        prev_3: 'முந்தைய 3 பக்கங்கள்',
        next_3: 'அடுத்த 3 பக்கங்கள்'
    },
    DatePicker: {
        lang: {
            placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்',
            rangePlaceholder: ['தொடக்க தேதி', 'கடைசி தேதி'],
            locale: 'ta_IN',
            today: 'இன்று',
            now: 'இப்போது',
            backToToday: 'இன்றுக்கு திரும்பு',
            ok: 'சரி',
            clear: 'அழி',
            month: 'மாதம்',
            year: 'வருடம்',
            timeSelect: 'நேரத்தைத் தேர்ந்தெடு',
            dateSelect: 'தேதியைத் தேர்ந்தெடு',
            weekSelect: 'வாரத்தைத் தேர்வுசெய்க',
            monthSelect: 'மாதத்தைத் தேர்வுசெய்க',
            yearSelect: 'வருடத்தைத் தேர்வுசெய்க',
            decadeSelect: 'தசாப்தத்தைத் தேர்வுசெய்க',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'முந்தைய மாதம் (PageUp)',
            nextMonth: 'அடுத்த மாதம் (PageDown)',
            previousYear: 'முந்தைய வருடம் (Control + left)',
            nextYear: 'அடுத்த வருடம் (Control + right)',
            previousDecade: 'முந்தைய தசாப்தம்',
            nextDecade: 'அடுத்த தசாப்தம்',
            previousCentury: 'முந்தைய நூற்றாண்டு',
            nextCentury: 'அடுத்த நூற்றாண்டு'
        },
        timePickerLocale: {
            placeholder: 'நேரத்தைத் தேர்ந்தெடுக்கவும்'
        }
    },
    TimePicker: {
        placeholder: 'நேரத்தைத் தேர்ந்தெடுக்கவும்'
    },
    Calendar: {
        lang: {
            placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்',
            rangePlaceholder: ['தொடக்க தேதி', 'கடைசி தேதி'],
            locale: 'ta_IN',
            today: 'இன்று',
            now: 'இப்போது',
            backToToday: 'இன்றுக்கு திரும்பு',
            ok: 'சரி',
            clear: 'அழி',
            month: 'மாதம்',
            year: 'வருடம்',
            timeSelect: 'நேரத்தைத் தேர்ந்தெடு',
            dateSelect: 'தேதியைத் தேர்ந்தெடு',
            weekSelect: 'வாரத்தைத் தேர்வுசெய்க',
            monthSelect: 'மாதத்தைத் தேர்வுசெய்க',
            yearSelect: 'வருடத்தைத் தேர்வுசெய்க',
            decadeSelect: 'தசாப்தத்தைத் தேர்வுசெய்க',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'முந்தைய மாதம் (PageUp)',
            nextMonth: 'அடுத்த மாதம் (PageDown)',
            previousYear: 'முந்தைய வருடம் (Control + left)',
            nextYear: 'அடுத்த வருடம் (Control + right)',
            previousDecade: 'முந்தைய தசாப்தம்',
            nextDecade: 'அடுத்த தசாப்தம்',
            previousCentury: 'முந்தைய நூற்றாண்டு',
            nextCentury: 'அடுத்த நூற்றாண்டு'
        },
        timePickerLocale: {
            placeholder: 'நேரத்தைத் தேர்ந்தெடுக்கவும்'
        }
    },
    global: {
        placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்'
    },
    Table: {
        filterTitle: 'பட்டியலை மூடு',
        filterConfirm: 'சரி',
        filterReset: 'மீட்டமை',
        emptyText: 'தகவல் இல்லை',
        selectAll: 'அனைத்தையும் தேர்வுசெய்',
        selectInvert: 'தலைகீழாக மாற்று',
        sortTitle: 'தலைப்பை வரிசைப்படுத்தவும்'
    },
    Modal: {
        okText: 'சரி',
        cancelText: 'ரத்து செய்யவும்',
        justOkText: 'பரவாயில்லை, சரி'
    },
    Popconfirm: {
        okText: 'சரி',
        cancelText: 'ரத்து செய்யவும்'
    },
    Transfer: {
        titles: ['', ''],
        notFoundContent: 'உள்ளடக்கம் கிடைக்கவில்லை',
        searchPlaceholder: 'இங்கு தேடவும்',
        itemUnit: 'தகவல்',
        itemsUnit: 'தகவல்கள்'
    },
    Upload: {
        uploading: 'பதிவேற்றுகிறது...',
        removeFile: 'கோப்பை அகற்று',
        uploadError: 'பதிவேற்றுவதில் பிழை',
        previewFile: 'கோப்பை முன்னோட்டமிடுங்கள்',
        downloadFile: 'பதிவிறக்க கோப்பு'
    },
    Empty: {
        description: 'தகவல் இல்லை'
    },
    Icon: {
        icon: 'உருவம்'
    },
    Text: {
        edit: 'திருத்து',
        copy: 'நகல் எடு',
        copied: 'நகல் எடுக்கப்பட்டது',
        expand: 'விரிவாக்கவும்'
    },
    PageHeader: {
        back: 'பின் செல்லவும்'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var th_TH = {
    locale: 'th',
    Pagination: {
        items_per_page: '/ หน้า',
        jump_to: 'ไปยัง',
        jump_to_confirm: 'ยืนยัน',
        page: '',
        prev_page: 'หน้าก่อนหน้า',
        next_page: 'หน้าถัดไป',
        prev_5: 'ย้อนกลับ 5 หน้า',
        next_5: 'ถัดไป 5 หน้า',
        prev_3: 'ย้อนกลับ 3 หน้า',
        next_3: 'ถัดไป 3 หน้า'
    },
    DatePicker: {
        lang: {
            placeholder: 'เลือกวันที่',
            yearPlaceholder: 'เลือกปี',
            quarterPlaceholder: 'เลือกไตรมาส',
            monthPlaceholder: 'เลือกเดือน',
            weekPlaceholder: 'เลือกสัปดาห์',
            rangePlaceholder: ['วันเริ่มต้น', 'วันสิ้นสุด'],
            rangeYearPlaceholder: ['ปีเริ่มต้น', 'ปีสิ้นสุด'],
            rangeMonthPlaceholder: ['เดือนเริ่มต้น', 'เดือนสิ้นสุด'],
            rangeWeekPlaceholder: ['สัปดาห์เริ่มต้น', 'สัปดาห์สิ้นสุด'],
            locale: 'th_TH',
            today: 'วันนี้',
            now: 'ตอนนี้',
            backToToday: 'กลับไปยังวันนี้',
            ok: 'ตกลง',
            clear: 'ลบล้าง',
            month: 'เดือน',
            year: 'ปี',
            timeSelect: 'เลือกเวลา',
            dateSelect: 'เลือกวัน',
            monthSelect: 'เลือกเดือน',
            yearSelect: 'เลือกปี',
            decadeSelect: 'เลือกทศวรรษ',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'เดือนก่อนหน้า (PageUp)',
            nextMonth: 'เดือนถัดไป (PageDown)',
            previousYear: 'ปีก่อนหน้า (Control + left)',
            nextYear: 'ปีถัดไป (Control + right)',
            previousDecade: 'ทศวรรษก่อนหน้า',
            nextDecade: 'ทศวรรษถัดไป',
            previousCentury: 'ศตวรรษก่อนหน้า',
            nextCentury: 'ศตวรรษถัดไป'
        },
        timePickerLocale: {
            placeholder: 'เลือกเวลา'
        }
    },
    TimePicker: {
        placeholder: 'เลือกเวลา'
    },
    Calendar: {
        lang: {
            placeholder: 'เลือกวันที่',
            yearPlaceholder: 'เลือกปี',
            quarterPlaceholder: 'เลือกไตรมาส',
            monthPlaceholder: 'เลือกเดือน',
            weekPlaceholder: 'เลือกสัปดาห์',
            rangePlaceholder: ['วันเริ่มต้น', 'วันสิ้นสุด'],
            rangeYearPlaceholder: ['ปีเริ่มต้น', 'ปีสิ้นสุด'],
            rangeMonthPlaceholder: ['เดือนเริ่มต้น', 'เดือนสิ้นสุด'],
            rangeWeekPlaceholder: ['สัปดาห์เริ่มต้น', 'สัปดาห์สิ้นสุด'],
            locale: 'th_TH',
            today: 'วันนี้',
            now: 'ตอนนี้',
            backToToday: 'กลับไปยังวันนี้',
            ok: 'ตกลง',
            clear: 'ลบล้าง',
            month: 'เดือน',
            year: 'ปี',
            timeSelect: 'เลือกเวลา',
            dateSelect: 'เลือกวัน',
            monthSelect: 'เลือกเดือน',
            yearSelect: 'เลือกปี',
            decadeSelect: 'เลือกทศวรรษ',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'เดือนก่อนหน้า (PageUp)',
            nextMonth: 'เดือนถัดไป (PageDown)',
            previousYear: 'ปีก่อนหน้า (Control + left)',
            nextYear: 'ปีถัดไป (Control + right)',
            previousDecade: 'ทศวรรษก่อนหน้า',
            nextDecade: 'ทศวรรษถัดไป',
            previousCentury: 'ศตวรรษก่อนหน้า',
            nextCentury: 'ศตวรรษถัดไป'
        },
        timePickerLocale: {
            placeholder: 'เลือกเวลา'
        }
    },
    global: {
        placeholder: 'กรุณาเลือก'
    },
    Table: {
        filterTitle: 'ตัวกรอง',
        filterConfirm: 'ยืนยัน',
        filterReset: 'รีเซ็ต',
        filterEmptyText: 'ไม่มีตัวกรอง',
        emptyText: 'ไม่มีข้อมูล',
        selectAll: 'เลือกทั้งหมดในหน้านี้',
        selectInvert: 'กลับสถานะการเลือกในหน้านี้',
        selectionAll: 'เลือกข้อมูลทั้งหมด',
        sortTitle: 'เรียง',
        expand: 'แสดงแถวข้อมูล',
        collapse: 'ย่อแถวข้อมูล',
        triggerDesc: 'คลิกเรียงจากมากไปน้อย',
        triggerAsc: 'คลิกเรียงจากน้อยไปมาก',
        cancelSort: 'คลิกเพื่อยกเลิกการเรียง'
    },
    Modal: {
        okText: 'ตกลง',
        cancelText: 'ยกเลิก',
        justOkText: 'ตกลง'
    },
    Popconfirm: {
        okText: 'ตกลง',
        cancelText: 'ยกเลิก'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'ค้นหา',
        itemUnit: 'ชิ้น',
        itemsUnit: 'ชิ้น',
        remove: 'นำออก',
        selectCurrent: 'เลือกทั้งหมดในหน้านี้',
        removeCurrent: 'นำออกทั้งหมดในหน้านี้',
        selectAll: 'เลือกข้อมูลทั้งหมด',
        removeAll: 'นำข้อมูลออกทั้งหมด',
        selectInvert: 'กลับสถานะการเลือกในหน้านี้'
    },
    Upload: {
        uploading: 'กำลังอัปโหลด...',
        removeFile: 'ลบไฟล์',
        uploadError: 'เกิดข้อผิดพลาดในการอัปโหลด',
        previewFile: 'ดูตัวอย่างไฟล์',
        downloadFile: 'ดาวน์โหลดไฟล์'
    },
    Empty: {
        description: 'ไม่มีข้อมูล'
    },
    Icon: {
        icon: 'ไอคอน'
    },
    Text: {
        edit: 'แก้ไข',
        copy: 'คัดลอก',
        copied: 'คัดลอกแล้ว',
        expand: 'ขยาย'
    },
    PageHeader: {
        back: 'ย้อนกลับ'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var tr_TR = {
    locale: 'tr',
    Pagination: {
        items_per_page: '/ sayfa',
        jump_to: 'Git',
        jump_to_confirm: 'onayla',
        page: '',
        prev_page: 'Önceki Sayfa',
        next_page: 'Sonraki Sayfa',
        prev_5: 'Önceki 5 Sayfa',
        next_5: 'Sonraki 5 Sayfa',
        prev_3: 'Önceki 3 Sayfa',
        next_3: 'Sonraki 3 Sayfa'
    },
    DatePicker: {
        lang: {
            placeholder: 'Tarih seç',
            yearPlaceholder: 'Yıl seç',
            quarterPlaceholder: 'Çeyrek seç',
            monthPlaceholder: 'Ay seç',
            weekPlaceholder: 'Hafta seç',
            rangePlaceholder: ['Başlangıç tarihi', 'Bitiş tarihi'],
            rangeYearPlaceholder: ['Başlangıç yılı', 'Bitiş yılı'],
            rangeMonthPlaceholder: ['Başlangıç ayı', 'Bitiş ayı'],
            rangeWeekPlaceholder: ['Başlangıç haftası', 'Bitiş haftası'],
            locale: 'tr_TR',
            today: 'Bugün',
            now: 'Şimdi',
            backToToday: 'Bugüne Geri Dön',
            ok: 'tamam',
            clear: 'Temizle',
            month: 'Ay',
            year: 'Yıl',
            timeSelect: 'Zaman Seç',
            dateSelect: 'Tarih Seç',
            monthSelect: 'Ay Seç',
            yearSelect: 'Yıl Seç',
            decadeSelect: 'On Yıl Seç',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Önceki Ay (PageUp)',
            nextMonth: 'Sonraki Ay (PageDown)',
            previousYear: 'Önceki Yıl (Control + Sol)',
            nextYear: 'Sonraki Yıl (Control + Sağ)',
            previousDecade: 'Önceki On Yıl',
            nextDecade: 'Sonraki On Yıl',
            previousCentury: 'Önceki Yüzyıl',
            nextCentury: 'Sonraki Yüzyıl'
        },
        timePickerLocale: {
            placeholder: 'Zaman seç',
            rangePlaceholder: ['Başlangıç zamanı', 'Bitiş zamanı']
        }
    },
    TimePicker: {
        placeholder: 'Zaman seç',
        rangePlaceholder: ['Başlangıç zamanı', 'Bitiş zamanı']
    },
    Calendar: {
        lang: {
            placeholder: 'Tarih seç',
            yearPlaceholder: 'Yıl seç',
            quarterPlaceholder: 'Çeyrek seç',
            monthPlaceholder: 'Ay seç',
            weekPlaceholder: 'Hafta seç',
            rangePlaceholder: ['Başlangıç tarihi', 'Bitiş tarihi'],
            rangeYearPlaceholder: ['Başlangıç yılı', 'Bitiş yılı'],
            rangeMonthPlaceholder: ['Başlangıç ayı', 'Bitiş ayı'],
            rangeWeekPlaceholder: ['Başlangıç haftası', 'Bitiş haftası'],
            locale: 'tr_TR',
            today: 'Bugün',
            now: 'Şimdi',
            backToToday: 'Bugüne Geri Dön',
            ok: 'tamam',
            clear: 'Temizle',
            month: 'Ay',
            year: 'Yıl',
            timeSelect: 'Zaman Seç',
            dateSelect: 'Tarih Seç',
            monthSelect: 'Ay Seç',
            yearSelect: 'Yıl Seç',
            decadeSelect: 'On Yıl Seç',
            yearFormat: 'YYYY',
            dateFormat: 'M/D/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'M/D/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Önceki Ay (PageUp)',
            nextMonth: 'Sonraki Ay (PageDown)',
            previousYear: 'Önceki Yıl (Control + Sol)',
            nextYear: 'Sonraki Yıl (Control + Sağ)',
            previousDecade: 'Önceki On Yıl',
            nextDecade: 'Sonraki On Yıl',
            previousCentury: 'Önceki Yüzyıl',
            nextCentury: 'Sonraki Yüzyıl'
        },
        timePickerLocale: {
            placeholder: 'Zaman seç',
            rangePlaceholder: ['Başlangıç zamanı', 'Bitiş zamanı']
        }
    },
    global: {
        placeholder: 'Lütfen seçiniz'
    },
    Table: {
        filterTitle: 'Filtre menüsü',
        filterConfirm: 'Tamam',
        filterReset: 'Sıfırla',
        filterEmptyText: 'Filtre yok',
        selectAll: 'Tüm sayfayı seç',
        selectInvert: 'Tersini seç',
        selectionAll: 'Tümünü seç',
        sortTitle: 'Sırala',
        expand: 'Satırı genişlet',
        collapse: 'Satırı daralt',
        triggerDesc: 'Azalan düzende sırala',
        triggerAsc: 'Artan düzende sırala',
        cancelSort: 'Sıralamayı kaldır'
    },
    Modal: {
        okText: 'Tamam',
        cancelText: 'İptal',
        justOkText: 'Tamam'
    },
    Popconfirm: {
        okText: 'Tamam',
        cancelText: 'İptal'
    },
    Transfer: {
        titles: ['', ''],
        searchPlaceholder: 'Arama',
        itemUnit: 'Öğe',
        itemsUnit: 'Öğeler',
        remove: 'Kaldır',
        selectCurrent: 'Tüm sayfayı seç',
        removeCurrent: 'Sayfayı kaldır',
        selectAll: 'Tümünü seç',
        removeAll: 'Tümünü kaldır',
        selectInvert: 'Tersini seç'
    },
    Upload: {
        uploading: 'Yükleniyor...',
        removeFile: 'Dosyayı kaldır',
        uploadError: 'Yükleme hatası',
        previewFile: 'Dosyayı önizle',
        downloadFile: 'Dosyayı indir'
    },
    Empty: {
        description: 'Veri Yok'
    },
    Icon: {
        icon: 'ikon'
    },
    Text: {
        edit: 'Düzenle',
        copy: 'Kopyala',
        copied: 'Kopyalandı',
        expand: 'Genişlet'
    },
    PageHeader: {
        back: 'Geri'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var uk_UA = {
    locale: 'uk',
    Pagination: {
        items_per_page: '/ сторінці',
        jump_to: 'Перейти',
        jump_to_confirm: 'підтвердити',
        page: '',
        prev_page: 'Попередня сторінка',
        next_page: 'Наступна сторінка',
        prev_5: 'Попередні 5 сторінок',
        next_5: 'Наступні 5 сторінок',
        prev_3: 'Попередні 3 сторінки',
        next_3: 'Наступні 3 сторінки'
    },
    DatePicker: {
        lang: {
            placeholder: 'Оберіть дату',
            yearPlaceholder: 'Оберіть рік',
            quarterPlaceholder: 'Оберіть квартал',
            monthPlaceholder: 'Оберіть місяць',
            weekPlaceholder: 'Оберіть тиждень',
            rangePlaceholder: ['Початкова дата', 'Кінцева дата'],
            rangeYearPlaceholder: ['Початковий рік', 'Рік закінчення'],
            rangeMonthPlaceholder: ['Початковий місяць', 'Кінцевий місяць'],
            rangeWeekPlaceholder: ['Початковий тиждень', 'Кінцевий тиждень'],
            locale: 'uk_UA',
            today: 'Сьогодні',
            now: 'Зараз',
            backToToday: 'Поточна дата',
            ok: 'Ok',
            clear: 'Очистити',
            month: 'Місяць',
            year: 'Рік',
            timeSelect: 'Обрати час',
            dateSelect: 'Обрати дату',
            monthSelect: 'Обрати місяць',
            yearSelect: 'Обрати рік',
            decadeSelect: 'Обрати десятиріччя',
            yearFormat: 'YYYY',
            dateFormat: 'D-M-YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D-M-YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Попередній місяць (PageUp)',
            nextMonth: 'Наступний місяць (PageDown)',
            previousYear: 'Попередній рік (Control + left)',
            nextYear: 'Наступний рік (Control + right)',
            previousDecade: 'Попереднє десятиріччя',
            nextDecade: 'Наступне десятиріччя',
            previousCentury: 'Попереднє століття',
            nextCentury: 'Наступне століття'
        },
        timePickerLocale: {
            placeholder: 'Оберіть час',
            rangePlaceholder: ['Час початку', 'Час закінчення']
        }
    },
    TimePicker: {
        placeholder: 'Оберіть час',
        rangePlaceholder: ['Час початку', 'Час закінчення']
    },
    Calendar: {
        lang: {
            placeholder: 'Оберіть дату',
            rangePlaceholder: ['Початкова дата', 'Кінцева дата'],
            locale: 'uk_UA',
            today: 'Сьогодні',
            now: 'Зараз',
            backToToday: 'Поточна дата',
            ok: 'Ok',
            clear: 'Очистити',
            month: 'Місяць',
            year: 'Рік',
            timeSelect: 'Обрати час',
            dateSelect: 'Обрати дату',
            monthSelect: 'Обрати місяць',
            yearSelect: 'Обрати рік',
            decadeSelect: 'Обрати десятиріччя',
            yearFormat: 'YYYY',
            dateFormat: 'D-M-YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D-M-YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Попередній місяць (PageUp)',
            nextMonth: 'Наступний місяць (PageDown)',
            previousYear: 'Попередній рік (Control + left)',
            nextYear: 'Наступний рік (Control + right)',
            previousDecade: 'Попереднє десятиріччя',
            nextDecade: 'Наступне десятиріччя',
            previousCentury: 'Попереднє століття',
            nextCentury: 'Наступне століття'
        },
        timePickerLocale: {
            placeholder: 'Оберіть час'
        }
    },
    Table: {
        filterTitle: 'Фільтрувати',
        filterConfirm: 'OK',
        filterReset: 'Скинути',
        selectAll: 'Обрати всі',
        selectInvert: 'Інвертувати вибір'
    },
    Modal: {
        okText: 'Гаразд',
        cancelText: 'Скасувати',
        justOkText: 'Гаразд'
    },
    Popconfirm: {
        okText: 'Гаразд',
        cancelText: 'Скасувати'
    },
    Transfer: {
        searchPlaceholder: 'Введіть текст для пошуку',
        itemUnit: 'елем.',
        itemsUnit: 'елем.'
    },
    Upload: {
        uploading: 'Завантаження ...',
        removeFile: 'Видалити файл',
        uploadError: 'Помилка завантаження',
        previewFile: 'Попередній перегляд файлу',
        downloadFile: 'Завантажити файл'
    },
    Empty: {
        description: 'Даних немає'
    },
    Icon: {
        icon: 'іконка'
    },
    Text: {
        edit: 'Редагувати',
        copy: 'Копіювати',
        copied: 'Скопійовано',
        expand: 'Розгорнути'
    },
    PageHeader: {
        back: 'Назад'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var vi_VN = {
    locale: 'vi',
    Pagination: {
        items_per_page: '/ trang',
        jump_to: 'Đến',
        jump_to_confirm: 'xác nhận',
        page: '',
        prev_page: 'Trang Trước',
        next_page: 'Trang Kế',
        prev_5: 'Về 5 Trang Trước',
        next_5: 'Đến 5 Trang Kế',
        prev_3: 'Về 3 Trang Trước',
        next_3: 'Đến 3 Trang Kế'
    },
    DatePicker: {
        lang: {
            placeholder: 'Chọn thời điểm',
            rangePlaceholder: ['Ngày bắt đầu', 'Ngày kết thúc'],
            locale: 'vi_VN',
            today: 'Hôm nay',
            now: 'Bây giờ',
            backToToday: 'Trở về hôm nay',
            ok: 'Ok',
            clear: 'Xóa',
            month: 'Tháng',
            year: 'Năm',
            timeSelect: 'Chọn thời gian',
            dateSelect: 'Chọn ngày',
            weekSelect: 'Chọn tuần',
            monthSelect: 'Chọn tháng',
            yearSelect: 'Chọn năm',
            decadeSelect: 'Chọn thập kỷ',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Tháng trước (PageUp)',
            nextMonth: 'Tháng sau (PageDown)',
            previousYear: 'Năm trước (Control + left)',
            nextYear: 'Năm sau (Control + right)',
            previousDecade: 'Thập kỷ trước',
            nextDecade: 'Thập kỷ sau',
            previousCentury: 'Thế kỷ trước',
            nextCentury: 'Thế kỷ sau'
        },
        timePickerLocale: {
            placeholder: 'Chọn thời gian'
        }
    },
    TimePicker: {
        placeholder: 'Chọn thời gian'
    },
    Calendar: {
        lang: {
            placeholder: 'Chọn thời điểm',
            rangePlaceholder: ['Ngày bắt đầu', 'Ngày kết thúc'],
            locale: 'vi_VN',
            today: 'Hôm nay',
            now: 'Bây giờ',
            backToToday: 'Trở về hôm nay',
            ok: 'Ok',
            clear: 'Xóa',
            month: 'Tháng',
            year: 'Năm',
            timeSelect: 'Chọn thời gian',
            dateSelect: 'Chọn ngày',
            weekSelect: 'Chọn tuần',
            monthSelect: 'Chọn tháng',
            yearSelect: 'Chọn năm',
            decadeSelect: 'Chọn thập kỷ',
            yearFormat: 'YYYY',
            dateFormat: 'D/M/YYYY',
            dayFormat: 'D',
            dateTimeFormat: 'D/M/YYYY HH:mm:ss',
            monthBeforeYear: true,
            previousMonth: 'Tháng trước (PageUp)',
            nextMonth: 'Tháng sau (PageDown)',
            previousYear: 'Năm trước (Control + left)',
            nextYear: 'Năm sau (Control + right)',
            previousDecade: 'Thập kỷ trước',
            nextDecade: 'Thập kỷ sau',
            previousCentury: 'Thế kỷ trước',
            nextCentury: 'Thế kỷ sau'
        },
        timePickerLocale: {
            placeholder: 'Chọn thời gian'
        }
    },
    Table: {
        filterTitle: 'Bộ ',
        filterConfirm: 'OK',
        filterReset: 'Tạo Lại',
        selectAll: 'Chọn Tất Cả',
        selectInvert: 'Chọn Ngược Lại'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Huỷ',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Huỷ'
    },
    Transfer: {
        searchPlaceholder: 'Tìm ở đây',
        itemUnit: 'mục',
        itemsUnit: 'mục'
    },
    Upload: {
        uploading: 'Đang tải lên...',
        removeFile: 'Gỡ bỏ tập tin',
        uploadError: 'Lỗi tải lên',
        previewFile: 'Xem thử tập tin',
        downloadFile: 'Tải tập tin'
    },
    Empty: {
        description: 'Trống'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var zh_HK = {
    locale: 'zh-hk',
    Pagination: {
        items_per_page: '條/頁',
        jump_to: '跳至',
        jump_to_confirm: '確定',
        page: '頁',
        prev_page: '上一頁',
        next_page: '下一頁',
        prev_5: '向前 5 頁',
        next_5: '向後 5 頁',
        prev_3: '向前 3 頁',
        next_3: '向後 3 頁'
    },
    DatePicker: {
        lang: {
            placeholder: '請選擇日期',
            rangePlaceholder: ['開始日期', '結束日期'],
            locale: 'zh_TW',
            today: '今天',
            now: '此刻',
            backToToday: '返回今天',
            ok: '確定',
            timeSelect: '選擇時間',
            dateSelect: '選擇日期',
            weekSelect: '選擇周',
            clear: '清除',
            month: '月',
            year: '年',
            previousMonth: '上個月 (翻頁上鍵)',
            nextMonth: '下個月 (翻頁下鍵)',
            monthSelect: '選擇月份',
            yearSelect: '選擇年份',
            decadeSelect: '選擇年代',
            yearFormat: 'YYYY年',
            dayFormat: 'D日',
            dateFormat: 'YYYY年M月D日',
            dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
            previousYear: '上一年 (Control鍵加左方向鍵)',
            nextYear: '下一年 (Control鍵加右方向鍵)',
            previousDecade: '上一年代',
            nextDecade: '下一年代',
            previousCentury: '上一世紀',
            nextCentury: '下一世紀'
        },
        timePickerLocale: {
            placeholder: '請選擇時間'
        }
    },
    TimePicker: {
        placeholder: '請選擇時間'
    },
    Calendar: {
        lang: {
            placeholder: '請選擇日期',
            rangePlaceholder: ['開始日期', '結束日期'],
            locale: 'zh_TW',
            today: '今天',
            now: '此刻',
            backToToday: '返回今天',
            ok: '確定',
            timeSelect: '選擇時間',
            dateSelect: '選擇日期',
            weekSelect: '選擇周',
            clear: '清除',
            month: '月',
            year: '年',
            previousMonth: '上個月 (翻頁上鍵)',
            nextMonth: '下個月 (翻頁下鍵)',
            monthSelect: '選擇月份',
            yearSelect: '選擇年份',
            decadeSelect: '選擇年代',
            yearFormat: 'YYYY年',
            dayFormat: 'D日',
            dateFormat: 'YYYY年M月D日',
            dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
            previousYear: '上一年 (Control鍵加左方向鍵)',
            nextYear: '下一年 (Control鍵加右方向鍵)',
            previousDecade: '上一年代',
            nextDecade: '下一年代',
            previousCentury: '上一世紀',
            nextCentury: '下一世紀'
        },
        timePickerLocale: {
            placeholder: '請選擇時間'
        }
    },
    global: {
        placeholder: '請選擇'
    },
    Table: {
        filterTitle: '篩選器',
        filterConfirm: '確定',
        filterReset: '重置',
        filterEmptyText: '無篩選項',
        selectAll: '全部選取',
        selectInvert: '反向選取',
        selectionAll: '全選所有',
        sortTitle: '排序',
        expand: '展開行',
        collapse: '關閉行',
        triggerDesc: '點擊降序',
        triggerAsc: '點擊升序',
        cancelSort: '取消排序'
    },
    Modal: {
        okText: '確定',
        cancelText: '取消',
        justOkText: '知道了'
    },
    Popconfirm: {
        okText: '確定',
        cancelText: '取消'
    },
    Transfer: {
        searchPlaceholder: '搜尋資料',
        itemUnit: '項目',
        itemsUnit: '項目'
    },
    Upload: {
        uploading: '正在上傳...',
        removeFile: '刪除檔案',
        uploadError: '上傳失敗',
        previewFile: '檔案預覽',
        downloadFile: '下载文件'
    },
    Empty: {
        description: '無此資料'
    },
    Icon: {
        icon: '圖標'
    },
    Text: {
        edit: '編輯',
        copy: '複製',
        copied: '複製成功',
        expand: '展開'
    },
    PageHeader: {
        back: '返回'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var zh_TW = {
    locale: 'zh-tw',
    Pagination: {
        items_per_page: '條/頁',
        jump_to: '跳至',
        jump_to_confirm: '確定',
        page: '頁',
        prev_page: '上一頁',
        next_page: '下一頁',
        prev_5: '向前 5 頁',
        next_5: '向後 5 頁',
        prev_3: '向前 3 頁',
        next_3: '向後 3 頁'
    },
    DatePicker: {
        lang: {
            placeholder: '請選擇日期',
            rangePlaceholder: ['開始日期', '結束日期'],
            locale: 'zh_TW',
            today: '今天',
            now: '此刻',
            backToToday: '返回今天',
            ok: '確定',
            timeSelect: '選擇時間',
            dateSelect: '選擇日期',
            weekSelect: '選擇周',
            clear: '清除',
            month: '月',
            year: '年',
            previousMonth: '上個月 (翻頁上鍵)',
            nextMonth: '下個月 (翻頁下鍵)',
            monthSelect: '選擇月份',
            yearSelect: '選擇年份',
            decadeSelect: '選擇年代',
            yearFormat: 'YYYY年',
            dayFormat: 'D日',
            dateFormat: 'YYYY年M月D日',
            dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
            previousYear: '上一年 (Control鍵加左方向鍵)',
            nextYear: '下一年 (Control鍵加右方向鍵)',
            previousDecade: '上一年代',
            nextDecade: '下一年代',
            previousCentury: '上一世紀',
            nextCentury: '下一世紀'
        },
        timePickerLocale: {
            placeholder: '請選擇時間'
        }
    },
    TimePicker: {
        placeholder: '請選擇時間'
    },
    Calendar: {
        lang: {
            placeholder: '請選擇日期',
            rangePlaceholder: ['開始日期', '結束日期'],
            locale: 'zh_TW',
            today: '今天',
            now: '此刻',
            backToToday: '返回今天',
            ok: '確定',
            timeSelect: '選擇時間',
            dateSelect: '選擇日期',
            weekSelect: '選擇周',
            clear: '清除',
            month: '月',
            year: '年',
            previousMonth: '上個月 (翻頁上鍵)',
            nextMonth: '下個月 (翻頁下鍵)',
            monthSelect: '選擇月份',
            yearSelect: '選擇年份',
            decadeSelect: '選擇年代',
            yearFormat: 'YYYY年',
            dayFormat: 'D日',
            dateFormat: 'YYYY年M月D日',
            dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
            previousYear: '上一年 (Control鍵加左方向鍵)',
            nextYear: '下一年 (Control鍵加右方向鍵)',
            previousDecade: '上一年代',
            nextDecade: '下一年代',
            previousCentury: '上一世紀',
            nextCentury: '下一世紀'
        },
        timePickerLocale: {
            placeholder: '請選擇時間'
        }
    },
    global: {
        placeholder: '請選擇'
    },
    Table: {
        filterTitle: '篩選器',
        filterConfirm: '確定',
        filterReset: '重置',
        filterEmptyText: '無篩選項',
        selectAll: '全部選取',
        selectInvert: '反向選取',
        selectionAll: '全選所有',
        sortTitle: '排序',
        expand: '展開行',
        collapse: '關閉行',
        triggerDesc: '點擊降序',
        triggerAsc: '點擊升序',
        cancelSort: '取消排序'
    },
    Modal: {
        okText: '確定',
        cancelText: '取消',
        justOkText: '知道了'
    },
    Popconfirm: {
        okText: '確定',
        cancelText: '取消'
    },
    Transfer: {
        searchPlaceholder: '搜尋資料',
        itemUnit: '項目',
        itemsUnit: '項目'
    },
    Upload: {
        uploading: '正在上傳...',
        removeFile: '刪除檔案',
        uploadError: '上傳失敗',
        previewFile: '檔案預覽',
        downloadFile: '下载文件'
    },
    Empty: {
        description: '無此資料'
    },
    Icon: {
        icon: '圖標'
    },
    Text: {
        edit: '編輯',
        copy: '複製',
        copied: '複製成功',
        expand: '展開'
    },
    PageHeader: {
        back: '返回'
    }
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DATE_HELPER_SERVICE_FACTORY, DateHelperByDateFns, DateHelperByDatePipe, DateHelperService, NZ_DATE_CONFIG, NZ_DATE_CONFIG_DEFAULT, NZ_DATE_LOCALE, NZ_I18N, NzI18nModule, NzI18nPipe, NzI18nService, ar_EG, az_AZ, bg_BG, by_BY, ca_ES, cs_CZ, da_DK, de_DE, el_GR, en_GB, en_US, es_ES, et_EE, fa_IR, fi_FI, fr_BE, fr_FR, ga_IE, gl_ES, he_IL, hi_IN, hr_HR, hu_HU, hy_AM, id_ID, is_IS, it_IT, ja_JP, ka_GE, kmr_IQ, kn_IN, ko_KR, ku_IQ, lt_LT, lv_LV, mergeDateConfig, mk_MK, mn_MN, ms_MY, nb_NO, ne_NP, nl_BE, nl_NL, pl_PL, pt_BR, pt_PT, ro_RO, ru_RU, sk_SK, sl_SI, sr_RS, sv_SE, ta_IN, th_TH, tr_TR, uk_UA, vi_VN, zh_CN, zh_HK, zh_TW };
//# sourceMappingURL=ng-zorro-antd-i18n.js.map
