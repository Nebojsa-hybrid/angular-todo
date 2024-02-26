import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-single-item',
	templateUrl: './single-item.component.html',
	styleUrl: './single-item.component.scss',
})
export class SingleItemComponent {
	@Input() data: { id: number; title: string; comment: string };
	@Output() delete: EventEmitter<void> = new EventEmitter<void>();
	@Output() edit: EventEmitter<void> = new EventEmitter<void>();

	constructor() {}

	onDeleteClick() {
		this.delete.emit();
	}

	onEditClick() {
		this.edit.emit();
	}
}
