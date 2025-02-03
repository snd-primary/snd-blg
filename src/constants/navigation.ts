//ナビゲーションリンク
export type NavItem = {
	label: string;
	path: string;
};

export const NAVIGATION_ITEMS: NavItem[] = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "Articles",
		path: "/articles",
	},
	{
		label: "Articles",
		path: "/articles",
	},
	{
		label: "Categories",
		path: "/categories",
	},
	{
		label: "Tags",
		path: "/tags",
	},
	{
		label: "Profile",
		path: "/profile",
	},
];
