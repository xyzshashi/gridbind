Ext.define('Myapps.view.main.center.CenterView', {
	extend: 'Ext.grid.Grid',
	xtype: 'centerview',
    title: 'Reykjavik Flight Arrivals',
	itemConfig: {
		viewModel: true
	},
	columns: [{
		text: 'Date',
		cell: {
			bind: '{record.date:date("F j")}'
		}
	}, {
		text: 'Airline',
		width: 120,
		cell: {
			bind: '{record.airline}'
		}
	}, {
		text: 'From',
		cell: {
			bind: '{record.to}'
		},
		width: 160
	}, {
		text: 'Scheduled',
		cell: {
			bind: '{record.plannedDeparture}'
		},
		align: 'center'
	}],
	
	store: {
		type: 'store',
		autoLoad: true,
		fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
		proxy: {
			type: 'ajax',
			url: 'http://localhost:3000/results',
			reader: {rootProperty: 'results'}
		}
	}
		
});
