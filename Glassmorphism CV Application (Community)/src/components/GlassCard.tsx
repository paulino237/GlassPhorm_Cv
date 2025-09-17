import React from 'react';

interface GlassCardProps {
	children?: React.ReactNode;
	className?: string;
	variant?: 'ultra-thin' | 'medium' | 'thick';
	hover?: boolean;
}

export function GlassCard({ 
	children, 
	className = '', 
	variant = 'medium',
	hover = true 
}: GlassCardProps) {
	const variantClasses = {
		'ultra-thin': 'glass-ultra-thin',
		'medium': 'glass-medium',
		'thick': 'glass-thick'
	};

	return (
		<div className={`
			${variantClasses[variant]}
			rounded-3xl 
			${hover ? 'glass-hover-lift' : ''}
			relative
			overflow-hidden
			${className}
		`}>
			{/* Inner glow effect */}
			<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />
			
			{/* Content */}
			<div className="relative z-10">
				{children}
			</div>
		</div>
	);
}