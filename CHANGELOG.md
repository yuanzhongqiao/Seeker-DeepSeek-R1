# Change Log

All notable changes to the "seeker" VS Code extension.

## [2.0.0] - 2024-01-29

### Added
- Added custom model support through settings
- Implemented faster streaming responses in chat interface

### Enhanced
- Added progress tracking for model downloads

### Fixed
- Improved error handling for model downloads
- Better handling of model switching
- Fixed status bar cleanup issues

## [1.2.0] - 2024-01-29

### Added
- Added status bar progress for model downloads
- Implemented modern chat interface with VS Code theming

## [1.1.0] - 2024-01-28

### Added
- Integrated full DeepSeek-R1 model support with Ollama runtime
- Added support for all DeepSeek-R1 model sizes (1.5B to 671B parameters)

### Enhanced
- Improved chat UI with message timestamps
- Added auto-resizing message input
- Added keyboard shortcuts (Enter to send, Shift+Enter for new line)

## [1.0.0] - 2024-01-28

### Added
- Initial release of Seeker extension
- Basic DeepSeek integration
- Simple chat interface
- VS Code workspace integration

### Security
- Implemented local-only execution
- Added model validation
- Secured file handling