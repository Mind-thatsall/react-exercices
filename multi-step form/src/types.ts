export type step2States = {
	checked: boolean;
	setChecked: (checked: boolean) => void;
	selectedPlan: { name: string; price: number };
	setSelectedPlan: ({
		name,
		displayName,
		price,
	}: {
		name: string;
		displayName: string;
		price: number;
	}) => void;
	plans: {
		arcade: {
			name: string;
			displayName: string;
			price: number;
		};
		advanced: {
			name: string;
			displayName: string;
			price: number;
		};
		pro: {
			name: string;
			displayName: string;
			price: number;
		};
	};
};

export type Addon = {
	choosen: boolean;
	name: string;
	price: number;
	priceString: string;
};

export type step3States = {
	selectedAddons: Addon[];
	setSelectedAddons: ([]: Addon[]) => void;
	addons: {
		online: {
			choosen: boolean;
			name: string;
			price: number;
			priceString: string;
		};
		storage: {
			choosen: boolean;
			name: string;
			price: number;
			priceString: string;
		};
		profile: {
			choosen: boolean;
			name: string;
			price: number;
			priceString: string;
		};
	};
};

export type step4States = {
	checked: boolean;
	selectedPlan: { name: string; displayName: string; price: number };
	selectedAddons: Addon[];
};