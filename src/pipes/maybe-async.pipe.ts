import { Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Pipe({ name: 'maybeAsync' })
export class MaybeAsyncPipe extends AsyncPipe {

    transform<T>(obj: null): null;
    transform<T>(obj: undefined): undefined;
    transform<T>(obj: string): any;
    transform<T>(obj: Observable<T>): T | null;
    transform<T>(obj: Promise<T>): T | null;
    transform(obj: Observable<any>|Promise<any>|string|null|undefined): any {
        if (typeof obj === 'string' || obj instanceof String) {
            return obj;
        }
        return super.transform(obj as Observable<any>);
    }
}
