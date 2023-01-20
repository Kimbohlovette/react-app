import Product from './Product'

export const ProductList = () => {
	const data = [
		{
			id: 1,
			title: 'Tatiana Manaois',
			price: '17332',
			description: 'odio vel est tempor bibendum. Donec felis orci, adipiscing',
		},
		{
			id: 2,
			title: 'Olax AX7 Pro Router',
			price: '7475',
			description: 'vitae diam. Proin dolor. Nulla semper tellus id nunc',
		},
		{
			id: 3,
			title: '',
			price: '5113',
			description:
				'in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat',
		},
		{
			id: 4,
			title: '',
			price: '8195',
			description: 'fermentum vel, mauris. Integer',
		},
		{
			id: 5,
			title: '',
			price: '7914',
			description:
				'nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis',
		},
		{
			id: 6,
			title: '',
			price: '5460',
			description: 'Quisque libero lacus, varius et, euismod',
		},
		{
			id: 7,
			title: '',
			price: '7266',
			description:
				'lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque',
		},
		{
			id: 8,
			title: '',
			price: '8143',
			description:
				'Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula.',
		},
		{
			id: 9,
			title: '',
			price: '8144',
			description:
				'scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis',
		},
		{
			id: 10,
			title: '',
			price: '7355',
			description: 'natoque penatibus et magnis dis parturient montes,',
		},
		{
			id: 11,
			title: '',
			price: '7442',
			description:
				'iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et',
		},
		{
			id: 12,
			title: '',
			price: '5353',
			description: 'adipiscing,',
		},
		{
			id: 13,
			title: '',
			price: '6788',
			description: 'nulla vulputate dui,',
		},
		{
			id: 14,
			title: '',
			price: '5833',
			description:
				'Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper',
		},
		{
			id: 15,
			title: '',
			price: '9649',
			description: 'ultrices a, auctor non, feugiat nec, diam.',
		},
		{
			id: 16,
			title: '',
			price: '6382',
			description:
				'ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec',
		},
		{
			id: 17,
			title: '',
			price: '5681',
			description:
				'sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat',
		},
		{
			id: 18,
			title: '',
			price: '5580',
			description: 'tellus. Phasellus elit pede, malesuada vel, venenatis',
		},
		{
			id: 19,
			title: '',
			price: '9752',
			description: 'Lorem',
		},
		{
			id: 20,
			title: '',
			price: '6956',
			description:
				'risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien',
		},
	]
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-max">
			{data.map((item) => {
				return <Product product={item} key={item.id} />
			})}
		</div>
	)
}
