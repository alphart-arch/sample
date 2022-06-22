const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/list.svelte"),
	() => import("../../../src/routes/test.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	,

	,

	// src/routes/list.svelte
	[/^\/list\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/test.svelte
	[/^\/test\/?$/, [c[0], c[4]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];