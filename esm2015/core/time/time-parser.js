/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// from https://github.com/hsuanxyz/ng-time-parser
import { FormStyle, getLocaleDayPeriods, TranslationWidth } from '@angular/common';
import { isNotNil } from 'ng-zorro-antd/core/util';
export class NgTimeParser {
    constructor(format, localeId) {
        this.format = format;
        this.localeId = localeId;
        this.regex = null;
        this.matchMap = {
            hour: null,
            minute: null,
            second: null,
            periodNarrow: null,
            periodWide: null,
            periodAbbreviated: null
        };
        this.genRegexp();
    }
    toDate(str) {
        const result = this.getTimeResult(str);
        const time = new Date();
        if (isNotNil(result === null || result === void 0 ? void 0 : result.hour)) {
            time.setHours(result.hour);
        }
        if (isNotNil(result === null || result === void 0 ? void 0 : result.minute)) {
            time.setMinutes(result.minute);
        }
        if (isNotNil(result === null || result === void 0 ? void 0 : result.second)) {
            time.setSeconds(result.second);
        }
        if ((result === null || result === void 0 ? void 0 : result.period) === 1 && time.getHours() < 12) {
            time.setHours(time.getHours() + 12);
        }
        return time;
    }
    getTimeResult(str) {
        const match = this.regex.exec(str);
        let period = null;
        if (match) {
            if (isNotNil(this.matchMap.periodNarrow)) {
                period = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Narrow).indexOf(match[this.matchMap.periodNarrow + 1]);
            }
            if (isNotNil(this.matchMap.periodWide)) {
                period = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Wide).indexOf(match[this.matchMap.periodWide + 1]);
            }
            if (isNotNil(this.matchMap.periodAbbreviated)) {
                period = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Abbreviated).indexOf(match[this.matchMap.periodAbbreviated + 1]);
            }
            return {
                hour: isNotNil(this.matchMap.hour) ? Number.parseInt(match[this.matchMap.hour + 1], 10) : null,
                minute: isNotNil(this.matchMap.minute) ? Number.parseInt(match[this.matchMap.minute + 1], 10) : null,
                second: isNotNil(this.matchMap.second) ? Number.parseInt(match[this.matchMap.second + 1], 10) : null,
                period
            };
        }
        else {
            return null;
        }
    }
    genRegexp() {
        let regexStr = this.format.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&');
        const hourRegex = /h{1,2}/i;
        const minuteRegex = /m{1,2}/;
        const secondRegex = /s{1,2}/;
        const periodNarrow = /aaaaa/;
        const periodWide = /aaaa/;
        const periodAbbreviated = /a{1,3}/;
        const hourMatch = hourRegex.exec(this.format);
        const minuteMatch = minuteRegex.exec(this.format);
        const secondMatch = secondRegex.exec(this.format);
        const periodNarrowMatch = periodNarrow.exec(this.format);
        let periodWideMatch = null;
        let periodAbbreviatedMatch = null;
        if (!periodNarrowMatch) {
            periodWideMatch = periodWide.exec(this.format);
        }
        if (!periodWideMatch && !periodNarrowMatch) {
            periodAbbreviatedMatch = periodAbbreviated.exec(this.format);
        }
        const matchs = [hourMatch, minuteMatch, secondMatch, periodNarrowMatch, periodWideMatch, periodAbbreviatedMatch]
            .filter(m => !!m)
            .sort((a, b) => a.index - b.index);
        matchs.forEach((match, index) => {
            switch (match) {
                case hourMatch:
                    this.matchMap.hour = index;
                    regexStr = regexStr.replace(hourRegex, '(\\d{1,2})');
                    break;
                case minuteMatch:
                    this.matchMap.minute = index;
                    regexStr = regexStr.replace(minuteRegex, '(\\d{1,2})');
                    break;
                case secondMatch:
                    this.matchMap.second = index;
                    regexStr = regexStr.replace(secondRegex, '(\\d{1,2})');
                    break;
                case periodNarrowMatch:
                    this.matchMap.periodNarrow = index;
                    const periodsNarrow = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Narrow).join('|');
                    regexStr = regexStr.replace(periodNarrow, `(${periodsNarrow})`);
                    break;
                case periodWideMatch:
                    this.matchMap.periodWide = index;
                    const periodsWide = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Wide).join('|');
                    regexStr = regexStr.replace(periodWide, `(${periodsWide})`);
                    break;
                case periodAbbreviatedMatch:
                    this.matchMap.periodAbbreviated = index;
                    const periodsAbbreviated = getLocaleDayPeriods(this.localeId, FormStyle.Format, TranslationWidth.Abbreviated).join('|');
                    regexStr = regexStr.replace(periodAbbreviated, `(${periodsAbbreviated})`);
                    break;
            }
        });
        this.regex = new RegExp(regexStr);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1wYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvcmUvdGltZS90aW1lLXBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFFSCxrREFBa0Q7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVNuRCxNQUFNLE9BQU8sWUFBWTtJQVd2QixZQUFvQixNQUFjLEVBQVUsUUFBZ0I7UUFBeEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVE7UUFWNUQsVUFBSyxHQUFXLElBQUssQ0FBQztRQUN0QixhQUFRLEdBQXFDO1lBQzNDLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixNQUFNLEVBQUUsSUFBSTtZQUNaLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGlCQUFpQixFQUFFLElBQUk7U0FDeEIsQ0FBQztRQUdBLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXhCLElBQUksUUFBUSxDQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksUUFBUSxDQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxNQUFNLENBQUMsRUFBRTtZ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QWEsR0FBRyxDQUFDLENBQUM7b0JBQ2hFLE1BQU07Z0JBQ1IsS0FBSyxlQUFlO29CQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ2pDLE1BQU0sV0FBVyxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFHLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7b0JBQzVELE1BQU07Z0JBQ1IsS0FBSyxzQkFBc0I7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO29CQUN4QyxNQUFNLGtCQUFrQixHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hILFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO29CQUMxRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaHN1YW54eXovbmctdGltZS1wYXJzZXJcbmltcG9ydCB7IEZvcm1TdHlsZSwgZ2V0TG9jYWxlRGF5UGVyaW9kcywgVHJhbnNsYXRpb25XaWR0aCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBUaW1lUmVzdWx0IHtcbiAgaG91cjogbnVtYmVyIHwgbnVsbDtcbiAgbWludXRlOiBudW1iZXIgfCBudWxsO1xuICBzZWNvbmQ6IG51bWJlciB8IG51bGw7XG4gIHBlcmlvZDogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIE5nVGltZVBhcnNlciB7XG4gIHJlZ2V4OiBSZWdFeHAgPSBudWxsITtcbiAgbWF0Y2hNYXA6IHsgW2tleTogc3RyaW5nXTogbnVsbCB8IG51bWJlciB9ID0ge1xuICAgIGhvdXI6IG51bGwsXG4gICAgbWludXRlOiBudWxsLFxuICAgIHNlY29uZDogbnVsbCxcbiAgICBwZXJpb2ROYXJyb3c6IG51bGwsXG4gICAgcGVyaW9kV2lkZTogbnVsbCxcbiAgICBwZXJpb2RBYmJyZXZpYXRlZDogbnVsbFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybWF0OiBzdHJpbmcsIHByaXZhdGUgbG9jYWxlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuZ2VuUmVnZXhwKCk7XG4gIH1cblxuICB0b0RhdGUoc3RyOiBzdHJpbmcpOiBEYXRlIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldFRpbWVSZXN1bHQoc3RyKTtcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKTtcblxuICAgIGlmIChpc05vdE5pbChyZXN1bHQ/LmhvdXIpKSB7XG4gICAgICB0aW1lLnNldEhvdXJzKHJlc3VsdCEuaG91cik7XG4gICAgfVxuXG4gICAgaWYgKGlzTm90TmlsKHJlc3VsdD8ubWludXRlKSkge1xuICAgICAgdGltZS5zZXRNaW51dGVzKHJlc3VsdCEubWludXRlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb3ROaWwocmVzdWx0Py5zZWNvbmQpKSB7XG4gICAgICB0aW1lLnNldFNlY29uZHMocmVzdWx0IS5zZWNvbmQpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQ/LnBlcmlvZCA9PT0gMSAmJiB0aW1lLmdldEhvdXJzKCkgPCAxMikge1xuICAgICAgdGltZS5zZXRIb3Vycyh0aW1lLmdldEhvdXJzKCkgKyAxMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cblxuICBnZXRUaW1lUmVzdWx0KHN0cjogc3RyaW5nKTogVGltZVJlc3VsdCB8IG51bGwge1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5yZWdleC5leGVjKHN0cik7XG4gICAgbGV0IHBlcmlvZCA9IG51bGw7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpZiAoaXNOb3ROaWwodGhpcy5tYXRjaE1hcC5wZXJpb2ROYXJyb3cpKSB7XG4gICAgICAgIHBlcmlvZCA9IGdldExvY2FsZURheVBlcmlvZHModGhpcy5sb2NhbGVJZCwgRm9ybVN0eWxlLkZvcm1hdCwgVHJhbnNsYXRpb25XaWR0aC5OYXJyb3cpLmluZGV4T2YoXG4gICAgICAgICAgbWF0Y2hbdGhpcy5tYXRjaE1hcC5wZXJpb2ROYXJyb3cgKyAxXVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGlzTm90TmlsKHRoaXMubWF0Y2hNYXAucGVyaW9kV2lkZSkpIHtcbiAgICAgICAgcGVyaW9kID0gZ2V0TG9jYWxlRGF5UGVyaW9kcyh0aGlzLmxvY2FsZUlkLCBGb3JtU3R5bGUuRm9ybWF0LCBUcmFuc2xhdGlvbldpZHRoLldpZGUpLmluZGV4T2YobWF0Y2hbdGhpcy5tYXRjaE1hcC5wZXJpb2RXaWRlICsgMV0pO1xuICAgICAgfVxuICAgICAgaWYgKGlzTm90TmlsKHRoaXMubWF0Y2hNYXAucGVyaW9kQWJicmV2aWF0ZWQpKSB7XG4gICAgICAgIHBlcmlvZCA9IGdldExvY2FsZURheVBlcmlvZHModGhpcy5sb2NhbGVJZCwgRm9ybVN0eWxlLkZvcm1hdCwgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZCkuaW5kZXhPZihcbiAgICAgICAgICBtYXRjaFt0aGlzLm1hdGNoTWFwLnBlcmlvZEFiYnJldmlhdGVkICsgMV1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhvdXI6IGlzTm90TmlsKHRoaXMubWF0Y2hNYXAuaG91cikgPyBOdW1iZXIucGFyc2VJbnQobWF0Y2hbdGhpcy5tYXRjaE1hcC5ob3VyICsgMV0sIDEwKSA6IG51bGwsXG4gICAgICAgIG1pbnV0ZTogaXNOb3ROaWwodGhpcy5tYXRjaE1hcC5taW51dGUpID8gTnVtYmVyLnBhcnNlSW50KG1hdGNoW3RoaXMubWF0Y2hNYXAubWludXRlICsgMV0sIDEwKSA6IG51bGwsXG4gICAgICAgIHNlY29uZDogaXNOb3ROaWwodGhpcy5tYXRjaE1hcC5zZWNvbmQpID8gTnVtYmVyLnBhcnNlSW50KG1hdGNoW3RoaXMubWF0Y2hNYXAuc2Vjb25kICsgMV0sIDEwKSA6IG51bGwsXG4gICAgICAgIHBlcmlvZFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZ2VuUmVnZXhwKCk6IHZvaWQge1xuICAgIGxldCByZWdleFN0ciA9IHRoaXMuZm9ybWF0LnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJCYnKTtcbiAgICBjb25zdCBob3VyUmVnZXggPSAvaHsxLDJ9L2k7XG4gICAgY29uc3QgbWludXRlUmVnZXggPSAvbXsxLDJ9LztcbiAgICBjb25zdCBzZWNvbmRSZWdleCA9IC9zezEsMn0vO1xuICAgIGNvbnN0IHBlcmlvZE5hcnJvdyA9IC9hYWFhYS87XG4gICAgY29uc3QgcGVyaW9kV2lkZSA9IC9hYWFhLztcbiAgICBjb25zdCBwZXJpb2RBYmJyZXZpYXRlZCA9IC9hezEsM30vO1xuXG4gICAgY29uc3QgaG91ck1hdGNoID0gaG91clJlZ2V4LmV4ZWModGhpcy5mb3JtYXQpO1xuICAgIGNvbnN0IG1pbnV0ZU1hdGNoID0gbWludXRlUmVnZXguZXhlYyh0aGlzLmZvcm1hdCk7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmRSZWdleC5leGVjKHRoaXMuZm9ybWF0KTtcbiAgICBjb25zdCBwZXJpb2ROYXJyb3dNYXRjaCA9IHBlcmlvZE5hcnJvdy5leGVjKHRoaXMuZm9ybWF0KTtcbiAgICBsZXQgcGVyaW9kV2lkZU1hdGNoOiBudWxsIHwgUmVnRXhwRXhlY0FycmF5ID0gbnVsbDtcbiAgICBsZXQgcGVyaW9kQWJicmV2aWF0ZWRNYXRjaDogbnVsbCB8IFJlZ0V4cEV4ZWNBcnJheSA9IG51bGw7XG4gICAgaWYgKCFwZXJpb2ROYXJyb3dNYXRjaCkge1xuICAgICAgcGVyaW9kV2lkZU1hdGNoID0gcGVyaW9kV2lkZS5leGVjKHRoaXMuZm9ybWF0KTtcbiAgICB9XG4gICAgaWYgKCFwZXJpb2RXaWRlTWF0Y2ggJiYgIXBlcmlvZE5hcnJvd01hdGNoKSB7XG4gICAgICBwZXJpb2RBYmJyZXZpYXRlZE1hdGNoID0gcGVyaW9kQWJicmV2aWF0ZWQuZXhlYyh0aGlzLmZvcm1hdCk7XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2hzID0gW2hvdXJNYXRjaCwgbWludXRlTWF0Y2gsIHNlY29uZE1hdGNoLCBwZXJpb2ROYXJyb3dNYXRjaCwgcGVyaW9kV2lkZU1hdGNoLCBwZXJpb2RBYmJyZXZpYXRlZE1hdGNoXVxuICAgICAgLmZpbHRlcihtID0+ICEhbSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhIS5pbmRleCAtIGIhLmluZGV4KTtcblxuICAgIG1hdGNocy5mb3JFYWNoKChtYXRjaCwgaW5kZXgpID0+IHtcbiAgICAgIHN3aXRjaCAobWF0Y2gpIHtcbiAgICAgICAgY2FzZSBob3VyTWF0Y2g6XG4gICAgICAgICAgdGhpcy5tYXRjaE1hcC5ob3VyID0gaW5kZXg7XG4gICAgICAgICAgcmVnZXhTdHIgPSByZWdleFN0ci5yZXBsYWNlKGhvdXJSZWdleCwgJyhcXFxcZHsxLDJ9KScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG1pbnV0ZU1hdGNoOlxuICAgICAgICAgIHRoaXMubWF0Y2hNYXAubWludXRlID0gaW5kZXg7XG4gICAgICAgICAgcmVnZXhTdHIgPSByZWdleFN0ci5yZXBsYWNlKG1pbnV0ZVJlZ2V4LCAnKFxcXFxkezEsMn0pJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2Vjb25kTWF0Y2g6XG4gICAgICAgICAgdGhpcy5tYXRjaE1hcC5zZWNvbmQgPSBpbmRleDtcbiAgICAgICAgICByZWdleFN0ciA9IHJlZ2V4U3RyLnJlcGxhY2Uoc2Vjb25kUmVnZXgsICcoXFxcXGR7MSwyfSknKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwZXJpb2ROYXJyb3dNYXRjaDpcbiAgICAgICAgICB0aGlzLm1hdGNoTWFwLnBlcmlvZE5hcnJvdyA9IGluZGV4O1xuICAgICAgICAgIGNvbnN0IHBlcmlvZHNOYXJyb3cgPSBnZXRMb2NhbGVEYXlQZXJpb2RzKHRoaXMubG9jYWxlSWQsIEZvcm1TdHlsZS5Gb3JtYXQsIFRyYW5zbGF0aW9uV2lkdGguTmFycm93KS5qb2luKCd8Jyk7XG4gICAgICAgICAgcmVnZXhTdHIgPSByZWdleFN0ci5yZXBsYWNlKHBlcmlvZE5hcnJvdywgYCgke3BlcmlvZHNOYXJyb3d9KWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBlcmlvZFdpZGVNYXRjaDpcbiAgICAgICAgICB0aGlzLm1hdGNoTWFwLnBlcmlvZFdpZGUgPSBpbmRleDtcbiAgICAgICAgICBjb25zdCBwZXJpb2RzV2lkZSA9IGdldExvY2FsZURheVBlcmlvZHModGhpcy5sb2NhbGVJZCwgRm9ybVN0eWxlLkZvcm1hdCwgVHJhbnNsYXRpb25XaWR0aC5XaWRlKS5qb2luKCd8Jyk7XG4gICAgICAgICAgcmVnZXhTdHIgPSByZWdleFN0ci5yZXBsYWNlKHBlcmlvZFdpZGUsIGAoJHtwZXJpb2RzV2lkZX0pYCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGVyaW9kQWJicmV2aWF0ZWRNYXRjaDpcbiAgICAgICAgICB0aGlzLm1hdGNoTWFwLnBlcmlvZEFiYnJldmlhdGVkID0gaW5kZXg7XG4gICAgICAgICAgY29uc3QgcGVyaW9kc0FiYnJldmlhdGVkID0gZ2V0TG9jYWxlRGF5UGVyaW9kcyh0aGlzLmxvY2FsZUlkLCBGb3JtU3R5bGUuRm9ybWF0LCBUcmFuc2xhdGlvbldpZHRoLkFiYnJldmlhdGVkKS5qb2luKCd8Jyk7XG4gICAgICAgICAgcmVnZXhTdHIgPSByZWdleFN0ci5yZXBsYWNlKHBlcmlvZEFiYnJldmlhdGVkLCBgKCR7cGVyaW9kc0FiYnJldmlhdGVkfSlgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVnZXggPSBuZXcgUmVnRXhwKHJlZ2V4U3RyKTtcbiAgfVxufVxuIl19