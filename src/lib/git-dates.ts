import { execSync } from 'child_process';
import path from 'path';

export interface PageDateInfo {
  lastModified: Date;
  path: string;
}

/**
 * Get the last modified date of a file from git history
 * Falls back to current date if git is not available
 */
export function getFileLastModified(filePath: string): Date {
  try {
    // Try to get the last commit date for this file
    const gitCommand = `git log -1 --format=%aI -- "${filePath}"`;
    const result = execSync(gitCommand, {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();

    if (result) {
      return new Date(result);
    }
  } catch (error) {
    // Git not available or file not tracked, use current date
    console.warn(`Could not get git date for ${filePath}, using current date`);
  }

  return new Date();
}

/**
 * Get last modified dates for all main pages
 */
export function getPageDates(): Record<string, Date> {
  const appDir = path.join(process.cwd(), 'src/app');

  const pages = {
    home: getFileLastModified(path.join(appDir, 'page.tsx')),
    mediation: getFileLastModified(path.join(appDir, 'mediation/page.tsx')),
    childCustody: getFileLastModified(path.join(appDir, 'child-custody/page.tsx')),
    childSupport: getFileLastModified(path.join(appDir, 'child-support/page.tsx')),
    cases: getFileLastModified(path.join(appDir, 'cases/page.tsx')),
    about: getFileLastModified(path.join(appDir, 'about/page.tsx')),
    articles: getFileLastModified(path.join(appDir, 'articles/page.tsx')),
    contact: getFileLastModified(path.join(appDir, 'contact/page.tsx')),
  };

  return pages;
}