function postLoadContent(){
	let alpha = new UnitFactory.UnitPlan(
		UnitTypes.alpha, 
	 	60 * 60,
	 	ItemStack.with(
			Items.silicon, 100,
			Items.copper, 100,
			Items.lead, 100
		)
	);

	
	Blocks.airFactory.plans.add(alpha);
	new TechTree.TechNode(Blocks.airFactory.techNode, UnitTypes.alpha, UnitTypes.mono.techNode.requirements);

	Blocks.multiplicativeReconstructor.addUpgrade(UnitTypes.alpha, UnitTypes.beta);
	new TechTree.TechNode(UnitTypes.alpha.techNode, UnitTypes.beta, UnitTypes.mega.techNode.requirements);

	Blocks.tetrativeReconstructor.addUpgrade(UnitTypes.beta, UnitTypes.gamma);
	new TechTree.TechNode(UnitTypes.beta.techNode, UnitTypes.gamma, UnitTypes.oct.techNode.requirements);
	
	//In erekir fashion, since i cant really edit values, this is how its done, why? idk
	
	//shipFabricator has `configurable = false` & i dont want to touch that
	Blocks.mechRefabricator.addUpgrade(UnitTypes.elude, UnitTypes.evoke);
	new TechTree.TechNode(UnitTypes.cleroi.techNode, UnitTypes.evoke, ItemStack.with(Items.beryllium, 0));
	
	Blocks.primeRefabricator.addUpgrade(UnitTypes.evoke, UnitTypes.incite);
	new TechTree.TechNode(UnitTypes.obviate.techNode, UnitTypes.incite, ItemStack.with(Items.beryllium, 0));
	
	//UnitAssembler Dont work, it would require teir 2 module
	Blocks.primeRefabricator.addUpgrade(UnitTypes.disrupt, UnitTypes.emanate);
	new TechTree.TechNode(UnitTypes.disrupt.techNode, UnitTypes.emanate, ItemStack.with(Items.beryllium, 0));
}

Events.on(ModContentLoadEvent, () => {
	postLoadContent();
});
