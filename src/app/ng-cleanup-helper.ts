import { Directive, OnDestroy } from '@angular/core'

import { Subscription } from 'rxjs'

/**
 * Basic class that handle the bothersome ngOnDestroy -> unsubcribe bullshit
 *
 * @export
 * @class NgCleanupHelper
 * @implements {OnDestroy}
 */
@Directive()
export class NgCleanupHelper implements OnDestroy {
	private _subscriptions = new Array<Subscription>()

	ngOnDestroy(): void {
		this._subscriptions.forEach(s => s.unsubscribe())
	}

	subscribe(subscription: Subscription): void {
		this._subscriptions.push(subscription)
	}
}
