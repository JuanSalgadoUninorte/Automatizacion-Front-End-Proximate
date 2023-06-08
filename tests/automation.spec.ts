import { test, expect } from '@playwright/test';

test('Credenciales incorrectas', async ({ page }) => {
  await page.goto('http://intranet.proximateapps.net.s3-website-us-east-1.amazonaws.com');
  await page.waitForLoadState('networkidle');
  await page.locator('//*/mat-toolbar//*[contains(text(), "Iniciar sesión")]').click();
  await page.getByPlaceholder('pat@example.com').click();
  await page.getByPlaceholder('pat@example.com').fill('qatester@proximateapps.com');
  await page.getByLabel('Enter your password *').click();
  await page.getByLabel('Enter your password *').fill('Security200*');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.locator('//*[@id="mat-dialog-0"]/app-login-dialog/div/div/div[2]/div[2]')).toHaveText('Fallo en las credenciales');
});

test('Credenciales correctas', async ({ page }) => {
  await page.goto('http://intranet.proximateapps.net.s3-website-us-east-1.amazonaws.com');
  await page.waitForLoadState('networkidle');
  await page.locator('//*/mat-toolbar//*[contains(text(), "Iniciar sesión")]').click();
  await page.getByPlaceholder('pat@example.com').click();
  await page.getByPlaceholder('pat@example.com').fill('qatester@proximateapps.com');
  await page.getByLabel('Enter your password *').click();
  await page.getByLabel('Enter your password *').fill('Security2050*');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.waitForLoadState('networkidle');
});

test('Cambio de clave insatisfactorio', async ({ page }) => {
  await page.goto('http://intranet.proximateapps.net.s3-website-us-east-1.amazonaws.com');
  await page.waitForLoadState('networkidle');
  await page.locator('//*/mat-toolbar//*[contains(text(), "Iniciar sesión")]').click();
  await page.getByPlaceholder('pat@example.com').click();
  await page.getByPlaceholder('pat@example.com').fill('qatester@proximateapps.com');
  await page.getByLabel('Enter your password *').click();
  await page.getByLabel('Enter your password *').fill('Security2050*');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('button').filter({ hasText: 'account_circle' }).click();
  await page.getByRole('menuitem', { name: 'Cambiar contraseña' }).click();
  await page.locator('div').filter({ hasText: /^Ingrese su email \*$/ }).nth(2).click();
  await page.getByPlaceholder('pat@example.com').fill('qatester@proximateapps.com');
  await page.getByLabel('Contraseña (Ingrese nueva contraseña) *').click();
  await page.getByLabel('Contraseña (Ingrese nueva contraseña) *').fill('Securit@s2023*');
  await page.getByLabel('Contraseña (Confirme su nueva contraseña) *').click();
  await page.getByLabel('Contraseña (Confirme su nueva contraseña) *').fill('Securit@s2023*');
  await page.getByRole('button', { name: 'Cambiar' }).click();
  await page.getByRole('button').filter({ hasText: 'account_circle' }).click();
  await page.getByRole('menuitem', { name: 'Cerrar sesión' }).click();
  await page.waitForLoadState('networkidle');
  await page.locator('//*/mat-toolbar//*[contains(text(), "Iniciar sesión")]').click();
  await page.getByPlaceholder('pat@example.com').click();
  await page.getByPlaceholder('pat@example.com').fill('qatester@proximateapps.com');
  await page.getByLabel('Enter your password *').click();
  await page.getByLabel('Enter your password *').fill('Security200*');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.locator('//*[@id="mat-dialog-1"]/app-login-dialog/div/div/div[2]/div[2]')).toHaveText('Fallo en las credenciales');

});

test('Cambio de nombre de ticket', async ({ page }) => {
  await page.goto('http://intranet.proximateapps.net.s3-website-us-east-1.amazonaws.com/');
  await page.waitForLoadState('networkidle');
  await page.locator('//*/mat-toolbar//*[contains(text(), "Iniciar sesión")]').click();
  await page.getByPlaceholder('pat@example.com').fill('qatester@proximateapps.com');
  await page.getByLabel('Enter your password *').fill('Security2050*');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('button').filter({ hasText: 'menu' }).click();
  await page.getByRole('button', { name: 'Tickets' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Tickets' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('gridcell', { name: 'No puedo acceder Usuario de pruebas' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('heading', { name: '1' }).click();
  await page.getByPlaceholder('Ingrese un título').click();
  await page.getByPlaceholder('Ingrese un título').press('Shift+Home');
  await page.getByPlaceholder('Ingrese un título').fill('Ticket #1');
  await page.getByRole('button', { name: 'Guardar' }).click();
  await page.getByRole('button').filter({ hasText: 'menu' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Tickets' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Tickets' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.locator('//*/mat-cell[2]')).toHaveText('No puedo acceder Usuario de pruebas');
});