import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SingleItem } from '../single-item/single-item.model';

@Component({
	selector: 'app-new-item',
	templateUrl: './new-item.component.html',
	styleUrl: './new-item.component.scss',
})
export class NewItemComponent {
	@Input() forEdit: SingleItem = new SingleItem(0, '', '');

	@Output() addItem: EventEmitter<SingleItem> = new EventEmitter<SingleItem>();
	@Output() editItem: EventEmitter<SingleItem> = new EventEmitter<SingleItem>();

	onSubmit() {
		if (this.forEdit.id) {
			this.editItem.emit(this.forEdit);
		} else {
			const newItemWithId: SingleItem = { ...this.forEdit, id: Date.now() };
			this.addItem.emit(newItemWithId);
		}
		this.forEdit = { id: null, title: '', comment: '' };
	}

}
