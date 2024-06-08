import { goto } from '$app/navigation';

async function handleAnchorClick(
	event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement },
	route: string
) {
	if (route !== '/') {
		return;
	}

	// To enable smooth scrolling
	event.preventDefault();

	const anchor = event.currentTarget;

	const id = anchor?.getAttribute('href')?.substring(2);

	if (id) {
		const target = document.getElementById(id);
		await goto(`/#${id}`, { replaceState: true, noScroll: true, keepFocus: true });
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
}

export default handleAnchorClick;
