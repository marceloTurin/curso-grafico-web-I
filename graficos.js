function desenharPizza(){
	let graficoPizza = document.querySelector("#graficoPizza")
	let tabela = new google.visualization.DataTable();
	tabela.addColumn('string','Categoria');
	tabela.addColumn('number','Valores');

	tabela.addRows([
		['Educação',2000],
		['Transporte',500],
		['Lazer',230],
		['Saúde',50],
		['Cartão de Crédito',900],
		['Alimentação',260]
	]);

	let opcoes = {
		title : 'Grafico de Gastos',
		height: 400,
		width: 800,
		//pieHole : 0.4,
		is3D: true,
		legend: 'labeled',
		pieSliceText: 'value',
		//colors: ['','',''],
		slices: {
			1:{color: 'grey'},
			2:{color: '#a6a6a6'},
			3:{color: 'grey'},
			4:{offset: 0.4},
			5:{color: 'grey'}
		}
	}

	let grafico = new google.visualization.PieChart(graficoPizza);
	grafico.draw(tabela,opcoes)
}


function desenharLinha(){
	let graficoLinha = document.querySelector("#graficoLinha");
	tabela = new google.visualization.DataTable();
	tabela.addColumn('string','Mês')
	tabela.addColumn('number','Gastos')
	tabela.addRows([
		 ['jan',800]
		,['fev',400]
		,['mar',1100]
		,['abr',400]
		,['mai',500]
		,['jun',750]
		,['jul',1500]
		,['ago',650]
		,['set',850]
		,['out',400]
		,['nov',100]
		,['dez',720]
	]);

	let opcoes = {
		title: 'Gastos por Mês',
		width: 650,
		height: 300,
		vAxis: {format: 'currency',
				gridlines: {count:5, 
							color: 'transparent'}
							},		
		curveType: 'function',
		legend: 'none'
	}

	let grafico = new google.visualization.LineChart(graficoLinha);
	grafico.draw(tabela,opcoes)
	
}

function desenharColuna(){

	let graficoColuna =  document.querySelector("#graficoColuna")
	let tabela =  google.visualization.arrayToDataTable([	 
		 ['Mês','Entrada','Saída']		
		,['jan',2500,1000]
		,['fev',2000,500]
		,['mar',3000,1300]
		,['abr',1500,1700]
		,['mai',5000,2250]
		,['jun',3567,3000]
		,['jul',3452,1468]
		,['ago',1833,5250]
		,['set',3803,5500]
		,['out',1800,1000]
		,['nov',3569,1500]
		,['dez',3000,1740]
	]);

	let opcoes = {
		title: 'Entradas e saídas da conta',
		width: 800,
		height: 400,
		vAxis: {
			gridlines:{color: 'transparent'},
			format: 'currency',
			title: 'Valores'
			},
		hAxis: {
			title: 'Mês'
		}	
	}

	let grafico = new google.visualization.ColumnChart(graficoColuna);
	grafico.draw(tabela,opcoes);	
}


function desenhaColunaSurpresa(){
	let graficoColunaSurpresa = document.querySelector("#graficoColunaSurpresa")
	let tabela = new google.visualization.DataTable();
	tabela.addColumn('string','Categoria');
	tabela.addColumn('number','Valores');
	tabela.addColumn({type: 'number',role: 'annotation'});

	tabela.addRows([
		['Educação',2000,2000],
		['Transporte',500,500],
		['Lazer',230,230],
		['Saúde',50,50],
		['Cartão de Crédito',900,900],
		['Alimentação',260,260]
	]);

	let opcoes = {
		title: 'Tipos de Gastos',
		height: 400,
		width: 800,
		vAxis: {
			gridlines:{color: 'transparent',count: 0}
		},
		legend: 'none'
	}

	let grafico = new google.visualization.ColumnChart(graficoColunaSurpresa)
	grafico.draw(tabela,opcoes)
}

function desenharGrafico(){
	desenharPizza();
	desenharLinha();
	desenharColuna();
	desenhaColunaSurpresa()
}