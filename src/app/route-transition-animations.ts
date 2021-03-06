import { trigger, transition,  style, query, group, animate, animateChild } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerAnimation', [
    transition('One => Two, Two => Three, Three => One', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('700ms ease-out', style({ right: '100%', opacity: 0 }))]),
			query(':enter', [animate('700ms ease-out', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),
	transition('Three => Two, Two => One, One => Three', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('700ms ease-out', style({ left: '100%', opacity: 0 }))]),
			query(':enter', [animate('700ms ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),

	transition('Start => Two, Start => One, Start => Three', [
		style({ position: 'fixed' }),
		query(':enter, :leave', [
			style({
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ top: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('700ms ease-out', style({ top: '100%', opacity: 0 }))]),
			query(':enter', [animate('700ms ease-out', style({ top: '10%', width: "80%", opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])

]);