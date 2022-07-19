import CodeBlock from '@tiptap/extension-code-block';
import type { CodeBlockOptions } from '@tiptap/extension-code-block';

export interface CodeBlockLowlightOptions extends CodeBlockOptions {
	lowlight: any;
	defaultLanguage: string | null | undefined;
}

export const CodeBlockLowlight = CodeBlock.extend<CodeBlockLowlightOptions>({
	addOptions() {
		return {
			...this.parent?.(),
			lowlight: {},
			defaultLanguage: null
		};
	},

	addProseMirrorPlugins() {
		return [...(this.parent?.() || [])];
	}
});
