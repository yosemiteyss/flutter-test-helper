import * as vscode from 'vscode';
import { DART_CLASS_REGEX, DART_ENUM_REGEX, CREATE_TEST_FOR_CLASS_COMMAND_ID } from '../constants';
import { ClassInfo } from '../types';

export class DartTestCodeLensProvider implements vscode.CodeLensProvider {
  provideCodeLenses(
    document: vscode.TextDocument,
    token: vscode.CancellationToken
  ): vscode.CodeLens[] {
    const lenses: vscode.CodeLens[] = [];
    const lines = document.getText().split(/\r?\n/);

    for (let i = 0; i < lines.length; i++) {
      // Check for classes
      let match = lines[i].match(DART_CLASS_REGEX);
      if (match) {
        const [fullMatch, whole, className] = match;
        const range = new vscode.Range(
          new vscode.Position(i, 0),
          new vscode.Position(i, whole.length)
        );

        const command: vscode.Command = {
          title: '$(beaker) Create test file',
          tooltip: `Create test file for ${className}`,
          command: CREATE_TEST_FOR_CLASS_COMMAND_ID,
          arguments: [{ uri: document.uri.toString(), className } as ClassInfo]
        };

        lenses.push(new vscode.CodeLens(range, command));
        continue;
      }

      // Check for enums
      match = lines[i].match(DART_ENUM_REGEX);
      if (match) {
        const [fullMatch, whole, enumName] = match;
        const range = new vscode.Range(
          new vscode.Position(i, 0),
          new vscode.Position(i, whole.length)
        );

        const command: vscode.Command = {
          title: '$(beaker) Create test file',
          tooltip: `Create test file for ${enumName}`,
          command: CREATE_TEST_FOR_CLASS_COMMAND_ID,
          arguments: [{ uri: document.uri.toString(), className: enumName } as ClassInfo]
        };

        lenses.push(new vscode.CodeLens(range, command));
      }
    }

    return lenses;
  }
}

