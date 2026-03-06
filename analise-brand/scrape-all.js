const playwright = require('playwright');
const fs = require('fs');

const pages = [
  // BRANDBOOK
  { name: '0.Guidelines', url: 'https://brand.aioxsquad.ai/brandbook/guidelines' },
  { name: '1.Movimento', url: 'https://brand.aioxsquad.ai/brandbook/movimento' },
  { name: '2.Foundations', url: 'https://brand.aioxsquad.ai/brandbook/foundations' },
  { name: '3.Logo', url: 'https://brand.aioxsquad.ai/brandbook/logo' },
  { name: '4.Icons', url: 'https://brand.aioxsquad.ai/brandbook/icons' },
  { name: '5.Moodboard', url: 'https://brand.aioxsquad.ai/brandbook/moodboard' },
  { name: '6.BrandStrategy', url: 'https://brand.aioxsquad.ai/brandbook/aiox' },

  // COMPONENTS
  { name: '7.Components', url: 'https://brand.aioxsquad.ai/brandbook/components' },
  { name: '8.Buttons', url: 'https://brand.aioxsquad.ai/brandbook/buttons' },
  { name: '9.Cards', url: 'https://brand.aioxsquad.ai/brandbook/cards' },
  { name: '10.Forms', url: 'https://brand.aioxsquad.ai/brandbook/forms' },
  { name: '11.Feedback', url: 'https://brand.aioxsquad.ai/brandbook/feedback' },
  { name: '12.States', url: 'https://brand.aioxsquad.ai/brandbook/states' },
  { name: '13.Tables', url: 'https://brand.aioxsquad.ai/brandbook/tables' },
  { name: '14.Lists', url: 'https://brand.aioxsquad.ai/brandbook/lists' },
  { name: '15.Charts', url: 'https://brand.aioxsquad.ai/brandbook/charts' },
  { name: '16.Sections', url: 'https://brand.aioxsquad.ai/brandbook/sections' },
  { name: '17.Advanced', url: 'https://brand.aioxsquad.ai/brandbook/advanced' },
  { name: '18.Effects', url: 'https://brand.aioxsquad.ai/brandbook/effects' },
  { name: '19.Patterns', url: 'https://brand.aioxsquad.ai/brandbook/patterns' },
  { name: '20.Templates', url: 'https://brand.aioxsquad.ai/brandbook/templates' },
  { name: '21.Motion', url: 'https://brand.aioxsquad.ai/brandbook/motion' },
  { name: '22.SEO', url: 'https://brand.aioxsquad.ai/brandbook/seo' },
  { name: '23.VFX', url: 'https://brand.aioxsquad.ai/brandbook/vfx' },

  // EDITORIAL
  { name: '24.Editorial', url: 'https://brand.aioxsquad.ai/brandbook/editorial' },
];

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const analysis = [];

  for (const pageInfo of pages) {
    console.log(`\n📄 Analisando: ${pageInfo.name}...`);

    try {
      await page.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000); // Esperar carregamento

      // Screenshot
      await page.screenshot({
        path: `analise-brand/screenshot-${pageInfo.name}.png`,
        fullPage: true
      });

      // Extrair conteúdo
      const content = await page.evaluate(() => {
        // Pegar todos os headings
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
          .map(h => ({
            level: h.tagName,
            text: h.textContent.trim()
          }));

        // Pegar texto principal
        const mainContent = document.querySelector('main, [role="main"], .content, article');
        const textContent = mainContent ? mainContent.textContent.substring(0, 500).trim() : '';

        // Pegar cores mencionadas
        const colorElements = Array.from(document.querySelectorAll('[class*="color"], [style*="color"], [style*="background"]'));

        return {
          title: document.title,
          headings: headings.slice(0, 10),
          textPreview: textContent,
          colorElementsCount: colorElements.length
        };
      });

      analysis.push({
        page: pageInfo.name,
        url: pageInfo.url,
        ...content
      });

      console.log(`  ✓ Screenshot salvo`);
      console.log(`  ✓ Título: ${content.title}`);
      console.log(`  ✓ Headings: ${content.headings.length}`);

    } catch (error) {
      console.error(`  ✗ Erro ao acessar ${pageInfo.name}:`, error.message);
      analysis.push({
        page: pageInfo.name,
        url: pageInfo.url,
        error: error.message
      });
    }
  }

  // Salvar análise completa
  fs.writeFileSync('analise-brand/analysis-complete.json', JSON.stringify(analysis, null, 2));
  console.log('\n✅ Análise completa salva em analysis-complete.json');

  await browser.close();
})();
