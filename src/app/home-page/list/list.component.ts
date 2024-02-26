import { Component, Output } from '@angular/core';
import { SingleItem } from '../single-item/single-item.model';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrl: './list.component.scss',
})
export class ListComponent {
	forEdit: SingleItem = new SingleItem(0, '', '');
	collection: SingleItem[] = [
		{
			id: 1,
			title: 'Item 1',
			comment: 'Test Test',
		},
		{
			id: 2,
			title: 'Item 2',
			comment: 'Test Test',
		},
		{
			id: 3,
			title: 'Item 3',
			comment: 'Test Test',
		},
		{
			id: 4,
			title: 'Item 4',
			comment: 'Test Test',
		},
		{
			id: 5,
			title: 'Item 5',
			comment: 'Test Test',
		},
		{
			id: 6,
			title: 'Item 6',
			comment: 'Test Test',
		},
		{
			id: 7,
			title: 'Item 7',
			comment: 'Test Test',
		},
	];

	@Output() addNew(data: SingleItem) {
		this.collection.unshift(data);
	}

	@Output() deleteItem(id: number) {
		this.collection = this.collection.filter((item) => item.id !== id);
	}

	editItem(data: SingleItem) {
		const index = this.collection.findIndex((item) => item.id === data.id);
		if (index !== -1) {
			this.collection[index] = { ...data };
		}

		this.forEdit = new SingleItem(0, '', '');
	}

	editItemForm(data: SingleItem) {
		console.log('here');
		this.forEdit = { ...data };
	}
}
