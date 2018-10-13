function desenharPizza(){
	let graficoPizza = document.querySelector("#graficoPizza")
	let tabela = new google.visualization.DataTable();

	//Adiciona Colunas
	tabela.addColumn('string','Categoria');
	tabela.addColumn('number','Valores');

	//Adiciona Linhas
	tabela.addRows([
		['Educação',2000],
		['Transporte',500],
		['Lazer',230],
		['Saúde',50],
		['Cartão de Crédito',900],
		['Alimentação',260]
	]);

	//Opções de visualização
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

	//Desenha grafico
	let grafico = new google.visualization.PieChart(graficoPizza);
	grafico.draw(tabela,opcoes)
}


function desenharLinha(){
	let graficoLinha = document.querySelector("#graficoLinha");

	tabela = new google.visualization.DataTable();
	//Adiciona Coluna
	tabela.addColumn('string','Mês');
	tabela.addColumn('number','Gastos');

	//Adiciona Linhas
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

	//Opções de visualização
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

	//Desenha grafico
	let grafico = new google.visualization.LineChart(graficoLinha);
	grafico.draw(tabela,opcoes)
	
}

function desenharColuna(){

	let graficoColuna =  document.querySelector("#graficoColuna")

	//Monta a tabela com as linha e colunas
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

	//Opções de visualização
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

	//Desenha grafico
	let grafico = new google.visualization.ColumnChart(graficoColuna);
	grafico.draw(tabela,opcoes);	
}


function desenhaGraficoBarras(){
	let graficoBarras = document.querySelector("#graficoBarras")
	let tabela = new google.visualization.DataTable();

	//Colunas
	tabela.addColumn('string','Categoria');
	tabela.addColumn('number','Valores');
	tabela.addColumn({type: 'string',role: 'annotation'});
	tabela.addColumn({type: 'string',role: 'style'});

	//Linhas
	tabela.addRows([
		['Educação',2000,'R$2.000,00','blue'],
		['Transporte',500,'R$500,00','grey'],
		['Lazer',230,'R$230,00','grey'],
		['Saúde',50,'R$50,00','grey'],
		['Cartão de Crédito',900,'R$900,00','#8904B1'],
		['Alimentação',260,'R$260','grey']
	]);

	//Ordena a tabela pela coluna de indice 1
	tabela.sort([{column:1,desc: true}])

	//Opcoes de visualização
	let opcoes = {
		title: 'Tipos de Gastos',
		height: 400,
		width: 800,
		legend: 'none',
		vAxis: {
			gridlines:{color: 'transparent',
						count: 0
					}
		},
		hAxis: {
			gridlines: {color: 'transparent'},
			format: 'currency',
			textPosition: 'none'
		},
		annotations: {
			alwaysOutside: true
		}
	}

	//Desenhando Grafico
	let grafico = new google.visualization.BarChart(graficoBarras)
	grafico.draw(tabela,opcoes)
}

function desenharGraficoBarrasJson(){

	let dadosJson = $.ajax({
		url : 'dados.json',
		dataType: 'json',
		async: false
	}).responseText;

	let graficoBarrasJson = document.querySelector("#graficoBarrasJson");
	let tabela = new google.visualization.DataTable(dadosJson);
	let grafico = google.visualization.BarChart(graficoBarrasJson);
	grafico.draw(tabela)
}

//Funcao que desenha todos os grafico
function desenharGrafico(){
	desenharPizza();
	desenharLinha();
	desenharColuna();
	desenhaGraficoBarras();
	desenharGraficoBarrasJson()
}