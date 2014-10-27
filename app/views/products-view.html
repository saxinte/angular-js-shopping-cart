<div class="row">

	<div class="col-xs-12" ng-show="Products.errorMessage">
		<div class="alert alert-danger">{{Products.errorMessage}}</div>
	</div>

	<div class="col-xs-3" ng-hide="Products.errorMessage">
		
		<div class="list-group">
			<span class="list-group-item">Filter by name</span>
			<div class="list-group-item">
				<input type="text" class="form-control" ng-model="queryFilter">
			</div>
		</div>

		<div class="list-group">

			<span class="list-group-item">Size filter ({{Products.teeSizes.length}} found)</span>

			<span class="list-group-item">
				<span class="badge">{{ Products.tees | filter:queryFilter | TeePricesFilter:Products.priceFilter | lengthFilter }}</span>
				<input type="radio" name="size-filter" ng-model="Products.sizeFilter" id="all-sizes" value="All">
				<label for="all-sizes">All</label>
			</span>

			<span class="list-group-item" ng-repeat="size in Products.teeSizes | SortFilter">
				<span class="badge">{{ Products.tees | filter:queryFilter | TeeSizesFilter:size | TeePricesFilter:Products.priceFilter | lengthFilter }}</span>
				<input type="radio" name="size-filter" ng-model="Products.sizeFilter" id="{{size}}" value="{{size}}">
				<label for="{{size}}">{{size}}</label>
			</span>

		</div>

		<div class="list-group">

			<span class="list-group-item">Price range</span>

			<span class="list-group-item">
				<span class="badge">{{ Products.tees | filter:queryFilter | TeeSizesFilter:Products.sizeFilter | lengthFilter }}</span>
				<input type="radio" name="price-filter" ng-model="Products.priceFilter" id="all-prices" value="All">
				<label for="all-prices">All</label>
			</span>

			<span class="list-group-item">
				<span class="badge">{{ Products.tees | filter:queryFilter | TeeSizesFilter:Products.sizeFilter | TeePricesFilter:[0,10] | lengthFilter }}</span>
				<input type="radio" name="price-filter" ng-model="Products.priceFilter" id="price-filter-10" ng-value="[0,10]">
				<label for="price-filter-10">Under $10</label>
			</span>

			<span class="list-group-item">
				<span class="badge">{{ Products.tees | filter:queryFilter | TeeSizesFilter:Products.sizeFilter | TeePricesFilter:[10,25] | lengthFilter }}</span>
				<input type="radio" name="price-filter" ng-model="Products.priceFilter" id="price-filter-10-25" ng-value="[10,25]">
				<label for="price-filter-10-25">$10 - $25</label>
			</span>

			<span class="list-group-item">
				<span class="badge">{{ Products.tees | filter:queryFilter | TeeSizesFilter:Products.sizeFilter | TeePricesFilter:[25,50] | lengthFilter }}</span>
				<input type="radio" name="price-filter" ng-model="Products.priceFilter" id="price-filter-25-50" ng-value="[25,50]">
				<label for="price-filter-25-50">$25 - $50</label>
			</span>

			<span class="list-group-item">
				<span class="badge">{{ Products.tees | filter:queryFilter | TeeSizesFilter:Products.sizeFilter | TeePricesFilter:[50] | lengthFilter }}</span>
				<input type="radio" name="price-filter" ng-model="Products.priceFilter" id="price-filter-over-50" ng-value="[50]">
				<label for="price-filter-over-50">Over $50</label>
			</span>

		</div>
		
	</div>

	<div class="col-xs-9" ng-hide="Products.errorMessage">
		<div class="row">
			<div class="col-xs-12">
				<div class="alert alert-warning">Your search: Size: <b class="highlight">{{Products.sizeFilter}}</b> - <b>{{ Products.tees | filter:queryFilter | TeeSizesFilter:Products.sizeFilter | lengthFilter }}</b> found(s)</div>
				<div></div>
			</div>
		</div>
		<div class="row">
			<div class="tees-list">
				<div class="tee-item" ng-repeat="tee in Products.tees | orderBy:'name' | TeeSizesFilter:Products.sizeFilter | TeePricesFilter:Products.priceFilter | filter:queryFilter">
					<tee-directive></tee-directive>
				</div>
			</div>
		</div>
	</div>

</div>