

(function(){
	
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		
		this.products = gems;
		
	});
	
	
	app.controller('PanelController', function(){
		this.tab = 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		
		
		this.isSelected = function(checkTab){
			
			return this.tab === checkTab;
			
		};
		
	});
	
	var gems =[ {
			
				name: 'Valariyon',
				price: 3.49,
				description: 'a special gem with a stupid name',
				canPurchase: true,
				soldout: false
				
			   },
			   
			   {
					
				name: 'Chromonium',
			    price: 4.40,
				description: 'a special gem with a stupid name',
				canPurchase: true,
				soldout: false
					
			   },
				   
			   {
						
				name: 'Ruby',
				price: 2,
				description: 'a special gem with a stupid name',
				canPurchase: true,
				soldout: false
						
			   },
					   
			   {
							
				name: 'Ricciardo',
				price: 3.992,
				description: 'a special gem with a stupid name',
				canPurchase: true,
				soldout: false
							
			   },
	];
	
})();