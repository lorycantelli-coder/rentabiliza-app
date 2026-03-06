const playwright = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();

  console.log('Acessando o site...');
  await page.goto('https://brand.aioxsquad.ai/', { waitUntil: 'networkidle' });

  // Screenshot da página inicial
  await page.screenshot({ path: 'analise-brand/01-homepage.png', fullPage: true });
  console.log('✓ Screenshot homepage');

  // Pegar título e descrição
  const title = await page.title();
  console.log('Título:', title);

  // Pegar todos os links do menu/navegação
  const links = await page.evaluate(() => {
    const navLinks = Array.from(document.querySelectorAll('nav a, [role="navigation"] a, header a'));
    return navLinks.map(link => ({
      text: link.textContent.trim(),
      href: link.href
    }));
  });

  console.log('\nLinks encontrados:', links.length);
  links.forEach((link, i) => console.log(`  ${i+1}. ${link.text} -> ${link.href}`));

  // Pegar todas as seções/IDs na página
  const sections = await page.evaluate(() => {
    const allSections = Array.from(document.querySelectorAll('[id]'));
    return allSections.map(section => ({
      id: section.id,
      tag: section.tagName.toLowerCase(),
      text: section.textContent.substring(0, 100).trim()
    }));
  });

  console.log('\nSeções encontradas:', sections.length);
  sections.forEach((section, i) => {
    if (section.id) console.log(`  ${i+1}. #${section.id} (${section.tag})`);
  });

  // Tentar clicar em abas/tabs se existirem
  const tabs = await page.evaluate(() => {
    const tabElements = Array.from(document.querySelectorAll('[role="tab"], .tab, [data-tab]'));
    return tabElements.map(tab => ({
      text: tab.textContent.trim(),
      selector: tab.className || tab.id || 'unknown'
    }));
  });

  console.log('\nAbas/Tabs encontradas:', tabs.length);
  tabs.forEach((tab, i) => console.log(`  ${i+1}. ${tab.text}`));

  // Capturar HTML para análise
  const html = await page.content();
  fs.writeFileSync('analise-brand/page-source.html', html);
  console.log('✓ HTML salvo');

  // Pegar estrutura de navegação lateral (sidebar)
  const sidebarLinks = await page.evaluate(() => {
    const sidebar = document.querySelector('nav, aside, [class*="sidebar"], [class*="menu"]');
    if (sidebar) {
      const links = Array.from(sidebar.querySelectorAll('a'));
      return links.map(link => ({
        text: link.textContent.trim(),
        href: link.href
      }));
    }
    return [];
  });

  console.log('\nLinks da Sidebar:', sidebarLinks.length);
  sidebarLinks.forEach((link, i) => console.log(`  ${i+1}. ${link.text}`));

  await browser.close();
  console.log('\n✅ Análise concluída!');
})();
