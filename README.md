<h1>AFT boilerplate v.1.0.0 (Vite)</h1>
<span style="background-color:#149eca; color:white; padding: 4px 8px; border-radius: 4px"><strong>React</strong></span>
<span style="background-color:#2f74c0; color:white; padding: 4px 8px; border-radius: 4px"><strong>TS</strong></span>
<span style="background-color:#b236ec; color:#f2cc2e; padding: 4px 8px; border-radius: 4px"><strong>Vite</strong></span>
<span style="background-color:#101828; color:white; padding: 4px 8px; border-radius: 4px"><strong>ABNB 
ESLint</strong></span>
<span style="background-color:#c695c8; color:#1a2b34; padding: 4px 8px; border-radius: 
4px"><strong>Prettier</strong></span>
<br/>

---------------------------------------------------------------
<h2>13 Jun 2023</h2>
<h3>Initial commit</h3>
<p>Using latest NPM versions</p>

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.24",
    "@types/react-dom": "^18.0.8",
    "@typescript-eslint/eslint-plugin": "^5.59.11",
    "@typescript-eslint/parser": "^5.59.11",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "8.2.2",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-airbnb-typescript": "^17.0.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.28.0",
    "eslint-plugin-react-hooks": "^4.3.0",
    "prettier": "^2.8.8",
    "typescript": "^5.1.3",
    "vite": "^4.3.9",
    "vite-tsconfig-paths": "^4.2.0"
  }
}
```
!! eslint locked at 8.2.2, as 8.4.x cause error in Webstorm

<strong>WS settings</strong>
<ul>
    <li>ESLint settings -> manual ESLint conf -> set ESLint package folder</li>
    <li>Editor -> code style -> hard wrap at 100</li>
    <li>Editor -> code style -> TS -> use single quotes always + trail comma "Add when 
multiline"</li>
    <li>Lang and frameworks -> JS -> Prettier -> on save</li>
</ul>

<strong>BUILD</strong>
<ul>
    <li>files in "assets" will be compiled</li>
    <li>files in "public" will be copied to "dist" as is</li>
</ul>

