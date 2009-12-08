(function(){
var $gwt_version = "1.7.1";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
$stats && $stats({moduleName:'scrumzilla',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var $intern_49 = '', $intern_56 = '\n ', $intern_137 = ' ', $intern_24 = ' and override saveSelectedWidgetsLocationAndStyle(), restoreSelectedWidgetsLocation() and restoreSelectedWidgetsStyle()', $intern_31 = ' is not currently supported by this controller', $intern_112 = '"', $intern_23 = "'; Please create your own ", $intern_77 = "'; please report this bug to the GWT team", $intern_36 = '(', $intern_139 = '(null handle)', $intern_37 = ')', $intern_34 = ') - (', $intern_35 = ') ]', $intern_50 = '): ', $intern_70 = ',', $intern_33 = ', ', $intern_156 = ', Row size: ', $intern_269 = ', Size: ', $intern_116 = '-', $intern_115 = '-9223372036854775808', $intern_113 = '/ by zero', $intern_114 = '0', $intern_10 = '0px', $intern_249 = '100%', $intern_1 = '2.6.5', $intern_227 = '20px', $intern_73 = ':', $intern_25 = ': ', $intern_266 = '=', $intern_0 = '@', $intern_379 = 'AbsolutePanel', $intern_280 = 'AbsolutePositionDropController', $intern_281 = 'AbsolutePositionDropController$Draggable', $intern_286 = 'AbstractArea', $intern_299 = 'AbstractCollection', $intern_295 = 'AbstractDragController', $intern_278 = 'AbstractDropController', $intern_486 = 'AbstractHashMap', $intern_487 = 'AbstractHashMap$EntrySet', $intern_488 = 'AbstractHashMap$EntrySetIterator', $intern_490 = 'AbstractHashMap$MapEntryNull', $intern_491 = 'AbstractHashMap$MapEntryString', $intern_282 = 'AbstractIndexedDropController', $intern_300 = 'AbstractList', $intern_492 = 'AbstractList$IteratorImpl', $intern_287 = 'AbstractLocation', $intern_485 = 'AbstractMap', $intern_493 = 'AbstractMap$1', $intern_494 = 'AbstractMap$1$1', $intern_489 = 'AbstractMapEntry', $intern_279 = 'AbstractPositioningDropController', $intern_368 = 'AbstractSet', $intern_241 = 'Add', $intern_234 = 'Add Story', $intern_237 = 'Add Task', $intern_265 = 'Add not supported on this collection', $intern_267 = 'Add not supported on this list', $intern_445 = 'AddStoryPanel', $intern_446 = 'AddStoryPanel$1', $intern_447 = 'AddStoryPanel$2', $intern_448 = 'AddStoryPanel$3', $intern_449 = 'AddStoryPanel$4', $intern_450 = 'AddTaskToStoryPanel', $intern_451 = 'AddTaskToStoryPanel$1', $intern_452 = 'AddTaskToStoryPanel$2', $intern_453 = 'AddTaskToStoryPanel$3', $intern_454 = 'AddTaskToStoryPanel$4', $intern_61 = 'An event type', $intern_317 = 'Animation', $intern_320 = 'Animation$1', $intern_315 = 'Animation;', $intern_471 = 'ArithmeticException', $intern_301 = 'ArrayList', $intern_473 = 'ArrayStoreException', $intern_474 = 'Boolean', $intern_283 = 'BoundaryDropController', $intern_382 = 'Button', $intern_381 = 'ButtonBase', $intern_191 = 'CENTER', $intern_220 = 'CLOSED', $intern_57 = 'CSS1Compat', $intern_230 = 'Cancel', $intern_158 = 'Cannot create a column with a negative index: ', $intern_159 = 'Cannot create a row with a negative index: ', $intern_143 = 'Cannot set a new parent without first clearing the old parent', $intern_383 = 'CellPanel', $intern_476 = 'Class', $intern_477 = 'ClassCastException', $intern_338 = 'ClickEvent', $intern_350 = 'CloseEvent', $intern_419 = 'CommandCanceledException', $intern_420 = 'CommandExecutor', $intern_422 = 'CommandExecutor$1', $intern_423 = 'CommandExecutor$2', $intern_421 = 'CommandExecutor$CircularIterator', $intern_495 = 'Comparators$1', $intern_378 = 'ComplexPanel', $intern_384 = 'Composite', $intern_154 = 'Composite.initWidget() may only be called once.', $intern_288 = 'CoordinateLocation', $intern_205 = 'DIV', $intern_329 = 'DOMImpl', $intern_331 = 'DOMImplOpera', $intern_330 = 'DOMImplStandard', $intern_130 = 'DOMMouseScroll', $intern_351 = 'DefaultHandlerRegistration', $intern_296 = 'DeferredMoveCommand', $intern_226 = 'Description:', $intern_337 = 'DomEvent', $intern_340 = 'DomEvent$Type', $intern_478 = 'Double', $intern_254 = 'Drag Label', $intern_297 = 'DragContext', $intern_304 = 'DropControllerCollection', $intern_305 = 'DropControllerCollection$Candidate', $intern_303 = 'DropControllerCollection$Candidate;', $intern_357 = 'DynamicHeightFeature', $intern_372 = 'ElementMapperImpl', $intern_373 = 'ElementMapperImpl$FreeNode', $intern_359 = 'Enum', $intern_63 = 'Event type', $intern_424 = 'Event$NativePreviewEvent', $intern_312 = 'Exception', $intern_390 = 'FlexTable', $intern_392 = 'FlexTable$FlexCellFormatter', $intern_393 = 'FocusPanel', $intern_380 = 'FocusWidget', $intern_358 = 'Gadget', $intern_335 = 'GwtEvent', $intern_339 = 'GwtEvent$Type', $intern_389 = 'HTMLTable', $intern_396 = 'HTMLTable$1', $intern_391 = 'HTMLTable$CellFormatter', $intern_395 = 'HTMLTable$ColumnFormatter', $intern_352 = 'HandlerManager', $intern_354 = 'HandlerManager$1', $intern_355 = 'HandlerManager$2', $intern_353 = 'HandlerManager$HandlerRegistry', $intern_397 = 'HasHorizontalAlignment$HorizontalAlignmentConstant', $intern_398 = 'HasVerticalAlignment$VerticalAlignmentConstant', $intern_496 = 'HashMap', $intern_497 = 'HashSet', $intern_399 = 'HorizontalPanel', $intern_202 = 'INPUT', $intern_218 = 'IN_PROGRESS', $intern_479 = 'IllegalArgumentException', $intern_480 = 'IllegalStateException', $intern_268 = 'Index: ', $intern_472 = 'IndexOutOfBoundsException', $intern_284 = 'IndexedDropController', $intern_362 = 'JSONArray', $intern_363 = 'JSONBoolean', $intern_364 = 'JSONException', $intern_365 = 'JSONNull', $intern_366 = 'JSONNumber', $intern_367 = 'JSONObject', $intern_369 = 'JSONString', $intern_361 = 'JSONValue', $intern_326 = 'JavaScriptException', $intern_327 = 'JavaScriptObject$', $intern_341 = 'KeyEvent', $intern_342 = 'KeyPressEvent', $intern_394 = 'Label', $intern_223 = 'Local Task', $intern_289 = 'LocationWidgetComparator', $intern_290 = 'LocationWidgetComparator$1', $intern_291 = 'LocationWidgetComparator$3', $intern_498 = 'MapEntryImpl', $intern_400 = 'MenuBar', $intern_401 = 'MenuBar_MenuBarImages_generatedBundle', $intern_402 = 'MenuItem', $intern_435 = 'ModelChangedEvent', $intern_344 = 'MouseDownEvent', $intern_306 = 'MouseDragHandler', $intern_308 = 'MouseDragHandler$1', $intern_307 = 'MouseDragHandler$RegisteredDraggable', $intern_343 = 'MouseEvent', $intern_345 = 'MouseMoveEvent', $intern_346 = 'MouseOutEvent', $intern_347 = 'MouseUpEvent', $intern_208 = 'Need non-null task', $intern_499 = 'NoSuchElementException', $intern_135 = 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.', $intern_481 = 'NullPointerException', $intern_475 = 'Number', $intern_192 = 'ONE_WAY_CORNER', $intern_276 = 'Object', $intern_484 = 'Object;', $intern_232 = 'Ok', $intern_377 = 'Panel', $intern_309 = 'PickupDragController', $intern_310 = 'PickupDragController$SavedWidgetInfo', $intern_386 = 'PopupPanel', $intern_407 = 'PopupPanel$1', $intern_408 = 'PopupPanel$2', $intern_404 = 'PopupPanel$AnimationType', $intern_405 = 'PopupPanel$ResizeAnimation', $intern_406 = 'PopupPanel$ResizeAnimation$1', $intern_348 = 'PrivateMap', $intern_193 = 'ROLL_DOWN', $intern_251 = 'Remove Story', $intern_270 = 'Remove not supported on this list', $intern_409 = 'RootPanel', $intern_411 = 'RootPanel$1', $intern_410 = 'RootPanel$DefaultRootPanel', $intern_155 = 'Row index: ', $intern_324 = 'RuntimeException', $intern_429 = 'ScrumzillaController', $intern_430 = 'ScrumzillaController$1', $intern_431 = 'ScrumzillaController$2', $intern_432 = 'ScrumzillaController$3', $intern_433 = 'ScrumzillaController$4', $intern_442 = 'ScrumzillaLocalTaskEditingUI', $intern_443 = 'ScrumzillaLocalTaskTypeContribution', $intern_470 = 'ScrumzillaTaskTypeRegistry', $intern_455 = 'ScrumzillaUI', $intern_465 = 'ScrumzillaWaveGadget', $intern_466 = 'ScrumzillaWaveGadget$1', $intern_467 = 'ScrumzillaWaveGadgetGadgetImpl', $intern_468 = 'ScrumzillaWaveStateUpdateHandler', $intern_140 = "Should only call onAttach when the widget is detached from the browser's document", $intern_141 = "Should only call onDetach when the widget is attached to the browser's document", $intern_243 = 'Simple Task', $intern_385 = 'SimplePanel', $intern_161 = 'SimplePanel can only contain one child widget', $intern_412 = 'SimplePanel$1', $intern_501 = 'StateUpdateEvent', $intern_245 = 'Story', $intern_211 = 'Story already exists: ', $intern_456 = 'StoryTitlePanel', $intern_457 = 'StoryTitlePanel$1', $intern_52 = 'String', $intern_333 = 'String;', $intern_482 = 'StringBuffer', $intern_322 = 'StringBufferImpl', $intern_323 = 'StringBufferImplAppend', $intern_136 = 'Style names cannot be empty', $intern_59 = 'TBODY', $intern_217 = 'TODO', $intern_58 = 'TR', $intern_437 = 'Task', $intern_207 = 'Task Type Already Registered', $intern_209 = 'Task already exists!', $intern_215 = 'Task description not nullable', $intern_213 = "Task doesn't exist", $intern_216 = 'Task state not nullable', $intern_438 = 'Task$TaskState', $intern_440 = 'Task$TaskState;', $intern_458 = 'TaskPanel', $intern_459 = 'TaskPanel$1', $intern_460 = 'TasksInStatePanel', $intern_461 = 'TasksInStatePanel$TaskListDropController', $intern_414 = 'TextArea', $intern_415 = 'TextBox', $intern_413 = 'TextBoxBase', $intern_142 = "This widget's parent does not implement HasWidgets", $intern_311 = 'Throwable', $intern_319 = 'Timer', $intern_425 = 'Timer$1', $intern_375 = 'UIObject', $intern_22 = "Unable to handle 'initialDraggableParent instanceof ", $intern_21 = 'Unable to handle initialDraggableParent ', $intern_214 = 'Unassigned', $intern_5 = 'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.', $intern_76 = "Unexpected typeof result '", $intern_483 = 'UnsupportedOperationException', $intern_500 = 'Vector', $intern_416 = 'VerticalPanel', $intern_313 = 'VetoDragException', $intern_219 = 'WORK_COMPLETED', $intern_502 = 'WaveFeature', $intern_503 = 'WaveFeature$WaveEventBus', $intern_463 = 'WaveGadget', $intern_376 = 'Widget', $intern_388 = 'Widget;', $intern_292 = 'WidgetArea', $intern_417 = 'WidgetCollection', $intern_418 = 'WidgetCollection$WidgetIterator', $intern_293 = 'WidgetLocation', $intern_426 = 'Window$ClosingEvent', $intern_427 = 'Window$WindowHandlers', $intern_256 = 'X', $intern_69 = '[', $intern_32 = '[ (', $intern_403 = '[C', $intern_302 = '[Lcom.allen_sauer.gwt.dnd.client.', $intern_314 = '[Lcom.google.gwt.animation.client.', $intern_387 = '[Lcom.google.gwt.user.client.ui.', $intern_439 = '[Lcom.scrumzilla.client.model.', $intern_332 = '[Ljava.lang.', $intern_370 = '[[D', $intern_261 = '[]', $intern_110 = '\\"', $intern_111 = '\\\\', $intern_86 = '\\b', $intern_90 = '\\f', $intern_88 = '\\n', $intern_91 = '\\r', $intern_87 = '\\t', $intern_78 = '\\u0000', $intern_79 = '\\u0001', $intern_80 = '\\u0002', $intern_81 = '\\u0003', $intern_82 = '\\u0004', $intern_83 = '\\u0005', $intern_84 = '\\u0006', $intern_85 = '\\u0007', $intern_89 = '\\u000B', $intern_92 = '\\u000E', $intern_93 = '\\u000F', $intern_94 = '\\u0010', $intern_95 = '\\u0011', $intern_96 = '\\u0012', $intern_97 = '\\u0013', $intern_98 = '\\u0014', $intern_99 = '\\u0015', $intern_100 = '\\u0016', $intern_101 = '\\u0017', $intern_102 = '\\u0018', $intern_103 = '\\u0019', $intern_104 = '\\u001A', $intern_105 = '\\u001B', $intern_106 = '\\u001C', $intern_107 = '\\u001D', $intern_108 = '\\u001E', $intern_109 = '\\u001F', $intern_71 = ']', $intern_190 = '_', $intern_132 = '__uiObjectID', $intern_147 = 'absolute', $intern_170 = 'align', $intern_182 = 'aria-activedescendant', $intern_118 = 'blur', $intern_11 = 'border', $intern_42 = 'border-left-width', $intern_44 = 'border-top-width', $intern_166 = 'bottom', $intern_148 = 'button', $intern_169 = 'cellPadding', $intern_168 = 'cellSpacing', $intern_164 = 'center', $intern_119 = 'change', $intern_264 = 'class ', $intern_133 = 'className', $intern_62 = 'click', $intern_194 = 'clip', $intern_117 = 'cmd cannot be null', $intern_163 = 'col', $intern_184 = 'colSpan', $intern_162 = 'colgroup', $intern_294 = 'com.allen_sauer.gwt.dnd.client.', $intern_277 = 'com.allen_sauer.gwt.dnd.client.drop.', $intern_285 = 'com.allen_sauer.gwt.dnd.client.util.', $intern_316 = 'com.google.gwt.animation.client.', $intern_325 = 'com.google.gwt.core.client.', $intern_321 = 'com.google.gwt.core.client.impl.', $intern_328 = 'com.google.gwt.dom.client.', $intern_336 = 'com.google.gwt.event.dom.client.', $intern_349 = 'com.google.gwt.event.logical.shared.', $intern_334 = 'com.google.gwt.event.shared.', $intern_356 = 'com.google.gwt.gadgets.client.', $intern_360 = 'com.google.gwt.json.client.', $intern_318 = 'com.google.gwt.user.client.', $intern_371 = 'com.google.gwt.user.client.impl.', $intern_374 = 'com.google.gwt.user.client.ui.', $intern_469 = 'com.scrumzilla.client.', $intern_428 = 'com.scrumzilla.client.controller.', $intern_434 = 'com.scrumzilla.client.events.', $intern_436 = 'com.scrumzilla.client.model.', $intern_441 = 'com.scrumzilla.client.taskcontribution.local.', $intern_444 = 'com.scrumzilla.client.ui.', $intern_464 = 'com.scrumzilla.client.wave.', $intern_274 = 'com.scrumzilla.client.wave.ScrumzillaWaveGadget', $intern_131 = 'contextmenu', $intern_120 = 'dblclick', $intern_144 = 'div', $intern_13 = 'dragHandle must implement HasMouseDownHandlers, HasMouseUpHandlers, HasMouseMoveHandlers and HasMouseOutHandlers to be draggable', $intern_14 = 'dragHandle was not draggable', $intern_30 = 'dragdrop-boundary', $intern_3 = 'dragdrop-draggable', $intern_15 = 'dragdrop-dragging', $intern_29 = 'dragdrop-dropTarget', $intern_26 = 'dragdrop-dropTarget-engage', $intern_4 = 'dragdrop-handle', $intern_20 = 'dragdrop-movable-panel', $intern_28 = 'dragdrop-positioner', $intern_2 = 'dragdrop-selected', $intern_75 = 'empty argument', $intern_128 = 'error', $intern_262 = 'false', $intern_121 = 'focus', $intern_43 = 'getBorderLeft exception:\n', $intern_45 = 'getBorderTop: ', $intern_46 = 'getClientHeight exception:\n', $intern_47 = 'getClientWidth exception:\n', $intern_149 = 'gwt-Button', $intern_172 = 'gwt-Label', $intern_175 = 'gwt-MenuBar', $intern_185 = 'gwt-MenuItem', $intern_188 = 'gwt-PopupPanel', $intern_201 = 'gwt-TextArea', $intern_204 = 'gwt-TextBox', $intern_60 = 'gwt-uid-', $intern_6 = 'hash code not implemented', $intern_134 = 'height', $intern_8 = 'hidden', $intern_179 = 'hideFocus', $intern_177 = 'horizontal', $intern_183 = 'id', $intern_263 = 'interface ', $intern_275 = 'java.lang.', $intern_298 = 'java.util.', $intern_122 = 'keydown', $intern_64 = 'keypress', $intern_123 = 'keyup', $intern_38 = 'left', $intern_124 = 'load', $intern_125 = 'losecapture', $intern_9 = 'margin', $intern_174 = 'menubar', $intern_186 = 'menuitem', $intern_54 = 'message', $intern_167 = 'middle', $intern_272 = 'moduleStartup', $intern_65 = 'mousedown', $intern_66 = 'mousemove', $intern_67 = 'mouseout', $intern_126 = 'mouseover', $intern_68 = 'mouseup', $intern_129 = 'mousewheel', $intern_48 = 'must be positive', $intern_53 = 'name', $intern_12 = 'none', $intern_51 = 'null', $intern_17 = 'offsetHeight', $intern_16 = 'offsetWidth', $intern_273 = 'onModuleLoadStart', $intern_462 = 'org.cobogw.gwt.waveapi.gadget.client.', $intern_178 = 'outline', $intern_18 = 'overflow', $intern_189 = 'popupContent', $intern_145 = 'position', $intern_39 = 'px', $intern_198 = 'px)', $intern_197 = 'px, ', $intern_196 = 'rect(', $intern_199 = 'rect(0px, 0px, 0px, 0px)', $intern_195 = 'rect(auto, auto, auto, auto)', $intern_146 = 'relative', $intern_165 = 'right', $intern_173 = 'role', $intern_127 = 'scroll', $intern_225 = 'scrumzilla-localTaskUI-taskDescription', $intern_224 = 'scrumzilla-localTaskUI-taskLabel', $intern_235 = 'scrumzilla-storyUI-addStoryButton', $intern_231 = 'scrumzilla-storyUI-addStoryCancelButton', $intern_229 = 'scrumzilla-storyUI-addStoryNameText', $intern_233 = 'scrumzilla-storyUI-addStoryOkButton', $intern_228 = 'scrumzilla-storyUI-addStoryPanel', $intern_252 = 'scrumzilla-storyUI-removeStoryButton', $intern_250 = 'scrumzilla-storyUI-storyLabel', $intern_248 = 'scrumzilla-storyUI-storyTitlePanel', $intern_238 = 'scrumzilla-taskUI-addTaskButton', $intern_240 = 'scrumzilla-taskUI-addTaskCancelButton', $intern_242 = 'scrumzilla-taskUI-addTaskConfirmButton', $intern_239 = 'scrumzilla-taskUI-addTaskLabel', $intern_236 = 'scrumzilla-taskUI-addTaskPanel', $intern_255 = 'scrumzilla-taskUI-dragLabel', $intern_260 = 'scrumzilla-taskUI-emptyTaskList', $intern_222 = 'scrumzilla-taskUI-localTaskPanel', $intern_257 = 'scrumzilla-taskUI-removeTaskButton', $intern_259 = 'scrumzilla-taskUI-taskList', $intern_253 = 'scrumzilla-taskUI-taskPanel', $intern_258 = 'scrumzilla-taskUI-tasksInStatePanel', $intern_246 = 'scrumzilla-ui-storyColumnHeader', $intern_244 = 'scrumzilla-ui-storyTable', $intern_247 = 'scrumzilla-ui-taskStateHeader', $intern_206 = 'scrumzilla.local', $intern_212 = 'scrumzilla.state.StoryList', $intern_210 = 'scrumzilla.state.TaskList', $intern_187 = 'selected', $intern_271 = 'startup', $intern_181 = 'subMenuIcon-selected', $intern_150 = 'submit', $intern_152 = 'table', $intern_153 = 'tbody', $intern_160 = 'td', $intern_203 = 'text', $intern_200 = 'textarea', $intern_55 = 'toString', $intern_40 = 'top', $intern_157 = 'tr', $intern_180 = 'true', $intern_151 = 'type', $intern_41 = 'unselect exception:\n', $intern_221 = 'value', $intern_176 = 'vertical', $intern_171 = 'verticalAlign', $intern_7 = 'visibility', $intern_19 = 'visible', $intern_138 = 'width', $intern_27 = 'x', $intern_72 = '{', $intern_74 = '}';
var _, N8000000000000000_longLit = [0, -9223372036854775808], P0_longLit = [0, 0], P50_longLit = [80, 0], P1000000_longLit = [16777216, 0], P7fffffffffffffff_longLit = [4294967295, 9223372032559808512];
function java_lang_Object_equals__Ljava_lang_Object_2(other){
  return this === (other == null?null:other);
}

function java_lang_Object_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit;
}

function java_lang_Object_hashCode__(){
  return this.$H || (this.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}

function java_lang_Object_toString__(){
  return (this.java_lang_Object_typeMarker$ == nullMethod || this.java_lang_Object_typeId$ == 2?this.getClass__$():com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit).java_lang_Class_typeName + $intern_0 + java_lang_Integer_toPowerOfTwoString__II(this.java_lang_Object_typeMarker$ == nullMethod || this.java_lang_Object_typeId$ == 2?this.hashCode__$():this.$H || (this.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId), 4);
}

function java_lang_Object(){
}

_ = java_lang_Object.prototype = {};
_.equals__Ljava_lang_Object_2$ = java_lang_Object_equals__Ljava_lang_Object_2;
_.getClass__$ = java_lang_Object_getClass__;
_.hashCode__$ = java_lang_Object_hashCode__;
_.toString__$ = java_lang_Object_toString__;
_.toString = function(){
  return this.toString__$();
}
;
_.java_lang_Object_typeMarker$ = nullMethod;
_.java_lang_Object_typeId$ = 1;
function com_allen_1sauer_gwt_dnd_client_AbstractDragController_$clinit__(){
  com_allen_1sauer_gwt_dnd_client_AbstractDragController_$clinit__ = nullMethod;
  com_allen_1sauer_gwt_dnd_client_AbstractDragController_dragHandles = java_util_HashMap_$HashMap__Ljava_util_HashMap_2(new java_util_HashMap());
  $wnd.$GWT_DND_VERSION = $intern_1;
}

function com_allen_1sauer_gwt_dnd_client_AbstractDragController_$clearSelection__Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2(this$static){
  var iterator, widget;
  for (iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets); iterator.java_util_AbstractList$IteratorImpl_i < iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(iterator), 2);
    com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(widget.getStyleElement__(), $intern_2, false);
    java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2(iterator);
  }
}

function com_allen_1sauer_gwt_dnd_client_AbstractDragController_$makeDraggable__Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, draggable, dragHandle){
  com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$makeDraggable__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_mouseDragHandler, draggable, dragHandle);
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(draggable.com_google_gwt_user_client_ui_UIObject_element, $intern_3, true);
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(dragHandle.com_google_gwt_user_client_ui_UIObject_element, $intern_4, true);
  java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_allen_1sauer_gwt_dnd_client_AbstractDragController_dragHandles, draggable, dragHandle);
}

function com_allen_1sauer_gwt_dnd_client_AbstractDragController_$makeNotDraggable__Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, draggable){
  var dragHandle;
  dragHandle = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(com_allen_1sauer_gwt_dnd_client_AbstractDragController_dragHandles, draggable), 2);
  com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$makeNotDraggable__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_mouseDragHandler, dragHandle);
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(draggable.getStyleElement__(), $intern_3, false);
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(dragHandle.getStyleElement__(), $intern_4, false);
}

function com_allen_1sauer_gwt_dnd_client_AbstractDragController_$toggleSelection__Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, draggable){
  if (java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets, draggable)) {
    com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(draggable.com_google_gwt_user_client_ui_UIObject_element, $intern_2, false);
  }
   else {
    java_util_ArrayList_$clear__Ljava_util_ArrayList_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets);
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets, draggable);
  }
}

function com_allen_1sauer_gwt_dnd_client_AbstractDragController_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1AbstractDragController_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_AbstractDragController(){
}

_ = com_allen_1sauer_gwt_dnd_client_AbstractDragController.prototype = new java_lang_Object();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_AbstractDragController_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_allen_1sauer_gwt_dnd_client_AbstractDragController_boundaryPanel = null;
_.com_allen_1sauer_gwt_dnd_client_AbstractDragController_constrainedToBoundaryPanel = false;
_.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context = null;
_.com_allen_1sauer_gwt_dnd_client_AbstractDragController_dragStartSensitivityPixels = 0;
_.com_allen_1sauer_gwt_dnd_client_AbstractDragController_mouseDragHandler = null;
var com_allen_1sauer_gwt_dnd_client_AbstractDragController_dragHandles;
function com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_$DeferredMoveCommand__Lcom_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_2Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2(this$static, mouseDragHandler){
  this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_mouseDragHandler = mouseDragHandler;
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_$execute__Lcom_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_2(this$static){
  if (com_google_gwt_lang_LongLib_eq___3D_3D(this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_scheduledTimeMillis, P0_longLit)) {
    return;
  }
  com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$actualMove__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2II(this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_mouseDragHandler, this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_x, this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_y);
  this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_mostRecentTotalTime = com_google_gwt_lang_LongLib_sub___3D_3D(com_google_gwt_lang_LongLib_fromDouble__D((new Date()).getTime()), this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_scheduledTimeMillis);
  this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_scheduledTimeMillis = P0_longLit;
}

function com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_$scheduleOrExecute__Lcom_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_2II(this$static, x, y){
  this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_x = x;
  this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_y = y;
  if (com_google_gwt_lang_LongLib_eq___3D_3D(this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_scheduledTimeMillis, P0_longLit)) {
    this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_scheduledTimeMillis = com_google_gwt_lang_LongLib_fromDouble__D((new Date()).getTime());
  }
  if (com_google_gwt_lang_LongLib_compare___3D_3D(this$static.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_mostRecentTotalTime, P50_longLit) > 0) {
    com_google_gwt_user_client_DeferredCommand_addCommand__Lcom_google_gwt_user_client_Command_2(this$static);
  }
   else {
    com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_$execute__Lcom_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_2(this$static);
  }
}

function com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_execute__(){
  com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_$execute__Lcom_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_2(this);
}

function com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1DeferredMoveCommand_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand(){
}

_ = com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand.prototype = new java_lang_Object();
_.execute__ = com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_execute__;
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_getClass__;
_.java_lang_Object_typeId$ = 3;
_.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_mostRecentTotalTime = P0_longLit;
_.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_mouseDragHandler = null;
_.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_scheduledTimeMillis = P0_longLit;
_.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_x = 0;
_.com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_y = 0;
function com_allen_1sauer_gwt_dnd_client_DragContext_$DragContext__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2Lcom_allen_1sauer_gwt_dnd_client_DragController_2(this$static, dragController){
  this$static.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  this$static.com_allen_1sauer_gwt_dnd_client_DragContext_dragController = dragController;
  this$static.com_allen_1sauer_gwt_dnd_client_DragContext_boundaryPanel = dragController.com_allen_1sauer_gwt_dnd_client_AbstractDragController_boundaryPanel;
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_DragContext_$dragEndCleanup__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static){
  this$static.com_allen_1sauer_gwt_dnd_client_DragContext_dropController = null;
  this$static.com_allen_1sauer_gwt_dnd_client_DragContext_draggable = null;
}

function com_allen_1sauer_gwt_dnd_client_DragContext_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1DragContext_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_DragContext(){
}

_ = com_allen_1sauer_gwt_dnd_client_DragContext.prototype = new java_lang_Object();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_DragContext_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_allen_1sauer_gwt_dnd_client_DragContext_boundaryPanel = null;
_.com_allen_1sauer_gwt_dnd_client_DragContext_desiredDraggableX = 0;
_.com_allen_1sauer_gwt_dnd_client_DragContext_desiredDraggableY = 0;
_.com_allen_1sauer_gwt_dnd_client_DragContext_dragController = null;
_.com_allen_1sauer_gwt_dnd_client_DragContext_draggable = null;
_.com_allen_1sauer_gwt_dnd_client_DragContext_dropController = null;
_.com_allen_1sauer_gwt_dnd_client_DragContext_mouseX = 0;
_.com_allen_1sauer_gwt_dnd_client_DragContext_mouseY = 0;
_.com_allen_1sauer_gwt_dnd_client_DragContext_vetoException = null;
function com_allen_1sauer_gwt_dnd_client_DropControllerCollection_$DropControllerCollection__Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection_2Ljava_util_ArrayList_2(this$static, dropControllerList){
  this$static.com_allen_1sauer_gwt_dnd_client_DropControllerCollection_dropControllerList = dropControllerList;
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_DropControllerCollection_$getIntersectDropController__Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection_2II(this$static, x, y){
  var candidate, i, location, targetArea;
  location = com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_$CoordinateLocation__Lcom_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_2II(new com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation(), x, y);
  for (i = this$static.com_allen_1sauer_gwt_dnd_client_DropControllerCollection_sortedCandidates.length - 1; i >= 0; --i) {
    candidate = this$static.com_allen_1sauer_gwt_dnd_client_DropControllerCollection_sortedCandidates[i];
    targetArea = candidate.com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_targetArea;
    if (targetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left <= location.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_left && location.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_left <= targetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_right && targetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top <= location.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_top && location.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_top <= targetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_bottom) {
      return candidate.com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_dropController;
    }
  }
  return null;
}

function com_allen_1sauer_gwt_dnd_client_DropControllerCollection_$resetCache__Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection_2Lcom_google_gwt_user_client_ui_Panel_2Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static, boundaryPanel, context){
  var boundaryArea, candidate, dropController, dropController$iterator, list;
  list = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  if (context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable) {
    boundaryArea = com_allen_1sauer_gwt_dnd_client_util_WidgetArea_$WidgetArea__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetArea_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetArea(), boundaryPanel);
    for (dropController$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this$static.com_allen_1sauer_gwt_dnd_client_DropControllerCollection_dropControllerList); dropController$iterator.java_util_AbstractList$IteratorImpl_i < dropController$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
      dropController = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(dropController$iterator), 3);
      candidate = com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_$DropControllerCollection$Candidate__Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_2Lcom_allen_1sauer_gwt_dnd_client_drop_DropController_2(new com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate(), dropController);
      if ((com_google_gwt_dom_client_DOMImpl_$clinit__() , context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable.com_google_gwt_user_client_ui_UIObject_element).contains(candidate.com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_dropController.getDropTarget__().com_google_gwt_user_client_ui_UIObject_element)) {
        continue;
      }
      if (com_allen_1sauer_gwt_dnd_client_util_AbstractArea_$intersects__Lcom_allen_1sauer_gwt_dnd_client_util_AbstractArea_2Lcom_allen_1sauer_gwt_dnd_client_util_Area_2(candidate.com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_targetArea, boundaryArea)) {
        com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(list.java_util_ArrayList_array, list.java_util_ArrayList_size++, candidate);
      }
    }
  }
  this$static.com_allen_1sauer_gwt_dnd_client_DropControllerCollection_sortedCandidates = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2(list, com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1allen_11sauer_1gwt_1dnd_1client_1DropControllerCollection$Candidate_12_1classLit, 123, 4, list.java_util_ArrayList_size, 0)), 15);
  java_util_Arrays_sort___3Ljava_lang_Object_2(this$static.com_allen_1sauer_gwt_dnd_client_DropControllerCollection_sortedCandidates);
}

function com_allen_1sauer_gwt_dnd_client_DropControllerCollection_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1DropControllerCollection_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_DropControllerCollection(){
}

_ = com_allen_1sauer_gwt_dnd_client_DropControllerCollection.prototype = new java_lang_Object();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_DropControllerCollection_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_allen_1sauer_gwt_dnd_client_DropControllerCollection_dropControllerList = null;
_.com_allen_1sauer_gwt_dnd_client_DropControllerCollection_sortedCandidates = null;
function com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_$DropControllerCollection$Candidate__Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_2Lcom_allen_1sauer_gwt_dnd_client_drop_DropController_2(this$static, dropController){
  var target;
  this$static.com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_dropController = dropController;
  target = dropController.getDropTarget__();
  if (!target.com_google_gwt_user_client_ui_Widget_attached) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), $intern_5);
  }
  this$static.com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_targetArea = com_allen_1sauer_gwt_dnd_client_util_WidgetArea_$WidgetArea__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetArea_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetArea(), target);
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_compareTo__Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_2(other){
  var myElement, otherElement;
  myElement = this.com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_dropController.getDropTarget__().com_google_gwt_user_client_ui_UIObject_element;
  otherElement = other.com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_dropController.getDropTarget__().com_google_gwt_user_client_ui_UIObject_element;
  if (myElement == otherElement) {
    return 0;
  }
   else {
    if ((com_google_gwt_dom_client_DOMImpl_$clinit__() , myElement).contains(otherElement)) {
      return -1;
    }
     else {
      if (otherElement.contains(myElement)) {
        return 1;
      }
       else {
        return 0;
      }
    }
  }
}

function com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_equals__Ljava_lang_Object_2(other){
  throw java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(new java_lang_RuntimeException(), $intern_6);
}

function com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1DropControllerCollection$Candidate_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_hashCode__(){
  throw java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(new java_lang_RuntimeException(), $intern_6);
}

function com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate(){
}

_ = com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate.prototype = new java_lang_Object();
_.compareTo__Ljava_lang_Object_2$ = com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_compareTo__Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_2;
_.equals__Ljava_lang_Object_2$ = com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_equals__Ljava_lang_Object_2;
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_getClass__;
_.hashCode__$ = com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_hashCode__;
_.java_lang_Object_typeId$ = 4;
_.com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_dropController = null;
_.com_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_targetArea = null;
function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$MouseDragHandler__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static, context){
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_deferredMoveCommand = com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_$DeferredMoveCommand__Lcom_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_2Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2(new com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand(), this$static);
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragHandleMap = java_util_HashMap_$HashMap__Ljava_util_HashMap_2(new java_util_HashMap());
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context = context;
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget = com_google_gwt_user_client_ui_FocusPanel_$FocusPanel__Lcom_google_gwt_user_client_ui_FocusPanel_2(new com_google_gwt_user_client_ui_FocusPanel());
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget, 0, 0);
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget, this$static, (com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__() , com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__() , com_google_gwt_event_dom_client_MouseMoveEvent_TYPE));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget, this$static, (com_google_gwt_event_dom_client_MouseUpEvent_$clinit__() , com_google_gwt_event_dom_client_MouseUpEvent_$clinit__() , com_google_gwt_event_dom_client_MouseUpEvent_TYPE));
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget.com_google_gwt_user_client_ui_UIObject_element.style[$intern_7] = $intern_8;
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget.com_google_gwt_user_client_ui_UIObject_element.style[$intern_9] = $intern_10;
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget.com_google_gwt_user_client_ui_UIObject_element.style[$intern_11] = $intern_12;
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$actualMove__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2II(this$static, x, y){
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseX = x;
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseY = y;
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_desiredDraggableX = x - this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetX;
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_desiredDraggableY = y - this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetY;
  com_allen_1sauer_gwt_dnd_client_PickupDragController_$dragMove__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_dragController);
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$doSelectionToggle__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_event_dom_client_MouseEvent_2(this$static, event){
  var widget;
  widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragHandleMap, this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget), 16).com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_dragable;
  if (!(!!(com_google_gwt_dom_client_DOMImpl_$clinit__() , event.com_google_gwt_event_dom_client_DomEvent_nativeEvent).ctrlKey || !!event.com_google_gwt_event_dom_client_DomEvent_nativeEvent.metaKey)) {
    com_allen_1sauer_gwt_dnd_client_AbstractDragController_$clearSelection__Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_dragController);
  }
  com_allen_1sauer_gwt_dnd_client_AbstractDragController_$toggleSelection__Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_dragController, widget);
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$drop__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2II(this$static, x, y){
  var $e0, ex;
  com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$actualMove__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2II(this$static, x, y);
  try {
    com_allen_1sauer_gwt_dnd_client_PickupDragController_$previewDragEnd__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_dragController);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I($e0, 17)) {
      ex = $e0;
      this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_vetoException = ex;
    }
     else 
      throw $e0;
  }
  com_allen_1sauer_gwt_dnd_client_PickupDragController_$dragEnd__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_dragController);
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$makeDraggable__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, draggable, dragHandle){
  var $e0, registeredDraggable;
  try {
    registeredDraggable = com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_$MouseDragHandler$RegisteredDraggable__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_HandlerRegistration_2Lcom_google_gwt_event_shared_HandlerRegistration_2Lcom_google_gwt_event_shared_HandlerRegistration_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable(), draggable, com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(dragHandle, this$static, (com_google_gwt_event_dom_client_MouseDownEvent_$clinit__() , com_google_gwt_event_dom_client_MouseDownEvent_TYPE)), com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(dragHandle, this$static, (com_google_gwt_event_dom_client_MouseUpEvent_$clinit__() , com_google_gwt_event_dom_client_MouseUpEvent_TYPE)), (com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(dragHandle, this$static, (com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__() , com_google_gwt_event_dom_client_MouseMoveEvent_TYPE)) , com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(dragHandle, this$static, (com_google_gwt_event_dom_client_MouseOutEvent_$clinit__() , com_google_gwt_event_dom_client_MouseOutEvent_TYPE))));
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragHandleMap, dragHandle, registeredDraggable);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I($e0, 18)) {
      throw java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2Ljava_lang_Throwable_2(new java_lang_RuntimeException(), $intern_13);
    }
     else 
      throw $e0;
  }
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$makeNotDraggable__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, dragHandle){
  var registeredDraggable;
  registeredDraggable = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragHandleMap, dragHandle), 16);
  if (!registeredDraggable) {
    throw java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(new java_lang_RuntimeException(), $intern_14);
  }
  com_google_gwt_event_shared_DefaultHandlerRegistration_$removeHandler__Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2(registeredDraggable.com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_mouseDownHandlerRegistration);
  com_google_gwt_event_shared_DefaultHandlerRegistration_$removeHandler__Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2(registeredDraggable.com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_mouseUpHandlerRegistration);
  com_google_gwt_event_shared_DefaultHandlerRegistration_$removeHandler__Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2(registeredDraggable.com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_mouseOutHandlerRegistration);
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$onMouseDown__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_event_dom_client_MouseDownEvent_2(this$static, event){
  var button, loc1, loc2, sender, x, y;
  sender = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(event.com_google_gwt_event_shared_GwtEvent_source, 2);
  x = com_google_gwt_event_dom_client_MouseEvent_$getX__Lcom_google_gwt_event_dom_client_MouseEvent_2(event);
  y = com_google_gwt_event_dom_client_MouseEvent_$getY__Lcom_google_gwt_event_dom_client_MouseEvent_2(event);
  button = com_google_gwt_dom_client_DOMImplStandard_$eventGetButton__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_NativeEvent_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , event.com_google_gwt_event_dom_client_DomEvent_nativeEvent));
  if (this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging == 3 || this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging == 2) {
    return;
  }
  if (button != 1) {
    return;
  }
  if (this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget) {
    return;
  }
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget = sender;
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragHandleMap, this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget), 16).com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_dragable;
  if (!(!!event.com_google_gwt_event_dom_client_DomEvent_nativeEvent.ctrlKey || !!event.com_google_gwt_event_dom_client_DomEvent_nativeEvent.metaKey) && java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2I(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets, this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget, 0) == -1) {
    com_allen_1sauer_gwt_dnd_client_AbstractDragController_$clearSelection__Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_dragController);
    com_allen_1sauer_gwt_dnd_client_AbstractDragController_$toggleSelection__Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_dragController, this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable);
  }
  com_google_gwt_user_client_DeferredCommand_addCommand__Lcom_google_gwt_user_client_Command_2(new com_allen_1sauer_gwt_dnd_client_MouseDragHandler$1());
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDown = true;
  event.com_google_gwt_event_dom_client_DomEvent_nativeEvent.preventDefault();
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetX = x;
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetY = y;
  loc1 = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$WidgetLocation__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetLocation(), this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget, null);
  if (this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget != this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable) {
    loc2 = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$WidgetLocation__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetLocation(), this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable, null);
    this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetX += loc1.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left - loc2.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left;
    this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetY += loc1.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top - loc2.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top;
  }
  if (this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_dragController.com_allen_1sauer_gwt_dnd_client_AbstractDragController_dragStartSensitivityPixels == 0 && !(!!event.com_google_gwt_event_dom_client_DomEvent_nativeEvent.ctrlKey || !!event.com_google_gwt_event_dom_client_DomEvent_nativeEvent.metaKey)) {
    this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseX = x + loc1.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left;
    this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseY = y + loc1.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top;
    com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$startDragging__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2(this$static);
    if (this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging == 1) {
      return;
    }
    com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$actualMove__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2II(this$static, this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseX, this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseY);
  }
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$onMouseMove__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_event_dom_client_MouseMoveEvent_2(this$static, event){
  var elem, location, sender, x, y;
  sender = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(event.com_google_gwt_event_shared_GwtEvent_source, 2);
  elem = sender.com_google_gwt_user_client_ui_UIObject_element;
  x = com_google_gwt_event_dom_client_MouseEvent_$getRelativeX__Lcom_google_gwt_event_dom_client_MouseEvent_2Lcom_google_gwt_dom_client_Element_2(event, elem);
  y = com_google_gwt_event_dom_client_MouseEvent_$getRelativeY__Lcom_google_gwt_event_dom_client_MouseEvent_2Lcom_google_gwt_dom_client_Element_2(event, elem);
  if (this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging == 3 || this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging == 2) {
    if (sender != this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget) {
      return;
    }
    this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging = 3;
  }
   else {
    if (this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDown) {
      if (java_lang_Math_max__II(java_lang_Math_abs__I(x - this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetX), java_lang_Math_abs__I(y - this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetY)) >= this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_dragController.com_allen_1sauer_gwt_dnd_client_AbstractDragController_dragStartSensitivityPixels) {
        com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$cancelAllDocumentSelections__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2();
        if (java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2I(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets, this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable, 0) == -1) {
          com_allen_1sauer_gwt_dnd_client_AbstractDragController_$toggleSelection__Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_dragController, this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable);
        }
        location = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$WidgetLocation__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetLocation(), this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget, null);
        this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseX = this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetX + location.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left;
        this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseY = this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetY + location.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top;
        com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$startDragging__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2(this$static);
      }
       else {
        (com_google_gwt_dom_client_DOMImpl_$clinit__() , com_google_gwt_user_client_DOM_currentEvent).preventDefault();
      }
    }
    if (this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging == 1) {
      return;
    }
  }
  (com_google_gwt_dom_client_DOMImpl_$clinit__() , com_google_gwt_user_client_DOM_currentEvent).preventDefault();
  com_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_$scheduleOrExecute__Lcom_allen_1sauer_gwt_dnd_client_DeferredMoveCommand_2II(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_deferredMoveCommand, x, y);
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$onMouseOut__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_event_dom_client_MouseOutEvent_2(this$static){
  var location;
  if (this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDown && this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging == 1) {
    location = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$WidgetLocation__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetLocation(), this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget, null);
    this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseX = this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetX + location.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left;
    this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseY = this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetY + location.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top;
    com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$startDragging__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2(this$static);
  }
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$onMouseUp__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_event_dom_client_MouseUpEvent_2(this$static, event){
  var button, elem, location, sender, x, y;
  try {
    sender = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(event.com_google_gwt_event_shared_GwtEvent_source, 2);
    elem = sender.com_google_gwt_user_client_ui_UIObject_element;
    x = com_google_gwt_event_dom_client_MouseEvent_$getRelativeX__Lcom_google_gwt_event_dom_client_MouseEvent_2Lcom_google_gwt_dom_client_Element_2(event, elem);
    y = com_google_gwt_event_dom_client_MouseEvent_$getRelativeY__Lcom_google_gwt_event_dom_client_MouseEvent_2Lcom_google_gwt_dom_client_Element_2(event, elem);
    button = com_google_gwt_dom_client_DOMImplStandard_$eventGetButton__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_NativeEvent_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , event.com_google_gwt_event_dom_client_DomEvent_nativeEvent));
    if (button != 1) {
      return;
    }
    this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDown = false;
    if (!this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget) {
      return;
    }
    com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$cancelAllDocumentSelections__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2();
    if (this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging == 1) {
      com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$doSelectionToggle__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_event_dom_client_MouseEvent_2(this$static, event);
      return;
    }
    if (sender != this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget) {
      location = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$WidgetLocation__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetLocation(), sender, null);
      x += location.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left;
      y += location.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top;
    }
    try {
      com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$drop__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2II(this$static, x, y);
      if (this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging != 3) {
        com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$doSelectionToggle__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_event_dom_client_MouseEvent_2(this$static, event);
      }
    }
     finally {
      com_google_gwt_user_client_DOM_releaseCapture__Lcom_google_gwt_user_client_Element_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget.com_google_gwt_user_client_ui_UIObject_element);
      this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging = 1;
      com_allen_1sauer_gwt_dnd_client_DragContext_$dragEndCleanup__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context);
    }
  }
   finally {
    this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget = null;
  }
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$startDragging__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2(this$static){
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_vetoException = null;
  com_allen_1sauer_gwt_dnd_client_PickupDragController_$dragStart__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context.com_allen_1sauer_gwt_dnd_client_DragContext_dragController);
  if (!this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget.com_google_gwt_user_client_ui_Widget_attached) {
    com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II((com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null)), this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget, 0, 0);
  }
  com_google_gwt_user_client_DOM_setCapture__Lcom_google_gwt_user_client_Element_2(this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget.com_google_gwt_user_client_ui_UIObject_element);
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging = 2;
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1MouseDragHandler_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler(){
}

_ = com_allen_1sauer_gwt_dnd_client_MouseDragHandler.prototype = new java_lang_Object();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_MouseDragHandler_getClass__;
_.java_lang_Object_typeId$ = 5;
_.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_capturingWidget = null;
_.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_context = null;
_.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_dragging = 1;
_.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDown = false;
_.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetX = 0;
_.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownOffsetY = 0;
_.com_allen_1sauer_gwt_dnd_client_MouseDragHandler_mouseDownWidget = null;
function com_allen_1sauer_gwt_dnd_client_MouseDragHandler$1_execute__(){
  com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$cancelAllDocumentSelections__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2();
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1MouseDragHandler$1_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler$1(){
}

_ = com_allen_1sauer_gwt_dnd_client_MouseDragHandler$1.prototype = new java_lang_Object();
_.execute__ = com_allen_1sauer_gwt_dnd_client_MouseDragHandler$1_execute__;
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_MouseDragHandler$1_getClass__;
_.java_lang_Object_typeId$ = 6;
function com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_$MouseDragHandler$RegisteredDraggable__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_HandlerRegistration_2Lcom_google_gwt_event_shared_HandlerRegistration_2Lcom_google_gwt_event_shared_HandlerRegistration_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, dragable, mouseDownHandlerRegistration, mouseUpHandlerRegistration, mouseOutHandlerRegistration){
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_dragable = dragable;
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_mouseDownHandlerRegistration = mouseDownHandlerRegistration;
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_mouseOutHandlerRegistration = mouseOutHandlerRegistration;
  this$static.com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_mouseUpHandlerRegistration = mouseUpHandlerRegistration;
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1MouseDragHandler$RegisteredDraggable_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable(){
}

_ = com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable.prototype = new java_lang_Object();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_getClass__;
_.java_lang_Object_typeId$ = 7;
_.com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_dragable = null;
_.com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_mouseDownHandlerRegistration = null;
_.com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_mouseOutHandlerRegistration = null;
_.com_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_mouseUpHandlerRegistration = null;
function com_allen_1sauer_gwt_dnd_client_PickupDragController_$clinit__(){
  com_allen_1sauer_gwt_dnd_client_PickupDragController_$clinit__ = nullMethod;
  com_allen_1sauer_gwt_dnd_client_AbstractDragController_$clinit__();
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController_$PickupDragController__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2Lcom_google_gwt_user_client_ui_AbsolutePanel_2Z(this$static, boundaryPanel, allowDroppingOnBoundaryPanel){
  com_allen_1sauer_gwt_dnd_client_PickupDragController_$clinit__();
  this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_boundaryPanel = boundaryPanel;
  this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context = com_allen_1sauer_gwt_dnd_client_DragContext_$DragContext__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2Lcom_allen_1sauer_gwt_dnd_client_DragController_2(new com_allen_1sauer_gwt_dnd_client_DragContext(), this$static);
  this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_mouseDragHandler = com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$MouseDragHandler__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(new com_allen_1sauer_gwt_dnd_client_MouseDragHandler(), this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context);
  this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropControllerList = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_boundaryDropController = com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_$BoundaryDropController__Lcom_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_2Lcom_google_gwt_user_client_ui_AbsolutePanel_2Z(new com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController(), boundaryPanel, allowDroppingOnBoundaryPanel);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropControllerList, this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_boundaryDropController);
  this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropControllerCollection = com_allen_1sauer_gwt_dnd_client_DropControllerCollection_$DropControllerCollection__Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection_2Ljava_util_ArrayList_2(new com_allen_1sauer_gwt_dnd_client_DropControllerCollection(), this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropControllerList);
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController_$calcBoundaryOffset__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static){
  var widgetLocation;
  widgetLocation = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$WidgetLocation__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetLocation(), this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_boundaryPanel, null);
  this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_boundaryOffsetX = widgetLocation.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left + com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getBorderLeft__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_boundaryPanel.com_google_gwt_user_client_ui_UIObject_element);
  this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_boundaryOffsetY = widgetLocation.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top + com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getBorderTop__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_boundaryPanel.com_google_gwt_user_client_ui_UIObject_element);
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController_$dragEnd__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static){
  if (this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_vetoException) {
    com_allen_1sauer_gwt_dnd_client_PickupDragController_$restoreSelectedWidgetsLocation__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static);
  }
   else {
    this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController.onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context);
  }
  this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController.onLeave__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context);
  this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController = null;
  com_allen_1sauer_gwt_dnd_client_PickupDragController_$restoreSelectedWidgetsStyle__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static);
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_movablePanel);
  this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_movablePanel = null;
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable.getStyleElement__(), $intern_15, false);
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController_$dragMove__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static){
  var desiredLeft, desiredTop, newDropController;
  com_allen_1sauer_gwt_dnd_client_PickupDragController_$calcBoundaryOffset__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static);
  desiredLeft = this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_desiredDraggableX - this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_boundaryOffsetX;
  desiredTop = this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_desiredDraggableY - this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_boundaryOffsetY;
  if (this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_constrainedToBoundaryPanel) {
    desiredLeft = java_lang_Math_max__II(0, java_lang_Math_min__II(desiredLeft, this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropTargetClientWidth - (parseInt(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable.com_google_gwt_user_client_ui_UIObject_element[$intern_16]) || 0)));
    desiredTop = java_lang_Math_max__II(0, java_lang_Math_min__II(desiredTop, this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropTargetClientHeight - (parseInt(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable.com_google_gwt_user_client_ui_UIObject_element[$intern_17]) || 0)));
  }
  com_allen_1sauer_gwt_dnd_client_util_DOMUtil_fastSetElementPosition__Lcom_google_gwt_dom_client_Element_2II(this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_movablePanel.com_google_gwt_user_client_ui_UIObject_element, desiredLeft, desiredTop);
  newDropController = com_allen_1sauer_gwt_dnd_client_PickupDragController_$getIntersectDropController__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2II(this$static, this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseX, this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseY);
  if (this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController != newDropController) {
    if (this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController) {
      this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController.onLeave__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context);
    }
    this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController = newDropController;
    if (this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController) {
      this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController.onEnter__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context);
    }
  }
  if (this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController) {
    this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController.onMove__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context);
  }
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController_$dragStart__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static){
  var container, currentDraggableLocation, draggableAbsoluteLeft, draggableAbsoluteTop, location, relativeX, relativeY, widget, widget$iterator, widgetLocation;
  com_allen_1sauer_gwt_dnd_client_DropControllerCollection_$resetCache__Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection_2Lcom_google_gwt_user_client_ui_Panel_2Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropControllerCollection, this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_boundaryPanel, this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context);
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable.getStyleElement__(), $intern_15, true);
  currentDraggableLocation = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$WidgetLocation__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetLocation(), this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable, this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_boundaryPanel);
  com_allen_1sauer_gwt_dnd_client_PickupDragController_$saveSelectedWidgetsLocationAndStyle__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static);
  container = com_google_gwt_user_client_ui_AbsolutePanel_$AbsolutePanel__Lcom_google_gwt_user_client_ui_AbsolutePanel_2(new com_google_gwt_user_client_ui_AbsolutePanel());
  container.com_google_gwt_user_client_ui_UIObject_element.style[$intern_18] = $intern_19;
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(container, parseInt(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable.com_google_gwt_user_client_ui_UIObject_element[$intern_16]) || 0, parseInt(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable.com_google_gwt_user_client_ui_UIObject_element[$intern_17]) || 0);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_boundaryPanel, container, currentDraggableLocation.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left, currentDraggableLocation.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top);
  draggableAbsoluteLeft = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable.com_google_gwt_user_client_ui_UIObject_element));
  draggableAbsoluteTop = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteTop__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable.com_google_gwt_user_client_ui_UIObject_element);
  widgetLocation = java_util_HashMap_$HashMap__Ljava_util_HashMap_2(new java_util_HashMap());
  for (widget$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets); widget$iterator.java_util_AbstractList$IteratorImpl_i < widget$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(widget$iterator), 2);
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(widgetLocation, widget, com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_$CoordinateLocation__Lcom_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_2II(new com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation(), com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(widget.com_google_gwt_user_client_ui_UIObject_element), com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteTop__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(widget.com_google_gwt_user_client_ui_UIObject_element)));
  }
  this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController = com_allen_1sauer_gwt_dnd_client_PickupDragController_$getIntersectDropController__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2II(this$static, this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseX, this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseY);
  if (this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController) {
    this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController.onEnter__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context);
  }
  for (widget$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets); widget$iterator.java_util_AbstractList$IteratorImpl_i < widget$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(widget$iterator), 2);
    location = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(!widget?widgetLocation.java_util_AbstractHashMap_nullSlot:java_util_AbstractHashMap_$getHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2I(widgetLocation, widget, ~~(widget.$H || (widget.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId))), 19);
    relativeX = location.getLeft__() - draggableAbsoluteLeft;
    relativeY = location.getTop__() - draggableAbsoluteTop;
    com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(widget);
    container.setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_Widget_2II(widget, relativeX, relativeY);
    com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2(container, widget, container.com_google_gwt_user_client_ui_UIObject_element);
  }
  this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_movablePanel = container;
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_movablePanel.getStyleElement__(), $intern_20, true);
  com_allen_1sauer_gwt_dnd_client_PickupDragController_$calcBoundaryOffset__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static);
  this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropTargetClientWidth = com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getClientWidth__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_boundaryPanel.com_google_gwt_user_client_ui_UIObject_element);
  this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropTargetClientHeight = com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getClientHeight__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_boundaryPanel.com_google_gwt_user_client_ui_UIObject_element);
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController_$getIntersectDropController__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2II(this$static, x, y){
  var dropController;
  dropController = com_allen_1sauer_gwt_dnd_client_DropControllerCollection_$getIntersectDropController__Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection_2II(this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropControllerCollection, x, y);
  return dropController?dropController:this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_boundaryDropController;
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController_$previewDragEnd__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static){
  var $e0, ex;
  try {
    this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_dropController.onPreviewDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I($e0, 17)) {
      ex = $e0;
      throw ex;
    }
     else 
      throw $e0;
  }
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController_$restoreSelectedWidgetsLocation__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static){
  var info, widget, widget$iterator;
  for (widget$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets); widget$iterator.java_util_AbstractList$IteratorImpl_i < widget$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(widget$iterator), 2);
    info = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_savedWidgetInfoMap, widget), 20);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 21)) {
      com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 21), widget, info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParentLocation.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left, info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParentLocation.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top);
    }
     else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 22)) {
      com_google_gwt_user_client_ui_HorizontalPanel_$insert__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2I(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 22), widget, info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableIndex);
    }
     else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 23)) {
      com_google_gwt_user_client_ui_VerticalPanel_$insert__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2I(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 23), widget, info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableIndex);
    }
     else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 24)) {
      com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 24).setWidget__Lcom_google_gwt_user_client_ui_Widget_2(widget);
    }
     else {
      throw java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(new java_lang_RuntimeException(), $intern_21 + info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent.getClass__$().java_lang_Class_typeName);
    }
  }
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController_$restoreSelectedWidgetsStyle__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static){
  var info, widget, widget$iterator;
  for (widget$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets); widget$iterator.java_util_AbstractList$IteratorImpl_i < widget$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(widget$iterator), 2);
    info = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_savedWidgetInfoMap, widget), 20);
    widget.com_google_gwt_user_client_ui_UIObject_element.style[$intern_9] = info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableMargin;
  }
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController_$saveSelectedWidgetsLocationAndStyle__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2(this$static){
  var info, widget, widget$iterator;
  this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_savedWidgetInfoMap = java_util_HashMap_$HashMap__Ljava_util_HashMap_2(new java_util_HashMap());
  for (widget$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this$static.com_allen_1sauer_gwt_dnd_client_AbstractDragController_context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets); widget$iterator.java_util_AbstractList$IteratorImpl_i < widget$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(widget$iterator), 2);
    info = new com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo();
    info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent = widget.com_google_gwt_user_client_ui_Widget_parent;
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 21)) {
      info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParentLocation = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$WidgetLocation__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetLocation(), widget, info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent);
    }
     else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 22)) {
      info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableIndex = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 22).com_google_gwt_user_client_ui_ComplexPanel_children, widget);
    }
     else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 23)) {
      info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableIndex = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 23).com_google_gwt_user_client_ui_ComplexPanel_children, widget);
    }
     else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent, 24)) {
    }
     else {
      throw java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(new java_lang_RuntimeException(), $intern_22 + info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent.getClass__$().java_lang_Class_typeName + $intern_23 + com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1PickupDragController_12_1classLit.java_lang_Class_typeName + $intern_24);
    }
    info.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableMargin = widget.com_google_gwt_user_client_ui_UIObject_element.style[$intern_9];
    widget.com_google_gwt_user_client_ui_UIObject_element.style[$intern_9] = $intern_10;
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_allen_1sauer_gwt_dnd_client_PickupDragController_savedWidgetInfoMap, widget, info);
  }
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1PickupDragController_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController(){
}

_ = com_allen_1sauer_gwt_dnd_client_PickupDragController.prototype = new com_allen_1sauer_gwt_dnd_client_AbstractDragController();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_PickupDragController_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController_boundaryDropController = null;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController_boundaryOffsetX = 0;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController_boundaryOffsetY = 0;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropControllerCollection = null;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropTargetClientHeight = 0;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropTargetClientWidth = 0;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController_movablePanel = null;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController_savedWidgetInfoMap = null;
function com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1PickupDragController$SavedWidgetInfo_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo(){
}

_ = com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo.prototype = new java_lang_Object();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_getClass__;
_.java_lang_Object_typeId$ = 8;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableIndex = 0;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableMargin = null;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParent = null;
_.com_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_initialDraggableParentLocation = null;
function java_lang_Throwable_$toString__Ljava_lang_Throwable_2(this$static){
  var className, msg;
  className = this$static.getClass__$().java_lang_Class_typeName;
  msg = this$static.getMessage__();
  if (msg != null) {
    return className + $intern_25 + msg;
  }
   else {
    return className;
  }
}

function java_lang_Throwable_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit;
}

function java_lang_Throwable_getMessage__(){
  return this.java_lang_Throwable_detailMessage;
}

function java_lang_Throwable_toString__(){
  return java_lang_Throwable_$toString__Ljava_lang_Throwable_2(this);
}

function java_lang_Throwable(){
}

_ = java_lang_Throwable.prototype = new java_lang_Object();
_.getClass__$ = java_lang_Throwable_getClass__;
_.getMessage__ = java_lang_Throwable_getMessage__;
_.toString__$ = java_lang_Throwable_toString__;
_.java_lang_Object_typeId$ = 9;
_.java_lang_Throwable_detailMessage = null;
function java_lang_Exception_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Exception_12_1classLit;
}

function java_lang_Exception(){
}

_ = java_lang_Exception.prototype = new java_lang_Throwable();
_.getClass__$ = java_lang_Exception_getClass__;
_.java_lang_Object_typeId$ = 10;
function com_allen_1sauer_gwt_dnd_client_VetoDragException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1VetoDragException_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_VetoDragException(){
}

_ = com_allen_1sauer_gwt_dnd_client_VetoDragException.prototype = new java_lang_Exception();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_VetoDragException_getClass__;
_.java_lang_Object_typeId$ = 11;
function com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1AbstractDropController_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_getDropTarget__(){
  return this.com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_dropTarget;
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_onEnter__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_dropTarget.getStyleElement__(), $intern_26, true);
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_onLeave__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_dropTarget.getStyleElement__(), $intern_26, false);
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_onMove__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_onPreviewDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController(){
}

_ = com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController.prototype = new java_lang_Object();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_getClass__;
_.getDropTarget__ = com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_getDropTarget__;
_.onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.onEnter__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_onEnter__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.onLeave__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_onLeave__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.onMove__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_onMove__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.onPreviewDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_onPreviewDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.java_lang_Object_typeId$ = 12;
_.com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_dropTarget = null;
function com_allen_1sauer_gwt_dnd_client_drop_AbstractPositioningDropController_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1AbstractPositioningDropController_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractPositioningDropController(){
}

_ = com_allen_1sauer_gwt_dnd_client_drop_AbstractPositioningDropController.prototype = new com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_drop_AbstractPositioningDropController_getClass__;
_.java_lang_Object_typeId$ = 13;
function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_$clinit__(){
  com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_$clinit__ = nullMethod;
  com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_DUMMY_1LABEL_1IE_1QUIRKS_1MODE_1OFFSET_1HEIGHT = com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), $intern_27);
}

function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_$calcDropTargetOffset__Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_2(this$static){
  var dropTargetLocation;
  dropTargetLocation = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$WidgetLocation__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetLocation(), this$static.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTarget, null);
  this$static.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetOffsetX = dropTargetLocation.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left + com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getBorderLeft__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(this$static.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTarget.com_google_gwt_user_client_ui_UIObject_element);
  this$static.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetOffsetY = dropTargetLocation.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top + com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getBorderTop__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(this$static.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTarget.com_google_gwt_user_client_ui_UIObject_element);
}

function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_$makePositioner__Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_2Lcom_google_gwt_user_client_ui_Widget_2(reference){
  var inner, offsetHeight, offsetWidth, outer;
  outer = com_google_gwt_user_client_ui_SimplePanel_$SimplePanel__Lcom_google_gwt_user_client_ui_SimplePanel_2(new com_google_gwt_user_client_ui_SimplePanel());
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(outer.getStyleElement__(), $intern_28, true);
  outer.com_google_gwt_user_client_ui_UIObject_element.style[$intern_9] = $intern_10;
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II((com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null)), outer, -500, -500);
  outer.setWidget__Lcom_google_gwt_user_client_ui_Widget_2(com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_DUMMY_1LABEL_1IE_1QUIRKS_1MODE_1OFFSET_1HEIGHT);
  inner = com_google_gwt_user_client_ui_SimplePanel_$SimplePanel__Lcom_google_gwt_user_client_ui_SimplePanel_2(new com_google_gwt_user_client_ui_SimplePanel());
  inner.com_google_gwt_user_client_ui_UIObject_element.style[$intern_9] = $intern_10;
  inner.com_google_gwt_user_client_ui_UIObject_element.style[$intern_11] = $intern_12;
  offsetWidth = reference.getOffsetWidth__() - (outer.getOffsetWidth__() - com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getClientWidth__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(outer.com_google_gwt_user_client_ui_UIObject_element));
  offsetHeight = reference.getOffsetHeight__() - (outer.getOffsetHeight__() - com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getClientHeight__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(outer.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(inner, offsetWidth, offsetHeight);
  outer.setWidget__Lcom_google_gwt_user_client_ui_Widget_2(inner);
  return outer;
}

function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1AbsolutePositionDropController_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_makePositioner__Lcom_google_gwt_user_client_ui_Widget_2(reference){
  return com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_$makePositioner__Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_2Lcom_google_gwt_user_client_ui_Widget_2(reference);
}

function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  var draggable, draggable$iterator;
  for (draggable$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_draggableList); draggable$iterator.java_util_AbstractList$IteratorImpl_i < draggable$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    draggable = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(draggable$iterator), 25);
    com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_positioner);
    com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTarget, draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_widget, draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredX, draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredY);
  }
}

function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_onEnter__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  var draggable, draggableAbsoluteLeft, draggableAbsoluteTop, widget, widget$iterator;
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_dropTarget.getStyleElement__(), $intern_26, true);
  this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetClientWidth = com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getClientWidth__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTarget.com_google_gwt_user_client_ui_UIObject_element);
  this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetClientHeight = com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getClientHeight__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTarget.com_google_gwt_user_client_ui_UIObject_element);
  com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_$calcDropTargetOffset__Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_2(this);
  draggableAbsoluteLeft = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable.com_google_gwt_user_client_ui_UIObject_element));
  draggableAbsoluteTop = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteTop__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable.com_google_gwt_user_client_ui_UIObject_element);
  for (widget$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets); widget$iterator.java_util_AbstractList$IteratorImpl_i < widget$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(widget$iterator), 2);
    draggable = com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_$AbsolutePositionDropController$Draggable__Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable(), widget);
    draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_positioner = this.makePositioner__Lcom_google_gwt_user_client_ui_Widget_2(widget);
    draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_relativeX = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(widget.com_google_gwt_user_client_ui_UIObject_element) - draggableAbsoluteLeft;
    draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_relativeY = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteTop__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(widget.com_google_gwt_user_client_ui_UIObject_element) - draggableAbsoluteTop;
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_draggableList, draggable);
  }
}

function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_onLeave__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  var draggable, draggable$iterator;
  for (draggable$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_draggableList); draggable$iterator.java_util_AbstractList$IteratorImpl_i < draggable$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    draggable = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(draggable$iterator), 25);
    com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_positioner);
  }
  java_util_ArrayList_$clearImpl__Ljava_util_ArrayList_2(this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_draggableList);
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_dropTarget.getStyleElement__(), $intern_26, false);
}

function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_onMove__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  var draggable, draggable$iterator;
  for (draggable$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_draggableList); draggable$iterator.java_util_AbstractList$IteratorImpl_i < draggable$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    draggable = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(draggable$iterator), 25);
    draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredX = context.com_allen_1sauer_gwt_dnd_client_DragContext_desiredDraggableX - this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetOffsetX + draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_relativeX;
    draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredY = context.com_allen_1sauer_gwt_dnd_client_DragContext_desiredDraggableY - this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetOffsetY + draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_relativeY;
    draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredX = java_lang_Math_max__II(0, java_lang_Math_min__II(draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredX, this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetClientWidth - draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_offsetWidth));
    draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredY = java_lang_Math_max__II(0, java_lang_Math_min__II(draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredY, this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetClientHeight - draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_offsetHeight));
    com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTarget, draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_positioner, draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredX, draggable.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredY);
  }
  (com_google_gwt_dom_client_DOMImpl_$clinit__() , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_draggableList, 0), 25).com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_positioner.com_google_gwt_user_client_ui_UIObject_element).scrollIntoView();
  com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_$calcDropTargetOffset__Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_2(this);
}

function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController(){
}

_ = com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController.prototype = new com_allen_1sauer_gwt_dnd_client_drop_AbstractPositioningDropController();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_getClass__;
_.makePositioner__Lcom_google_gwt_user_client_ui_Widget_2 = com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_makePositioner__Lcom_google_gwt_user_client_ui_Widget_2;
_.onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.onEnter__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_onEnter__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.onLeave__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_onLeave__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.onMove__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_onMove__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.java_lang_Object_typeId$ = 14;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTarget = null;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetClientHeight = 0;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetClientWidth = 0;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetOffsetX = 0;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTargetOffsetY = 0;
var com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_DUMMY_1LABEL_1IE_1QUIRKS_1MODE_1OFFSET_1HEIGHT;
function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_$AbsolutePositionDropController$Draggable__Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, widget){
  this$static.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_widget = widget;
  this$static.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_offsetWidth = widget.getOffsetWidth__();
  this$static.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_offsetHeight = widget.getOffsetHeight__();
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1AbsolutePositionDropController$Draggable_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable(){
}

_ = com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable.prototype = new java_lang_Object();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_getClass__;
_.java_lang_Object_typeId$ = 15;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredX = 0;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_desiredY = 0;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_offsetHeight = 0;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_offsetWidth = 0;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_positioner = null;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_relativeX = 0;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_relativeY = 0;
_.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_widget = null;
function com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_$onDrop__Lcom_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_2Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this$static, context){
  var widget, widget$iterator;
  for (widget$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets); widget$iterator.java_util_AbstractList$IteratorImpl_i < widget$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(widget$iterator), 2);
    this$static.insert__Lcom_google_gwt_user_client_ui_Widget_2I(widget, this$static.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_dropIndex++);
  }
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1AbstractIndexedDropController_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_$onDrop__Lcom_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_2Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this, context);
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_onEnter__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  var targetIndex;
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_dropTarget.getStyleElement__(), $intern_26, true);
  this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_positioner = this.newPositioner__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context);
  targetIndex = com_allen_1sauer_gwt_dnd_client_util_DOMUtil_findIntersect__Lcom_google_gwt_user_client_ui_IndexedPanel_2Lcom_allen_1sauer_gwt_dnd_client_util_Location_2Lcom_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_2(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_dropTarget, com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_$CoordinateLocation__Lcom_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_2II(new com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation(), context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseX, context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseY), this.getLocationWidgetComparator__());
  this.insert__Lcom_google_gwt_user_client_ui_Widget_2I(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_positioner, targetIndex);
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_onLeave__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_positioner);
  this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_positioner = null;
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_dropTarget.getStyleElement__(), $intern_26, false);
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_onMove__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  var positionerIndex, targetIndex;
  targetIndex = com_allen_1sauer_gwt_dnd_client_util_DOMUtil_findIntersect__Lcom_google_gwt_user_client_ui_IndexedPanel_2Lcom_allen_1sauer_gwt_dnd_client_util_Location_2Lcom_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_2(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_dropTarget, com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_$CoordinateLocation__Lcom_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_2II(new com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation(), context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseX, context.com_allen_1sauer_gwt_dnd_client_DragContext_mouseY), this.getLocationWidgetComparator__());
  positionerIndex = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_dropTarget.com_google_gwt_user_client_ui_ComplexPanel_children, this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_positioner);
  if (positionerIndex != targetIndex && (positionerIndex != targetIndex - 1 || targetIndex == 0)) {
    if (positionerIndex == 0 && this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_dropTarget.com_google_gwt_user_client_ui_ComplexPanel_children.com_google_gwt_user_client_ui_WidgetCollection_size == 1) {
    }
     else if (targetIndex == -1) {
      com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_positioner);
    }
     else {
      this.insert__Lcom_google_gwt_user_client_ui_Widget_2I(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_positioner, targetIndex);
    }
  }
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_onPreviewDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_dropIndex = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_dropTarget.com_google_gwt_user_client_ui_ComplexPanel_children, this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_positioner);
  if (this.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_dropIndex == -1) {
    throw new com_allen_1sauer_gwt_dnd_client_VetoDragException();
  }
}

function com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController(){
}

_ = com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController.prototype = new com_allen_1sauer_gwt_dnd_client_drop_AbstractPositioningDropController();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_getClass__;
_.onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.onEnter__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_onEnter__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.onLeave__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_onLeave__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.onMove__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_onMove__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.onPreviewDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_onPreviewDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.java_lang_Object_typeId$ = 16;
_.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_dropIndex = 0;
_.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_dropTarget = null;
_.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_positioner = null;
function com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_$clinit__(){
  com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_$clinit__ = nullMethod;
  com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_$clinit__();
}

function com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_$BoundaryDropController__Lcom_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_2Lcom_google_gwt_user_client_ui_AbsolutePanel_2Z(this$static, dropTarget, allowDroppingOnBoundaryPanel){
  com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_$clinit__();
  this$static.com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_dropTarget = dropTarget;
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(dropTarget.com_google_gwt_user_client_ui_UIObject_element, $intern_29, true);
  this$static.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_draggableList = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  this$static.com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_dropTarget = dropTarget;
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(dropTarget.com_google_gwt_user_client_ui_UIObject_element, $intern_30, true);
  this$static.com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_allowDroppingOnBoundaryPanel = allowDroppingOnBoundaryPanel;
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1BoundaryDropController_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_makePositioner__Lcom_google_gwt_user_client_ui_Widget_2(reference){
  if (this.com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_allowDroppingOnBoundaryPanel) {
    return com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_$makePositioner__Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_2Lcom_google_gwt_user_client_ui_Widget_2(reference);
  }
   else {
    return com_google_gwt_user_client_ui_SimplePanel_$SimplePanel__Lcom_google_gwt_user_client_ui_SimplePanel_2(new com_google_gwt_user_client_ui_SimplePanel());
  }
}

function com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_onPreviewDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  if (!this.com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_allowDroppingOnBoundaryPanel) {
    throw new com_allen_1sauer_gwt_dnd_client_VetoDragException();
  }
}

function com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController(){
}

_ = com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController.prototype = new com_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_getClass__;
_.makePositioner__Lcom_google_gwt_user_client_ui_Widget_2 = com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_makePositioner__Lcom_google_gwt_user_client_ui_Widget_2;
_.onPreviewDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_onPreviewDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.java_lang_Object_typeId$ = 17;
_.com_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_allowDroppingOnBoundaryPanel = true;
function com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_$clinit__(){
  com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_$clinit__ = nullMethod;
  com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_DUMMY_1LABEL_1IE_1QUIRKS_1MODE_1OFFSET_1HEIGHT = com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), $intern_27);
}

function com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_$IndexedDropController__Lcom_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_2Lcom_google_gwt_user_client_ui_IndexedPanel_2(this$static, dropTarget){
  com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_$clinit__();
  this$static.com_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_dropTarget = dropTarget;
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(dropTarget.com_google_gwt_user_client_ui_UIObject_element, $intern_29, true);
  this$static.com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_dropTarget = dropTarget;
  if (!dropTarget) {
    throw java_lang_IllegalArgumentException_$IllegalArgumentException__Ljava_lang_IllegalArgumentException_2Ljava_lang_String_2(new java_lang_IllegalArgumentException(), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HorizontalPanel_12_1classLit.java_lang_Class_typeName + $intern_31);
  }
  this$static.com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_dropTarget = dropTarget;
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1IndexedDropController_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_getLocationWidgetComparator__(){
  if (this.com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_dropTarget) {
    return com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_$clinit__() , com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_RIGHT_1HALF_1COMPARATOR;
  }
   else {
    return com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_$clinit__() , com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_BOTTOM_1HALF_1COMPARATOR;
  }
}

function com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_insert__Lcom_google_gwt_user_client_ui_Widget_2I(widget, beforeIndex){
  if (this.com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_dropTarget) {
    com_google_gwt_user_client_ui_HorizontalPanel_$insert__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2I(this.com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_dropTarget, widget, beforeIndex);
  }
   else {
    com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2(this.com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_dropTarget).nullMethod();
  }
}

function com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_newPositioner__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  var height, inner, outer, widget, widget$iterator, width;
  outer = com_google_gwt_user_client_ui_SimplePanel_$SimplePanel__Lcom_google_gwt_user_client_ui_SimplePanel_2(new com_google_gwt_user_client_ui_SimplePanel());
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(outer.getStyleElement__(), $intern_28, true);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II((com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null)), outer, -500, -500);
  outer.setWidget__Lcom_google_gwt_user_client_ui_Widget_2(com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_DUMMY_1LABEL_1IE_1QUIRKS_1MODE_1OFFSET_1HEIGHT);
  width = 0;
  height = 0;
  if (this.com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_dropTarget) {
    for (widget$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets); widget$iterator.java_util_AbstractList$IteratorImpl_i < widget$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
      widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(widget$iterator), 2);
      width += widget.getOffsetWidth__();
      height = java_lang_Math_max__II(height, widget.getOffsetHeight__());
    }
  }
   else {
    for (widget$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), context.com_allen_1sauer_gwt_dnd_client_DragContext_selectedWidgets); widget$iterator.java_util_AbstractList$IteratorImpl_i < widget$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
      widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(widget$iterator), 2);
      width = java_lang_Math_max__II(width, widget.getOffsetWidth__());
      height += widget.getOffsetHeight__();
    }
  }
  inner = com_google_gwt_user_client_ui_SimplePanel_$SimplePanel__Lcom_google_gwt_user_client_ui_SimplePanel_2(new com_google_gwt_user_client_ui_SimplePanel());
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(inner, width - (outer.getOffsetWidth__() - com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getClientWidth__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(outer.com_google_gwt_user_client_ui_UIObject_element)), height - (outer.getOffsetHeight__() - com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getClientHeight__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(outer.com_google_gwt_user_client_ui_UIObject_element)));
  outer.setWidget__Lcom_google_gwt_user_client_ui_Widget_2(inner);
  return outer;
}

function com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController(){
}

_ = com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController.prototype = new com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_getClass__;
_.getLocationWidgetComparator__ = com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_getLocationWidgetComparator__;
_.insert__Lcom_google_gwt_user_client_ui_Widget_2I = com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_insert__Lcom_google_gwt_user_client_ui_Widget_2I;
_.newPositioner__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_newPositioner__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.java_lang_Object_typeId$ = 18;
_.com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_dropTarget = null;
var com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_DUMMY_1LABEL_1IE_1QUIRKS_1MODE_1OFFSET_1HEIGHT;
function com_allen_1sauer_gwt_dnd_client_util_AbstractArea_$intersects__Lcom_allen_1sauer_gwt_dnd_client_util_AbstractArea_2Lcom_allen_1sauer_gwt_dnd_client_util_Area_2(this$static, targetArea){
  if (this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_right < targetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left || this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left > targetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_right || this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_bottom < targetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top || this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top > targetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_bottom) {
    return false;
  }
  return true;
}

function com_allen_1sauer_gwt_dnd_client_util_AbstractArea_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1AbstractArea_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_util_AbstractArea_toString__(){
  return $intern_32 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 26).com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left + $intern_33 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 26).com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top + $intern_34 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 26).com_allen_1sauer_gwt_dnd_client_util_AbstractArea_right + $intern_33 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 26).com_allen_1sauer_gwt_dnd_client_util_AbstractArea_bottom + $intern_35;
}

function com_allen_1sauer_gwt_dnd_client_util_AbstractArea(){
}

_ = com_allen_1sauer_gwt_dnd_client_util_AbstractArea.prototype = new java_lang_Object();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_util_AbstractArea_getClass__;
_.toString__$ = com_allen_1sauer_gwt_dnd_client_util_AbstractArea_toString__;
_.java_lang_Object_typeId$ = 0;
_.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_bottom = 0;
_.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left = 0;
_.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_right = 0;
_.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top = 0;
function com_allen_1sauer_gwt_dnd_client_util_AbstractLocation_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1AbstractLocation_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_util_AbstractLocation_toString__(){
  return $intern_36 + this.getLeft__() + $intern_33 + this.getTop__() + $intern_37;
}

function com_allen_1sauer_gwt_dnd_client_util_AbstractLocation(){
}

_ = com_allen_1sauer_gwt_dnd_client_util_AbstractLocation.prototype = new java_lang_Object();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_util_AbstractLocation_getClass__;
_.toString__$ = com_allen_1sauer_gwt_dnd_client_util_AbstractLocation_toString__;
_.java_lang_Object_typeId$ = 19;
function com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_$CoordinateLocation__Lcom_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_2II(this$static, left, top){
  this$static.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_left = left;
  this$static.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_top = top;
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1CoordinateLocation_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_getLeft__(){
  return this.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_left;
}

function com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_getTop__(){
  return this.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_top;
}

function com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation(){
}

_ = com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation.prototype = new com_allen_1sauer_gwt_dnd_client_util_AbstractLocation();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_getClass__;
_.getLeft__ = com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_getLeft__;
_.getTop__ = com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_getTop__;
_.java_lang_Object_typeId$ = 20;
_.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_left = 0;
_.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_top = 0;
function com_allen_1sauer_gwt_dnd_client_util_DOMUtil_fastSetElementPosition__Lcom_google_gwt_dom_client_Element_2II(elem, left, top){
  elem.style[$intern_38] = left + $intern_39;
  elem.style[$intern_40] = top + $intern_39;
}

function com_allen_1sauer_gwt_dnd_client_util_DOMUtil_findIntersect__Lcom_google_gwt_user_client_ui_IndexedPanel_2Lcom_allen_1sauer_gwt_dnd_client_util_Location_2Lcom_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_2(parent, location, comparator){
  var high, low, mid, midArea, widget, widgetCount;
  widgetCount = parent.com_google_gwt_user_client_ui_ComplexPanel_children.com_google_gwt_user_client_ui_WidgetCollection_size;
  if (widgetCount == 0) {
    return 0;
  }
  low = 0;
  high = widgetCount;
  while (true) {
    mid = ~~((low + high) / 2);
    widget = com_google_gwt_user_client_ui_WidgetCollection_$get__Lcom_google_gwt_user_client_ui_WidgetCollection_2I(parent.com_google_gwt_user_client_ui_ComplexPanel_children, mid);
    midArea = com_allen_1sauer_gwt_dnd_client_util_WidgetArea_$WidgetArea__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetArea_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(new com_allen_1sauer_gwt_dnd_client_util_WidgetArea(), widget);
    if (mid == low) {
      if (mid == 0) {
        if (comparator.locationIndicatesIndexFollowingWidget__Lcom_allen_1sauer_gwt_dnd_client_util_Area_2Lcom_allen_1sauer_gwt_dnd_client_util_Location_2(midArea, location)) {
          return high;
        }
         else {
          return mid;
        }
      }
       else {
        return high;
      }
    }
    if (midArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_bottom < location.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_top) {
      low = mid;
    }
     else if (midArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top > location.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_top) {
      high = mid;
    }
     else if (midArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_right < location.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_left) {
      low = mid;
    }
     else if (midArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left > location.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_left) {
      high = mid;
    }
     else {
      if (comparator.locationIndicatesIndexFollowingWidget__Lcom_allen_1sauer_gwt_dnd_client_util_Area_2Lcom_allen_1sauer_gwt_dnd_client_util_Location_2(midArea, location)) {
        return mid + 1;
      }
       else {
        return mid;
      }
    }
  }
}

function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_$clinit__(){
  com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_$clinit__ = nullMethod;
  com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_BOTTOM_1HALF_1COMPARATOR = (com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$1_$clinit__() , com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_$clinit__() , new com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$1());
  com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$2_$clinit__();
  com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_RIGHT_1HALF_1COMPARATOR = (com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$3_$clinit__() , new com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$3());
}

function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1LocationWidgetComparator_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator(){
}

_ = com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator.prototype = new java_lang_Object();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_getClass__;
_.java_lang_Object_typeId$ = 0;
var com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_BOTTOM_1HALF_1COMPARATOR, com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_RIGHT_1HALF_1COMPARATOR;
function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$1_$clinit__(){
  com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$1_$clinit__ = nullMethod;
  com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_$clinit__();
}

function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1LocationWidgetComparator$1_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$1_locationIndicatesIndexFollowingWidget__Lcom_allen_1sauer_gwt_dnd_client_util_Area_2Lcom_allen_1sauer_gwt_dnd_client_util_Location_2(widgetArea, location){
  return location.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_top > widgetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top + ~~((widgetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_bottom - widgetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top) / 2);
}

function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$1(){
}

_ = com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$1.prototype = new com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$1_getClass__;
_.locationIndicatesIndexFollowingWidget__Lcom_allen_1sauer_gwt_dnd_client_util_Area_2Lcom_allen_1sauer_gwt_dnd_client_util_Location_2 = com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$1_locationIndicatesIndexFollowingWidget__Lcom_allen_1sauer_gwt_dnd_client_util_Area_2Lcom_allen_1sauer_gwt_dnd_client_util_Location_2;
_.java_lang_Object_typeId$ = 0;
function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$2_$clinit__(){
  com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$2_$clinit__ = nullMethod;
  com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_$clinit__();
}

function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$3_$clinit__(){
  com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$3_$clinit__ = nullMethod;
  com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator_$clinit__();
}

function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$3_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1LocationWidgetComparator$3_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$3_locationIndicatesIndexFollowingWidget__Lcom_allen_1sauer_gwt_dnd_client_util_Area_2Lcom_allen_1sauer_gwt_dnd_client_util_Location_2(widgetArea, location){
  return location.com_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_left > widgetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left + ~~((widgetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_right - widgetArea.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left) / 2);
}

function com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$3(){
}

_ = com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$3.prototype = new com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$3_getClass__;
_.locationIndicatesIndexFollowingWidget__Lcom_allen_1sauer_gwt_dnd_client_util_Area_2Lcom_allen_1sauer_gwt_dnd_client_util_Location_2 = com_allen_1sauer_gwt_dnd_client_util_LocationWidgetComparator$3_locationIndicatesIndexFollowingWidget__Lcom_allen_1sauer_gwt_dnd_client_util_Area_2Lcom_allen_1sauer_gwt_dnd_client_util_Location_2;
_.java_lang_Object_typeId$ = 0;
function com_allen_1sauer_gwt_dnd_client_util_WidgetArea_$WidgetArea__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetArea_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, widget){
  var bottom, elem, left, p, right, top;
  this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , widget.com_google_gwt_user_client_ui_UIObject_element));
  this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteTop__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(widget.com_google_gwt_user_client_ui_UIObject_element);
  this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_right = this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left + widget.getOffsetWidth__();
  this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_bottom = this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top + widget.getOffsetHeight__();
  elem = widget.com_google_gwt_user_client_ui_UIObject_element.offsetParent;
  while (!!elem && !!(p = elem.offsetParent)) {
    left = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(elem);
    if (this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left < left) {
      this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_left = left;
    }
    top = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteTop__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(elem);
    if (this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top < top) {
      this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_top = top;
    }
    bottom = top + (elem.offsetHeight || 0);
    if (this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_bottom > bottom) {
      this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_bottom = bottom;
    }
    right = left + (elem.offsetWidth || 0);
    if (this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_right > right) {
      this$static.com_allen_1sauer_gwt_dnd_client_util_AbstractArea_right = right;
    }
    elem = p;
  }
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_util_WidgetArea_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1WidgetArea_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_util_WidgetArea(){
}

_ = com_allen_1sauer_gwt_dnd_client_util_WidgetArea.prototype = new com_allen_1sauer_gwt_dnd_client_util_AbstractArea();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_util_WidgetArea_getClass__;
_.java_lang_Object_typeId$ = 21;
function com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$WidgetLocation__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, widget, reference){
  com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$internalSetWidget__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, widget);
  com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$internalSetReference__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, reference);
  this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left = this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_widgetLeft - this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_referenceAdjustLeft;
  this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top = this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_widgetTop - this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_referenceAdjustTop;
  return this$static;
}

function com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$internalSetReference__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, reference){
  if (!reference || reference == (com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null))) {
    this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_referenceAdjustLeft = 0;
    this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_referenceAdjustTop = 0;
  }
   else {
    this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_referenceAdjustLeft = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , reference.com_google_gwt_user_client_ui_UIObject_element)) + com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getBorderLeft__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(reference.com_google_gwt_user_client_ui_UIObject_element);
    this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_referenceAdjustTop = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteTop__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(reference.com_google_gwt_user_client_ui_UIObject_element) + com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getBorderTop__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(reference.com_google_gwt_user_client_ui_UIObject_element);
  }
}

function com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_$internalSetWidget__Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, widget){
  if (!widget || widget == (com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null))) {
    this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_widgetLeft = 0;
    this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_widgetTop = 0;
  }
   else {
    this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_widgetLeft = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , widget.com_google_gwt_user_client_ui_UIObject_element)) - (widget.com_google_gwt_user_client_ui_UIObject_element.scrollLeft || 0);
    this$static.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_widgetTop = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteTop__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(widget.com_google_gwt_user_client_ui_UIObject_element) - (widget.com_google_gwt_user_client_ui_UIObject_element.scrollTop || 0);
  }
}

function com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1WidgetLocation_12_1classLit;
}

function com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_getLeft__(){
  return this.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left;
}

function com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_getTop__(){
  return this.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top;
}

function com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_toString__(){
  return $intern_36 + this.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left + $intern_33 + this.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top + $intern_37;
}

function com_allen_1sauer_gwt_dnd_client_util_WidgetLocation(){
}

_ = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation.prototype = new com_allen_1sauer_gwt_dnd_client_util_AbstractLocation();
_.getClass__$ = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_getClass__;
_.getLeft__ = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_getLeft__;
_.getTop__ = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_getTop__;
_.toString__$ = com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_toString__;
_.java_lang_Object_typeId$ = 22;
_.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_left = 0;
_.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_referenceAdjustLeft = 0;
_.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_referenceAdjustTop = 0;
_.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_top = 0;
_.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_widgetLeft = 0;
_.com_allen_1sauer_gwt_dnd_client_util_WidgetLocation_widgetTop = 0;
function com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$cancelAllDocumentSelections__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2(){
  try {
    $wnd.getSelection().removeAllRanges();
  }
   catch (e) {
    throw new Error($intern_41 + e);
  }
}

function com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getBorderLeft__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(elem){
  try {
    var computedStyle = $doc.defaultView.getComputedStyle(elem, null);
    var borderLeftWidth = computedStyle.getPropertyValue($intern_42);
    return borderLeftWidth.indexOf($intern_39) == -1?0:parseInt(borderLeftWidth.substr(0, borderLeftWidth.length - 2));
  }
   catch (e) {
    throw new Error($intern_43 + e);
  }
}

function com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getBorderTop__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(elem){
  try {
    var computedStyle = $doc.defaultView.getComputedStyle(elem, null);
    var borderTopWidth = computedStyle.getPropertyValue($intern_44);
    return borderTopWidth.indexOf($intern_39) == -1?0:parseInt(borderTopWidth.substr(0, borderTopWidth.length - 2));
  }
   catch (e) {
    throw new Error($intern_45 + e);
  }
}

function com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getClientHeight__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(elem){
  try {
    return elem.clientHeight;
  }
   catch (e) {
    throw new Error($intern_46 + e);
  }
}

function com_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_$getClientWidth__Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2Lcom_google_gwt_dom_client_Element_2(elem){
  try {
    return elem.clientWidth;
  }
   catch (e) {
    throw new Error($intern_47 + e);
  }
}

function com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2(this$static){
  if (!this$static.com_google_gwt_animation_client_Animation_running) {
    return;
  }
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2(com_google_gwt_animation_client_Animation_animations, this$static);
  com_google_gwt_animation_client_Animation_$onCancel__Lcom_google_gwt_animation_client_Animation_2(this$static);
  this$static.com_google_gwt_animation_client_Animation_started = false;
  this$static.com_google_gwt_animation_client_Animation_running = false;
}

function com_google_gwt_animation_client_Animation_$onCancel__Lcom_google_gwt_animation_client_Animation_2(this$static){
  if (this$static.com_google_gwt_animation_client_Animation_started) {
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onComplete__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2(this$static);
  }
}

function com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2ID(this$static, duration, startTime){
  com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2(this$static);
  this$static.com_google_gwt_animation_client_Animation_running = true;
  this$static.com_google_gwt_animation_client_Animation_duration = duration;
  this$static.com_google_gwt_animation_client_Animation_startTime = startTime;
  if (com_google_gwt_animation_client_Animation_$update__Lcom_google_gwt_animation_client_Animation_2D(this$static, (new Date()).getTime())) {
    return;
  }
  if (!com_google_gwt_animation_client_Animation_animations) {
    com_google_gwt_animation_client_Animation_animations = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
    com_google_gwt_animation_client_Animation_animationTimer = (com_google_gwt_animation_client_Animation$1_$clinit__() , com_google_gwt_user_client_Timer_$clinit__() , new com_google_gwt_animation_client_Animation$1());
  }
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(com_google_gwt_animation_client_Animation_animations, this$static);
  if (com_google_gwt_animation_client_Animation_animations.java_util_ArrayList_size == 1) {
    com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2I(com_google_gwt_animation_client_Animation_animationTimer, 25);
  }
}

function com_google_gwt_animation_client_Animation_$update__Lcom_google_gwt_animation_client_Animation_2D(this$static, curTime){
  var finished, progress;
  finished = curTime >= this$static.com_google_gwt_animation_client_Animation_startTime + this$static.com_google_gwt_animation_client_Animation_duration;
  if (this$static.com_google_gwt_animation_client_Animation_started && !finished) {
    progress = (curTime - this$static.com_google_gwt_animation_client_Animation_startTime) / this$static.com_google_gwt_animation_client_Animation_duration;
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onUpdate__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2D(this$static, (1 + Math.cos(3.141592653589793 + progress * 3.141592653589793)) / 2);
    return false;
  }
  if (!this$static.com_google_gwt_animation_client_Animation_started && curTime >= this$static.com_google_gwt_animation_client_Animation_startTime) {
    this$static.com_google_gwt_animation_client_Animation_started = true;
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight = parseInt(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element[$intern_17]) || 0;
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth = parseInt(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element[$intern_16]) || 0;
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style[$intern_18] = $intern_8;
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onUpdate__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2D(this$static, (1 + Math.cos(3.141592653589793)) / 2);
  }
  if (finished) {
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onComplete__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2(this$static);
    this$static.com_google_gwt_animation_client_Animation_started = false;
    this$static.com_google_gwt_animation_client_Animation_running = false;
    return true;
  }
  return false;
}

function com_google_gwt_animation_client_Animation_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1Animation_12_1classLit;
}

function com_google_gwt_animation_client_Animation_updateAnimations__(){
  var animation, animation$array, animation$index, animation$max, curAnimations, curTime;
  curAnimations = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1animation_1client_1Animation_12_1classLit, 124, 5, com_google_gwt_animation_client_Animation_animations.java_util_ArrayList_size, 0);
  curAnimations = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2(com_google_gwt_animation_client_Animation_animations, curAnimations), 27);
  curTime = (new Date()).getTime();
  for (animation$array = curAnimations , animation$index = 0 , animation$max = animation$array.length; animation$index < animation$max; ++animation$index) {
    animation = animation$array[animation$index];
    if (animation.com_google_gwt_animation_client_Animation_running && com_google_gwt_animation_client_Animation_$update__Lcom_google_gwt_animation_client_Animation_2D(animation, curTime)) {
      java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2(com_google_gwt_animation_client_Animation_animations, animation);
    }
  }
  if (com_google_gwt_animation_client_Animation_animations.java_util_ArrayList_size > 0) {
    com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2I(com_google_gwt_animation_client_Animation_animationTimer, 25);
  }
}

function com_google_gwt_animation_client_Animation(){
}

_ = com_google_gwt_animation_client_Animation.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_animation_client_Animation_getClass__;
_.java_lang_Object_typeId$ = 23;
_.com_google_gwt_animation_client_Animation_duration = -1;
_.com_google_gwt_animation_client_Animation_running = false;
_.com_google_gwt_animation_client_Animation_startTime = -1;
_.com_google_gwt_animation_client_Animation_started = false;
var com_google_gwt_animation_client_Animation_animationTimer = null, com_google_gwt_animation_client_Animation_animations = null;
function com_google_gwt_user_client_Timer_$clinit__(){
  com_google_gwt_user_client_Timer_$clinit__ = nullMethod;
  com_google_gwt_user_client_Timer_timers = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2(new com_google_gwt_user_client_Timer$1());
}

function com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2(this$static){
  if (this$static.com_google_gwt_user_client_Timer_isRepeating) {
    $wnd.clearInterval(this$static.com_google_gwt_user_client_Timer_timerId);
  }
   else {
    $wnd.clearTimeout(this$static.com_google_gwt_user_client_Timer_timerId);
  }
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2(com_google_gwt_user_client_Timer_timers, this$static);
}

function com_google_gwt_user_client_Timer_$fireImpl__Lcom_google_gwt_user_client_Timer_2(this$static){
  if (!this$static.com_google_gwt_user_client_Timer_isRepeating) {
    java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2(com_google_gwt_user_client_Timer_timers, this$static);
  }
  this$static.run__();
}

function com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2I(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw java_lang_IllegalArgumentException_$IllegalArgumentException__Ljava_lang_IllegalArgumentException_2Ljava_lang_String_2(new java_lang_IllegalArgumentException(), $intern_48);
  }
  com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2(this$static);
  this$static.com_google_gwt_user_client_Timer_isRepeating = false;
  this$static.com_google_gwt_user_client_Timer_timerId = com_google_gwt_user_client_Timer_createTimeout__Lcom_google_gwt_user_client_Timer_2I(this$static, delayMillis);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(com_google_gwt_user_client_Timer_timers, this$static);
}

function com_google_gwt_user_client_Timer_createTimeout__Lcom_google_gwt_user_client_Timer_2I(timer, delay){
  return $wnd.setTimeout(function(){
    timer.fire__();
  }
  , delay);
}

function com_google_gwt_user_client_Timer_fire__(){
  com_google_gwt_user_client_Timer_$fireImpl__Lcom_google_gwt_user_client_Timer_2(this);
}

function com_google_gwt_user_client_Timer_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Timer_12_1classLit;
}

function com_google_gwt_user_client_Timer(){
}

_ = com_google_gwt_user_client_Timer.prototype = new java_lang_Object();
_.fire__ = com_google_gwt_user_client_Timer_fire__;
_.getClass__$ = com_google_gwt_user_client_Timer_getClass__;
_.java_lang_Object_typeId$ = 24;
_.com_google_gwt_user_client_Timer_isRepeating = false;
_.com_google_gwt_user_client_Timer_timerId = 0;
var com_google_gwt_user_client_Timer_timers;
function com_google_gwt_animation_client_Animation$1_$clinit__(){
  com_google_gwt_animation_client_Animation$1_$clinit__ = nullMethod;
  com_google_gwt_user_client_Timer_$clinit__();
}

function com_google_gwt_animation_client_Animation$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1Animation$1_12_1classLit;
}

function com_google_gwt_animation_client_Animation$1_run__(){
  com_google_gwt_animation_client_Animation_updateAnimations__();
}

function com_google_gwt_animation_client_Animation$1(){
}

_ = com_google_gwt_animation_client_Animation$1.prototype = new com_google_gwt_user_client_Timer();
_.getClass__$ = com_google_gwt_animation_client_Animation$1_getClass__;
_.run__ = com_google_gwt_animation_client_Animation$1_run__;
_.java_lang_Object_typeId$ = 25;
function java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(this$static, message){
  this$static.java_lang_Throwable_detailMessage = message;
  return this$static;
}

function java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2Ljava_lang_Throwable_2(this$static, message){
  this$static.java_lang_Throwable_detailMessage = message;
  return this$static;
}

function java_lang_RuntimeException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1RuntimeException_12_1classLit;
}

function java_lang_RuntimeException(){
}

_ = java_lang_RuntimeException.prototype = new java_lang_Exception();
_.getClass__$ = java_lang_RuntimeException_getClass__;
_.java_lang_Object_typeId$ = 26;
function com_google_gwt_core_client_JavaScriptException_$JavaScriptException__Lcom_google_gwt_core_client_JavaScriptException_2Ljava_lang_Object_2(this$static, e){
  this$static.com_google_gwt_core_client_JavaScriptException_e = e;
  return this$static;
}

function com_google_gwt_core_client_JavaScriptException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptException_12_1classLit;
}

function com_google_gwt_core_client_JavaScriptException_getDescription__Ljava_lang_Object_2(e){
  if (e != null && (e.java_lang_Object_typeMarker$ != nullMethod && e.java_lang_Object_typeId$ != 2)) {
    return com_google_gwt_core_client_JavaScriptException_getDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2(e));
  }
   else {
    return e + $intern_49;
  }
}

function com_google_gwt_core_client_JavaScriptException_getDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2(e){
  return e == null?null:e.message;
}

function com_google_gwt_core_client_JavaScriptException_getMessage__(){
  if (this.com_google_gwt_core_client_JavaScriptException_message == null) {
    this.com_google_gwt_core_client_JavaScriptException_name = com_google_gwt_core_client_JavaScriptException_getName__Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e);
    this.com_google_gwt_core_client_JavaScriptException_description = com_google_gwt_core_client_JavaScriptException_getDescription__Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e);
    this.com_google_gwt_core_client_JavaScriptException_message = $intern_36 + this.com_google_gwt_core_client_JavaScriptException_name + $intern_50 + this.com_google_gwt_core_client_JavaScriptException_description + com_google_gwt_core_client_JavaScriptException_getProperties__Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e);
  }
  return this.com_google_gwt_core_client_JavaScriptException_message;
}

function com_google_gwt_core_client_JavaScriptException_getName__Ljava_lang_Object_2(e){
  if (e == null) {
    return $intern_51;
  }
   else if (e != null && (e.java_lang_Object_typeMarker$ != nullMethod && e.java_lang_Object_typeId$ != 2)) {
    return com_google_gwt_core_client_JavaScriptException_getName0__Lcom_google_gwt_core_client_JavaScriptObject_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2(e));
  }
   else if (e != null && com_google_gwt_lang_Cast_canCast__II(e.java_lang_Object_typeId$, 1)) {
    return $intern_52;
  }
   else {
    return (e.java_lang_Object_typeMarker$ == nullMethod || e.java_lang_Object_typeId$ == 2?e.getClass__$():com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit).java_lang_Class_typeName;
  }
}

function com_google_gwt_core_client_JavaScriptException_getName0__Lcom_google_gwt_core_client_JavaScriptObject_2(e){
  return e == null?null:e.name;
}

function com_google_gwt_core_client_JavaScriptException_getProperties__Ljava_lang_Object_2(e){
  return e != null && (e.java_lang_Object_typeMarker$ != nullMethod && e.java_lang_Object_typeId$ != 2)?com_google_gwt_core_client_JavaScriptException_getProperties0__Lcom_google_gwt_core_client_JavaScriptObject_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2(e)):$intern_49;
}

function com_google_gwt_core_client_JavaScriptException_getProperties0__Lcom_google_gwt_core_client_JavaScriptObject_2(e){
  var result = $intern_49;
  try {
    for (prop in e) {
      if (prop != $intern_53 && (prop != $intern_54 && prop != $intern_55)) {
        try {
          result += $intern_56 + prop + $intern_25 + e[prop];
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

function com_google_gwt_core_client_JavaScriptException(){
}

_ = com_google_gwt_core_client_JavaScriptException.prototype = new java_lang_RuntimeException();
_.getClass__$ = com_google_gwt_core_client_JavaScriptException_getClass__;
_.getMessage__ = com_google_gwt_core_client_JavaScriptException_getMessage__;
_.java_lang_Object_typeId$ = 27;
_.com_google_gwt_core_client_JavaScriptException_description = null;
_.com_google_gwt_core_client_JavaScriptException_e = null;
_.com_google_gwt_core_client_JavaScriptException_message = null;
_.com_google_gwt_core_client_JavaScriptException_name = null;
function com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2(this$static, other){
  return this$static.java_lang_Object_typeMarker$ == nullMethod || this$static.java_lang_Object_typeId$ == 2?this$static.equals__Ljava_lang_Object_2$(other):(this$static == null?null:this$static) === (other == null?null:other);
}

function com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2(this$static){
  return this$static.java_lang_Object_typeMarker$ == nullMethod || this$static.java_lang_Object_typeId$ == 2?this$static.hashCode__$():this$static.$H || (this$static.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}

function com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2(o){
  return o.$H || (o.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}

var com_google_gwt_core_client_impl_Impl_sNextHashId = 0;
function com_google_gwt_core_client_impl_StringBufferImpl_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StringBufferImpl_12_1classLit;
}

function com_google_gwt_core_client_impl_StringBufferImpl(){
}

_ = com_google_gwt_core_client_impl_StringBufferImpl.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_core_client_impl_StringBufferImpl_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_core_client_impl_StringBufferImplAppend_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StringBufferImplAppend_12_1classLit;
}

function com_google_gwt_core_client_impl_StringBufferImplAppend(){
}

_ = com_google_gwt_core_client_impl_StringBufferImplAppend.prototype = new com_google_gwt_core_client_impl_StringBufferImpl();
_.getClass__$ = com_google_gwt_core_client_impl_StringBufferImplAppend_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_core_client_impl_StringBufferImplAppend_string = $intern_49;
function com_google_gwt_dom_client_DOMImpl_$clinit__(){
  com_google_gwt_dom_client_DOMImpl_$clinit__ = nullMethod;
  com_google_gwt_dom_client_DOMImplOpera_$clinit__();
  new com_google_gwt_dom_client_DOMImplOpera();
}

function com_google_gwt_dom_client_DOMImpl_$getBodyOffsetLeft__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2(){
  return 0;
}

function com_google_gwt_dom_client_DOMImpl_$getBodyOffsetTop__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2(){
  return 0;
}

function com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2(elem){
  var parent = elem.parentNode;
  if (parent == null) {
    return null;
  }
  if (parent.nodeType != 1)
    parent = null;
  return parent;
}

function com_google_gwt_dom_client_DOMImpl_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2(doc){
  return (com_google_gwt_dom_client_DOMImpl_$clinit__() , java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2(doc.compatMode, $intern_57)?doc.documentElement:doc.body).scrollLeft || 0;
}

function com_google_gwt_dom_client_DOMImpl_$getScrollTop__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2(doc){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2(doc.compatMode, $intern_57)?doc.documentElement:doc.body).scrollTop || 0;
}

function com_google_gwt_dom_client_DOMImpl_$setInnerText__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2(elem, text){
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  if (text != null) {
    elem.appendChild(elem.ownerDocument.createTextNode(text));
  }
}

function com_google_gwt_dom_client_DOMImpl_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1DOMImpl_12_1classLit;
}

function com_google_gwt_dom_client_DOMImpl(){
}

_ = com_google_gwt_dom_client_DOMImpl.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_dom_client_DOMImpl_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_dom_client_DOMImplStandard_$clinit__(){
  com_google_gwt_dom_client_DOMImplStandard_$clinit__ = nullMethod;
  com_google_gwt_dom_client_DOMImpl_$clinit__();
}

function com_google_gwt_dom_client_DOMImplStandard_$eventGetButton__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_NativeEvent_2(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function com_google_gwt_dom_client_DOMImplStandard_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1DOMImplStandard_12_1classLit;
}

function com_google_gwt_dom_client_DOMImplStandard(){
}

_ = com_google_gwt_dom_client_DOMImplStandard.prototype = new com_google_gwt_dom_client_DOMImpl();
_.getClass__$ = com_google_gwt_dom_client_DOMImplStandard_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_dom_client_DOMImplOpera_$clinit__(){
  com_google_gwt_dom_client_DOMImplOpera_$clinit__ = nullMethod;
  com_google_gwt_dom_client_DOMImplStandard_$clinit__();
}

function com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(elem){
  var left = 0;
  var curr = elem.parentNode;
  while (curr && curr.offsetParent) {
    if (curr.tagName != $intern_58 && curr.tagName != $intern_59) {
      left -= curr.scrollLeft;
    }
    curr = curr.parentNode;
  }
  while (elem) {
    left += elem.offsetLeft;
    elem = elem.offsetParent;
  }
  return left;
}

function com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteTop__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(elem){
  var top = 0;
  var curr = elem.parentNode;
  while (curr && curr.offsetParent) {
    if (curr.tagName != $intern_58 && curr.tagName != $intern_59) {
      top -= curr.scrollTop;
    }
    curr = curr.parentNode;
  }
  while (elem) {
    top += elem.offsetTop;
    elem = elem.offsetParent;
  }
  return top;
}

function com_google_gwt_dom_client_DOMImplOpera_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1DOMImplOpera_12_1classLit;
}

function com_google_gwt_dom_client_DOMImplOpera(){
}

_ = com_google_gwt_dom_client_DOMImplOpera.prototype = new com_google_gwt_dom_client_DOMImplStandard();
_.getClass__$ = com_google_gwt_dom_client_DOMImplOpera_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2(this$static){
  if (!this$static.gwt_uid) {
    this$static.gwt_uid = 1;
  }
  return $intern_60 + this$static.gwt_uid++;
}

function com_google_gwt_dom_client_Document_$getBodyOffsetLeft__Lcom_google_gwt_dom_client_Document_2(){
  return com_google_gwt_dom_client_DOMImpl_$getBodyOffsetLeft__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2(com_google_gwt_dom_client_DOMImpl_$clinit__());
}

function com_google_gwt_dom_client_Document_$getBodyOffsetTop__Lcom_google_gwt_dom_client_Document_2(){
  return com_google_gwt_dom_client_DOMImpl_$getBodyOffsetTop__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2(com_google_gwt_dom_client_DOMImpl_$clinit__());
}

function com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2(this$static.compatMode, $intern_57)?this$static.documentElement:this$static.body).clientHeight;
}

function com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2(this$static.compatMode, $intern_57)?this$static.documentElement:this$static.body).clientWidth;
}

function com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2(this$static, name){
  return this$static[name] == null?null:String(this$static[name]);
}

function com_google_gwt_dom_client_Element_is__Lcom_google_gwt_core_client_JavaScriptObject_2(o){
  if (!!o && !!o.nodeType) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function com_google_gwt_event_shared_GwtEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent_12_1classLit;
}

function com_google_gwt_event_shared_GwtEvent_revive__(){
  this.com_google_gwt_event_shared_GwtEvent_dead = false;
  this.com_google_gwt_event_shared_GwtEvent_source = null;
}

function com_google_gwt_event_shared_GwtEvent_toString__(){
  return $intern_61;
}

function com_google_gwt_event_shared_GwtEvent(){
}

_ = com_google_gwt_event_shared_GwtEvent.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_event_shared_GwtEvent_getClass__;
_.revive__ = com_google_gwt_event_shared_GwtEvent_revive__;
_.toString__$ = com_google_gwt_event_shared_GwtEvent_toString__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_event_shared_GwtEvent_dead = false;
_.com_google_gwt_event_shared_GwtEvent_source = null;
function com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (com_google_gwt_event_dom_client_DomEvent_registered) {
    typeKey = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(com_google_gwt_event_dom_client_DomEvent_registered.com_google_gwt_event_dom_client_PrivateMap_map[(com_google_gwt_dom_client_DOMImpl_$clinit__() , nativeEvent).type], 28);
    if (typeKey) {
      currentNative = typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
      currentRelativeElem = typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem;
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent = nativeEvent;
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem = relativeElem;
      com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2(handlerSource, typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight);
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent = currentNative;
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem = currentRelativeElem;
    }
  }
}

function com_google_gwt_event_dom_client_DomEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent_12_1classLit;
}

function com_google_gwt_event_dom_client_DomEvent(){
}

_ = com_google_gwt_event_dom_client_DomEvent.prototype = new com_google_gwt_event_shared_GwtEvent();
_.getClass__$ = com_google_gwt_event_dom_client_DomEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_event_dom_client_DomEvent_nativeEvent = null;
_.com_google_gwt_event_dom_client_DomEvent_relativeElem = null;
var com_google_gwt_event_dom_client_DomEvent_registered = null;
function com_google_gwt_event_dom_client_ClickEvent_$clinit__(){
  com_google_gwt_event_dom_client_ClickEvent_$clinit__ = nullMethod;
  com_google_gwt_event_dom_client_ClickEvent_TYPE = com_google_gwt_event_dom_client_DomEvent$Type_$DomEvent$Type__Lcom_google_gwt_event_dom_client_DomEvent$Type_2Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2(new com_google_gwt_event_dom_client_DomEvent$Type(), $intern_62, (com_google_gwt_event_dom_client_ClickEvent_$clinit__() , new com_google_gwt_event_dom_client_ClickEvent()));
}

function com_google_gwt_event_dom_client_ClickEvent_dispatch__Lcom_google_gwt_event_dom_client_ClickHandler_2(handler){
  handler.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2(this);
}

function com_google_gwt_event_dom_client_ClickEvent_getAssociatedType__(){
  return com_google_gwt_event_dom_client_ClickEvent_TYPE;
}

function com_google_gwt_event_dom_client_ClickEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1ClickEvent_12_1classLit;
}

function com_google_gwt_event_dom_client_ClickEvent(){
}

_ = com_google_gwt_event_dom_client_ClickEvent.prototype = new com_google_gwt_event_dom_client_DomEvent();
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2 = com_google_gwt_event_dom_client_ClickEvent_dispatch__Lcom_google_gwt_event_dom_client_ClickHandler_2;
_.getAssociatedType__ = com_google_gwt_event_dom_client_ClickEvent_getAssociatedType__;
_.getClass__$ = com_google_gwt_event_dom_client_ClickEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_event_dom_client_ClickEvent_TYPE;
function com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2(this$static){
  this$static.com_google_gwt_event_shared_GwtEvent$Type_index = ++com_google_gwt_event_shared_GwtEvent$Type_nextHashCode;
  return this$static;
}

function com_google_gwt_event_shared_GwtEvent$Type_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent$Type_12_1classLit;
}

function com_google_gwt_event_shared_GwtEvent$Type_hashCode__(){
  return this.com_google_gwt_event_shared_GwtEvent$Type_index;
}

function com_google_gwt_event_shared_GwtEvent$Type_toString__(){
  return $intern_63;
}

function com_google_gwt_event_shared_GwtEvent$Type(){
}

_ = com_google_gwt_event_shared_GwtEvent$Type.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_event_shared_GwtEvent$Type_getClass__;
_.hashCode__$ = com_google_gwt_event_shared_GwtEvent$Type_hashCode__;
_.toString__$ = com_google_gwt_event_shared_GwtEvent$Type_toString__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_event_shared_GwtEvent$Type_index = 0;
var com_google_gwt_event_shared_GwtEvent$Type_nextHashCode = 0;
function com_google_gwt_event_dom_client_DomEvent$Type_$DomEvent$Type__Lcom_google_gwt_event_dom_client_DomEvent$Type_2Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2(this$static, eventName, flyweight){
  this$static.com_google_gwt_event_shared_GwtEvent$Type_index = ++com_google_gwt_event_shared_GwtEvent$Type_nextHashCode;
  this$static.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = flyweight;
  if (!com_google_gwt_event_dom_client_DomEvent_registered) {
    com_google_gwt_event_dom_client_DomEvent_registered = com_google_gwt_event_dom_client_PrivateMap_$PrivateMap__Lcom_google_gwt_event_dom_client_PrivateMap_2(new com_google_gwt_event_dom_client_PrivateMap());
  }
  com_google_gwt_event_dom_client_DomEvent_registered.com_google_gwt_event_dom_client_PrivateMap_map[eventName] = this$static;
  this$static.com_google_gwt_event_dom_client_DomEvent$Type_name = eventName;
  return this$static;
}

function com_google_gwt_event_dom_client_DomEvent$Type_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent$Type_12_1classLit;
}

function com_google_gwt_event_dom_client_DomEvent$Type(){
}

_ = com_google_gwt_event_dom_client_DomEvent$Type.prototype = new com_google_gwt_event_shared_GwtEvent$Type();
_.getClass__$ = com_google_gwt_event_dom_client_DomEvent$Type_getClass__;
_.java_lang_Object_typeId$ = 28;
_.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = null;
_.com_google_gwt_event_dom_client_DomEvent$Type_name = null;
function com_google_gwt_event_dom_client_KeyEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1KeyEvent_12_1classLit;
}

function com_google_gwt_event_dom_client_KeyEvent(){
}

_ = com_google_gwt_event_dom_client_KeyEvent.prototype = new com_google_gwt_event_dom_client_DomEvent();
_.getClass__$ = com_google_gwt_event_dom_client_KeyEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_event_dom_client_KeyPressEvent_$clinit__(){
  com_google_gwt_event_dom_client_KeyPressEvent_$clinit__ = nullMethod;
  com_google_gwt_event_dom_client_KeyPressEvent_TYPE = com_google_gwt_event_dom_client_DomEvent$Type_$DomEvent$Type__Lcom_google_gwt_event_dom_client_DomEvent$Type_2Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2(new com_google_gwt_event_dom_client_DomEvent$Type(), $intern_64, (com_google_gwt_event_dom_client_KeyPressEvent_$clinit__() , new com_google_gwt_event_dom_client_KeyPressEvent()));
}

function com_google_gwt_event_dom_client_KeyPressEvent_$getCharCode__Lcom_google_gwt_event_dom_client_KeyPressEvent_2Lcom_google_gwt_dom_client_NativeEvent_2(e){
  return e.charCode || e.keyCode;
}

function com_google_gwt_event_dom_client_KeyPressEvent_dispatch__Lcom_google_gwt_event_dom_client_KeyPressHandler_2(handler){
  com_scrumzilla_client_ui_AddStoryPanel$2_$onKeyPress__Lcom_scrumzilla_client_ui_AddStoryPanel$2_2Lcom_google_gwt_event_dom_client_KeyPressEvent_2(handler, this);
}

function com_google_gwt_event_dom_client_KeyPressEvent_getAssociatedType__(){
  return com_google_gwt_event_dom_client_KeyPressEvent_TYPE;
}

function com_google_gwt_event_dom_client_KeyPressEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1KeyPressEvent_12_1classLit;
}

function com_google_gwt_event_dom_client_KeyPressEvent(){
}

_ = com_google_gwt_event_dom_client_KeyPressEvent.prototype = new com_google_gwt_event_dom_client_KeyEvent();
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2 = com_google_gwt_event_dom_client_KeyPressEvent_dispatch__Lcom_google_gwt_event_dom_client_KeyPressHandler_2;
_.getAssociatedType__ = com_google_gwt_event_dom_client_KeyPressEvent_getAssociatedType__;
_.getClass__$ = com_google_gwt_event_dom_client_KeyPressEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_event_dom_client_KeyPressEvent_TYPE;
function com_google_gwt_event_dom_client_MouseEvent_$getRelativeX__Lcom_google_gwt_event_dom_client_MouseEvent_2Lcom_google_gwt_dom_client_Element_2(this$static, target){
  var e;
  e = this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
  return ((com_google_gwt_dom_client_DOMImpl_$clinit__() , e).clientX || 0) - com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(target) + (target.scrollLeft || 0) + com_google_gwt_dom_client_DOMImpl_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2(target.ownerDocument);
}

function com_google_gwt_event_dom_client_MouseEvent_$getRelativeY__Lcom_google_gwt_event_dom_client_MouseEvent_2Lcom_google_gwt_dom_client_Element_2(this$static, target){
  var e;
  e = this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
  return ((com_google_gwt_dom_client_DOMImpl_$clinit__() , e).clientY || 0) - com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteTop__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(target) + (target.scrollTop || 0) + com_google_gwt_dom_client_DOMImpl_$getScrollTop__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2(target.ownerDocument);
}

function com_google_gwt_event_dom_client_MouseEvent_$getX__Lcom_google_gwt_event_dom_client_MouseEvent_2(this$static){
  var relativeElem;
  relativeElem = this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem;
  if (relativeElem) {
    return com_google_gwt_event_dom_client_MouseEvent_$getRelativeX__Lcom_google_gwt_event_dom_client_MouseEvent_2Lcom_google_gwt_dom_client_Element_2(this$static, relativeElem);
  }
  return (com_google_gwt_dom_client_DOMImpl_$clinit__() , this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent).clientX || 0;
}

function com_google_gwt_event_dom_client_MouseEvent_$getY__Lcom_google_gwt_event_dom_client_MouseEvent_2(this$static){
  var relativeElem;
  relativeElem = this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem;
  if (relativeElem) {
    return com_google_gwt_event_dom_client_MouseEvent_$getRelativeY__Lcom_google_gwt_event_dom_client_MouseEvent_2Lcom_google_gwt_dom_client_Element_2(this$static, relativeElem);
  }
  return (com_google_gwt_dom_client_DOMImpl_$clinit__() , this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent).clientY || 0;
}

function com_google_gwt_event_dom_client_MouseEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseEvent_12_1classLit;
}

function com_google_gwt_event_dom_client_MouseEvent(){
}

_ = com_google_gwt_event_dom_client_MouseEvent.prototype = new com_google_gwt_event_dom_client_DomEvent();
_.getClass__$ = com_google_gwt_event_dom_client_MouseEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_event_dom_client_MouseDownEvent_$clinit__(){
  com_google_gwt_event_dom_client_MouseDownEvent_$clinit__ = nullMethod;
  com_google_gwt_event_dom_client_MouseDownEvent_TYPE = com_google_gwt_event_dom_client_DomEvent$Type_$DomEvent$Type__Lcom_google_gwt_event_dom_client_DomEvent$Type_2Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2(new com_google_gwt_event_dom_client_DomEvent$Type(), $intern_65, (com_google_gwt_event_dom_client_MouseDownEvent_$clinit__() , new com_google_gwt_event_dom_client_MouseDownEvent()));
}

function com_google_gwt_event_dom_client_MouseDownEvent_dispatch__Lcom_google_gwt_event_dom_client_MouseDownHandler_2(handler){
  com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$onMouseDown__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_event_dom_client_MouseDownEvent_2(handler, this);
}

function com_google_gwt_event_dom_client_MouseDownEvent_getAssociatedType__(){
  return com_google_gwt_event_dom_client_MouseDownEvent_TYPE;
}

function com_google_gwt_event_dom_client_MouseDownEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseDownEvent_12_1classLit;
}

function com_google_gwt_event_dom_client_MouseDownEvent(){
}

_ = com_google_gwt_event_dom_client_MouseDownEvent.prototype = new com_google_gwt_event_dom_client_MouseEvent();
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2 = com_google_gwt_event_dom_client_MouseDownEvent_dispatch__Lcom_google_gwt_event_dom_client_MouseDownHandler_2;
_.getAssociatedType__ = com_google_gwt_event_dom_client_MouseDownEvent_getAssociatedType__;
_.getClass__$ = com_google_gwt_event_dom_client_MouseDownEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_event_dom_client_MouseDownEvent_TYPE;
function com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__(){
  com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__ = nullMethod;
  com_google_gwt_event_dom_client_MouseMoveEvent_TYPE = com_google_gwt_event_dom_client_DomEvent$Type_$DomEvent$Type__Lcom_google_gwt_event_dom_client_DomEvent$Type_2Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2(new com_google_gwt_event_dom_client_DomEvent$Type(), $intern_66, (com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__() , new com_google_gwt_event_dom_client_MouseMoveEvent()));
}

function com_google_gwt_event_dom_client_MouseMoveEvent_dispatch__Lcom_google_gwt_event_dom_client_MouseMoveHandler_2(handler){
  com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$onMouseMove__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_event_dom_client_MouseMoveEvent_2(handler, this);
}

function com_google_gwt_event_dom_client_MouseMoveEvent_getAssociatedType__(){
  return com_google_gwt_event_dom_client_MouseMoveEvent_TYPE;
}

function com_google_gwt_event_dom_client_MouseMoveEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseMoveEvent_12_1classLit;
}

function com_google_gwt_event_dom_client_MouseMoveEvent(){
}

_ = com_google_gwt_event_dom_client_MouseMoveEvent.prototype = new com_google_gwt_event_dom_client_MouseEvent();
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2 = com_google_gwt_event_dom_client_MouseMoveEvent_dispatch__Lcom_google_gwt_event_dom_client_MouseMoveHandler_2;
_.getAssociatedType__ = com_google_gwt_event_dom_client_MouseMoveEvent_getAssociatedType__;
_.getClass__$ = com_google_gwt_event_dom_client_MouseMoveEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_event_dom_client_MouseMoveEvent_TYPE;
function com_google_gwt_event_dom_client_MouseOutEvent_$clinit__(){
  com_google_gwt_event_dom_client_MouseOutEvent_$clinit__ = nullMethod;
  com_google_gwt_event_dom_client_MouseOutEvent_TYPE = com_google_gwt_event_dom_client_DomEvent$Type_$DomEvent$Type__Lcom_google_gwt_event_dom_client_DomEvent$Type_2Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2(new com_google_gwt_event_dom_client_DomEvent$Type(), $intern_67, (com_google_gwt_event_dom_client_MouseOutEvent_$clinit__() , new com_google_gwt_event_dom_client_MouseOutEvent()));
}

function com_google_gwt_event_dom_client_MouseOutEvent_dispatch__Lcom_google_gwt_event_dom_client_MouseOutHandler_2(handler){
  com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$onMouseOut__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_event_dom_client_MouseOutEvent_2(handler);
}

function com_google_gwt_event_dom_client_MouseOutEvent_getAssociatedType__(){
  return com_google_gwt_event_dom_client_MouseOutEvent_TYPE;
}

function com_google_gwt_event_dom_client_MouseOutEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseOutEvent_12_1classLit;
}

function com_google_gwt_event_dom_client_MouseOutEvent(){
}

_ = com_google_gwt_event_dom_client_MouseOutEvent.prototype = new com_google_gwt_event_dom_client_MouseEvent();
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2 = com_google_gwt_event_dom_client_MouseOutEvent_dispatch__Lcom_google_gwt_event_dom_client_MouseOutHandler_2;
_.getAssociatedType__ = com_google_gwt_event_dom_client_MouseOutEvent_getAssociatedType__;
_.getClass__$ = com_google_gwt_event_dom_client_MouseOutEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_event_dom_client_MouseOutEvent_TYPE;
function com_google_gwt_event_dom_client_MouseUpEvent_$clinit__(){
  com_google_gwt_event_dom_client_MouseUpEvent_$clinit__ = nullMethod;
  com_google_gwt_event_dom_client_MouseUpEvent_TYPE = com_google_gwt_event_dom_client_DomEvent$Type_$DomEvent$Type__Lcom_google_gwt_event_dom_client_DomEvent$Type_2Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2(new com_google_gwt_event_dom_client_DomEvent$Type(), $intern_68, (com_google_gwt_event_dom_client_MouseUpEvent_$clinit__() , new com_google_gwt_event_dom_client_MouseUpEvent()));
}

function com_google_gwt_event_dom_client_MouseUpEvent_dispatch__Lcom_google_gwt_event_dom_client_MouseUpHandler_2(handler){
  com_allen_1sauer_gwt_dnd_client_MouseDragHandler_$onMouseUp__Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2Lcom_google_gwt_event_dom_client_MouseUpEvent_2(handler, this);
}

function com_google_gwt_event_dom_client_MouseUpEvent_getAssociatedType__(){
  return com_google_gwt_event_dom_client_MouseUpEvent_TYPE;
}

function com_google_gwt_event_dom_client_MouseUpEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseUpEvent_12_1classLit;
}

function com_google_gwt_event_dom_client_MouseUpEvent(){
}

_ = com_google_gwt_event_dom_client_MouseUpEvent.prototype = new com_google_gwt_event_dom_client_MouseEvent();
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2 = com_google_gwt_event_dom_client_MouseUpEvent_dispatch__Lcom_google_gwt_event_dom_client_MouseUpHandler_2;
_.getAssociatedType__ = com_google_gwt_event_dom_client_MouseUpEvent_getAssociatedType__;
_.getClass__$ = com_google_gwt_event_dom_client_MouseUpEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_event_dom_client_MouseUpEvent_TYPE;
function com_google_gwt_event_dom_client_PrivateMap_$PrivateMap__Lcom_google_gwt_event_dom_client_PrivateMap_2(this$static){
  this$static.com_google_gwt_event_dom_client_PrivateMap_map = {};
  return this$static;
}

function com_google_gwt_event_dom_client_PrivateMap_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1PrivateMap_12_1classLit;
}

function com_google_gwt_event_dom_client_PrivateMap(){
}

_ = com_google_gwt_event_dom_client_PrivateMap.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_event_dom_client_PrivateMap_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_event_dom_client_PrivateMap_map = null;
function com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_logical_shared_CloseHandler_2(handler){
  handler.onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2(this);
}

function com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2Z(source){
  var event;
  if (com_google_gwt_event_logical_shared_CloseEvent_TYPE) {
    event = new com_google_gwt_event_logical_shared_CloseEvent();
    source.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2(event);
  }
}

function com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__(){
  return com_google_gwt_event_logical_shared_CloseEvent_TYPE;
}

function com_google_gwt_event_logical_shared_CloseEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1CloseEvent_12_1classLit;
}

function com_google_gwt_event_logical_shared_CloseEvent(){
}

_ = com_google_gwt_event_logical_shared_CloseEvent.prototype = new com_google_gwt_event_shared_GwtEvent();
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2 = com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_logical_shared_CloseHandler_2;
_.getAssociatedType__ = com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__;
_.getClass__$ = com_google_gwt_event_logical_shared_CloseEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_event_logical_shared_CloseEvent_TYPE = null;
function com_google_gwt_event_shared_DefaultHandlerRegistration_$DefaultHandlerRegistration__Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static, manager, type, handler){
  this$static.com_google_gwt_event_shared_DefaultHandlerRegistration_manager = manager;
  this$static.com_google_gwt_event_shared_DefaultHandlerRegistration_handler = handler;
  this$static.com_google_gwt_event_shared_DefaultHandlerRegistration_type = type;
  return this$static;
}

function com_google_gwt_event_shared_DefaultHandlerRegistration_$removeHandler__Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2(this$static){
  com_google_gwt_event_shared_HandlerManager_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static.com_google_gwt_event_shared_DefaultHandlerRegistration_manager, this$static.com_google_gwt_event_shared_DefaultHandlerRegistration_type, this$static.com_google_gwt_event_shared_DefaultHandlerRegistration_handler);
}

function com_google_gwt_event_shared_DefaultHandlerRegistration_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1DefaultHandlerRegistration_12_1classLit;
}

function com_google_gwt_event_shared_DefaultHandlerRegistration(){
}

_ = com_google_gwt_event_shared_DefaultHandlerRegistration.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_event_shared_DefaultHandlerRegistration_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_event_shared_DefaultHandlerRegistration_handler = null;
_.com_google_gwt_event_shared_DefaultHandlerRegistration_manager = null;
_.com_google_gwt_event_shared_DefaultHandlerRegistration_type = null;
function com_google_gwt_event_shared_HandlerManager_$HandlerManager__Lcom_google_gwt_event_shared_HandlerManager_2Ljava_lang_Object_2(this$static, source){
  this$static.com_google_gwt_event_shared_HandlerManager_registry = com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$HandlerManager$HandlerRegistry__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2(new com_google_gwt_event_shared_HandlerManager$HandlerRegistry());
  this$static.com_google_gwt_event_shared_HandlerManager_source = source;
  this$static.com_google_gwt_event_shared_HandlerManager_isReverseOrder = false;
  return this$static;
}

function com_google_gwt_event_shared_HandlerManager_$HandlerManager__Lcom_google_gwt_event_shared_HandlerManager_2Ljava_lang_Object_2Z(this$static, source, fireInReverseOrder){
  this$static.com_google_gwt_event_shared_HandlerManager_registry = com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$HandlerManager$HandlerRegistry__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2(new com_google_gwt_event_shared_HandlerManager$HandlerRegistry());
  this$static.com_google_gwt_event_shared_HandlerManager_source = source;
  this$static.com_google_gwt_event_shared_HandlerManager_isReverseOrder = fireInReverseOrder;
  return this$static;
}

function com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static, type, handler){
  if (this$static.com_google_gwt_event_shared_HandlerManager_firingDepth > 0) {
    com_google_gwt_event_shared_HandlerManager_$defer__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_HandlerManager$AddOrRemoveCommand_2(this$static, com_google_gwt_event_shared_HandlerManager$1_$HandlerManager$1__Lcom_google_gwt_event_shared_HandlerManager$1_2(new com_google_gwt_event_shared_HandlerManager$1(), this$static, type, handler));
  }
   else {
    com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$addHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static.com_google_gwt_event_shared_HandlerManager_registry, type, handler);
  }
  return com_google_gwt_event_shared_DefaultHandlerRegistration_$DefaultHandlerRegistration__Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(new com_google_gwt_event_shared_DefaultHandlerRegistration(), this$static, type, handler);
}

function com_google_gwt_event_shared_HandlerManager_$defer__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_HandlerManager$AddOrRemoveCommand_2(this$static, command){
  if (!this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas) {
    this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  }
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas, command);
}

function com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2(this$static, event){
  var oldSource;
  if (event.com_google_gwt_event_shared_GwtEvent_dead) {
    event.revive__();
  }
  oldSource = event.com_google_gwt_event_shared_GwtEvent_source;
  event.com_google_gwt_event_shared_GwtEvent_source = this$static.com_google_gwt_event_shared_HandlerManager_source;
  try {
    ++this$static.com_google_gwt_event_shared_HandlerManager_firingDepth;
    com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent_2Z(this$static.com_google_gwt_event_shared_HandlerManager_registry, event, this$static.com_google_gwt_event_shared_HandlerManager_isReverseOrder);
  }
   finally {
    --this$static.com_google_gwt_event_shared_HandlerManager_firingDepth;
    if (this$static.com_google_gwt_event_shared_HandlerManager_firingDepth == 0) {
      com_google_gwt_event_shared_HandlerManager_$handleQueuedAddsAndRemoves__Lcom_google_gwt_event_shared_HandlerManager_2(this$static);
    }
  }
  if (oldSource == null) {
    event.com_google_gwt_event_shared_GwtEvent_dead = true;
    event.com_google_gwt_event_shared_GwtEvent_source = null;
  }
   else {
    event.com_google_gwt_event_shared_GwtEvent_source = oldSource;
  }
}

function com_google_gwt_event_shared_HandlerManager_$handleQueuedAddsAndRemoves__Lcom_google_gwt_event_shared_HandlerManager_2(this$static){
  var c, c$iterator;
  if (this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas) {
    try {
      for (c$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas); c$iterator.java_util_AbstractList$IteratorImpl_i < c$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
        c = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(c$iterator), 29);
        c.execute__();
      }
    }
     finally {
      this$static.com_google_gwt_event_shared_HandlerManager_deferredDeltas = null;
    }
  }
}

function com_google_gwt_event_shared_HandlerManager_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static, type, handler){
  if (this$static.com_google_gwt_event_shared_HandlerManager_firingDepth > 0) {
    com_google_gwt_event_shared_HandlerManager_$defer__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_HandlerManager$AddOrRemoveCommand_2(this$static, com_google_gwt_event_shared_HandlerManager$2_$HandlerManager$2__Lcom_google_gwt_event_shared_HandlerManager$2_2(new com_google_gwt_event_shared_HandlerManager$2(), this$static, type, handler));
  }
   else {
    com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager_registry, type, handler);
  }
}

function com_google_gwt_event_shared_HandlerManager_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2(event){
  com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2(this, event);
}

function com_google_gwt_event_shared_HandlerManager_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager_12_1classLit;
}

function com_google_gwt_event_shared_HandlerManager(){
}

_ = com_google_gwt_event_shared_HandlerManager.prototype = new java_lang_Object();
_.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2 = com_google_gwt_event_shared_HandlerManager_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2;
_.getClass__$ = com_google_gwt_event_shared_HandlerManager_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_event_shared_HandlerManager_deferredDeltas = null;
_.com_google_gwt_event_shared_HandlerManager_firingDepth = 0;
_.com_google_gwt_event_shared_HandlerManager_isReverseOrder = false;
_.com_google_gwt_event_shared_HandlerManager_registry = null;
_.com_google_gwt_event_shared_HandlerManager_source = null;
function com_google_gwt_event_shared_HandlerManager$1_$HandlerManager$1__Lcom_google_gwt_event_shared_HandlerManager$1_2(this$static, this$0, val$type, val$handler){
  this$static.com_google_gwt_event_shared_HandlerManager$1_this$0 = this$0;
  this$static.com_google_gwt_event_shared_HandlerManager$1_val$type = val$type;
  this$static.com_google_gwt_event_shared_HandlerManager$1_val$handler = val$handler;
  return this$static;
}

function com_google_gwt_event_shared_HandlerManager$1_execute__(){
  com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$addHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this.com_google_gwt_event_shared_HandlerManager$1_this$0.com_google_gwt_event_shared_HandlerManager_registry, this.com_google_gwt_event_shared_HandlerManager$1_val$type, this.com_google_gwt_event_shared_HandlerManager$1_val$handler);
}

function com_google_gwt_event_shared_HandlerManager$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$1_12_1classLit;
}

function com_google_gwt_event_shared_HandlerManager$1(){
}

_ = com_google_gwt_event_shared_HandlerManager$1.prototype = new java_lang_Object();
_.execute__ = com_google_gwt_event_shared_HandlerManager$1_execute__;
_.getClass__$ = com_google_gwt_event_shared_HandlerManager$1_getClass__;
_.java_lang_Object_typeId$ = 29;
_.com_google_gwt_event_shared_HandlerManager$1_this$0 = null;
_.com_google_gwt_event_shared_HandlerManager$1_val$handler = null;
_.com_google_gwt_event_shared_HandlerManager$1_val$type = null;
function com_google_gwt_event_shared_HandlerManager$2_$HandlerManager$2__Lcom_google_gwt_event_shared_HandlerManager$2_2(this$static, this$0, val$type, val$handler){
  this$static.com_google_gwt_event_shared_HandlerManager$2_this$0 = this$0;
  this$static.com_google_gwt_event_shared_HandlerManager$2_val$type = val$type;
  this$static.com_google_gwt_event_shared_HandlerManager$2_val$handler = val$handler;
  return this$static;
}

function com_google_gwt_event_shared_HandlerManager$2_execute__(){
  com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2(this.com_google_gwt_event_shared_HandlerManager$2_this$0.com_google_gwt_event_shared_HandlerManager_registry, this.com_google_gwt_event_shared_HandlerManager$2_val$type, this.com_google_gwt_event_shared_HandlerManager$2_val$handler);
}

function com_google_gwt_event_shared_HandlerManager$2_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$2_12_1classLit;
}

function com_google_gwt_event_shared_HandlerManager$2(){
}

_ = com_google_gwt_event_shared_HandlerManager$2.prototype = new java_lang_Object();
_.execute__ = com_google_gwt_event_shared_HandlerManager$2_execute__;
_.getClass__$ = com_google_gwt_event_shared_HandlerManager$2_getClass__;
_.java_lang_Object_typeId$ = 30;
_.com_google_gwt_event_shared_HandlerManager$2_this$0 = null;
_.com_google_gwt_event_shared_HandlerManager$2_val$handler = null;
_.com_google_gwt_event_shared_HandlerManager$2_val$type = null;
function com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$HandlerManager$HandlerRegistry__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2(this$static){
  this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map = java_util_HashMap_$HashMap__Ljava_util_HashMap_2(new java_util_HashMap());
  return this$static;
}

function com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$addHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static, type, handler){
  var l;
  l = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, type), 30);
  if (!l) {
    l = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, type, l);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(l.java_util_ArrayList_array, l.java_util_ArrayList_size++, handler);
}

function com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent_2Z(this$static, event, isReverseOrder){
  var count, handler, i, type, com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandlerCount__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2_l_0, com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_0, com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_1;
  type = event.getAssociatedType__();
  count = (com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandlerCount__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2_l_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, type), 30) , !com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandlerCount__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2_l_0?0:com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandlerCount__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2_l_0.java_util_ArrayList_size);
  if (isReverseOrder) {
    for (i = count - 1; i >= 0; --i) {
      handler = (com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, type), 30) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I((java_util_AbstractList_checkIndex__II(i, com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_0.java_util_ArrayList_size) , com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_0.java_util_ArrayList_array[i]), 31));
      event.dispatch__Lcom_google_gwt_event_shared_EventHandler_2(handler);
    }
  }
   else {
    for (i = 0; i < count; ++i) {
      handler = (com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_1 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, type), 30) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I((java_util_AbstractList_checkIndex__II(i, com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_1.java_util_ArrayList_size) , com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$getHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2I_l_1.java_util_ArrayList_array[i]), 31));
      event.dispatch__Lcom_google_gwt_event_shared_EventHandler_2(handler);
    }
  }
}

function com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2(this$static, eventKey, handler){
  var l;
  l = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, eventKey), 30);
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2(l, handler);
  if (l.java_util_ArrayList_size == 0) {
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, eventKey);
  }
}

function com_google_gwt_event_shared_HandlerManager$HandlerRegistry_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$HandlerRegistry_12_1classLit;
}

function com_google_gwt_event_shared_HandlerManager$HandlerRegistry(){
}

_ = com_google_gwt_event_shared_HandlerManager$HandlerRegistry.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_event_shared_HandlerManager$HandlerRegistry_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_gadgets_client_DynamicHeightFeature_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1gadgets_1client_1DynamicHeightFeature_12_1classLit;
}

function com_google_gwt_gadgets_client_DynamicHeightFeature(){
}

_ = com_google_gwt_gadgets_client_DynamicHeightFeature.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_gadgets_client_DynamicHeightFeature_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_gadgets_client_Gadget_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1gadgets_1client_1Gadget_12_1classLit;
}

function com_google_gwt_gadgets_client_Gadget(){
}

_ = com_google_gwt_gadgets_client_Gadget.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_gadgets_client_Gadget_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_json_client_JSONValue_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONValue_12_1classLit;
}

function com_google_gwt_json_client_JSONValue_isArray__(){
  return null;
}

function com_google_gwt_json_client_JSONValue_isObject__(){
  return null;
}

function com_google_gwt_json_client_JSONValue(){
}

_ = com_google_gwt_json_client_JSONValue.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_json_client_JSONValue_getClass__;
_.isArray__ = com_google_gwt_json_client_JSONValue_isArray__;
_.isObject__ = com_google_gwt_json_client_JSONValue_isObject__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_json_client_JSONArray_$JSONArray__Lcom_google_gwt_json_client_JSONArray_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static, arr){
  this$static.com_google_gwt_json_client_JSONArray_jsArray = arr;
  return this$static;
}

function com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2I(this$static, index){
  var v = this$static.com_google_gwt_json_client_JSONArray_jsArray[index];
  var func = (com_google_gwt_json_client_JSONParser_$clinit__() , com_google_gwt_json_client_JSONParser_typeMap)[typeof v];
  return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2(typeof v);
}

function com_google_gwt_json_client_JSONArray_$set__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this$static, index, value){
  var previous;
  previous = com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2I(this$static, index);
  com_google_gwt_json_client_JSONArray_$set0__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this$static, index, value);
  return previous;
}

function com_google_gwt_json_client_JSONArray_$set0__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this$static, index, value){
  if (value) {
    var func = value.getUnwrapper__();
    value = func(value);
  }
   else {
    value = undefined;
  }
  this$static.com_google_gwt_json_client_JSONArray_jsArray[index] = value;
}

function com_google_gwt_json_client_JSONArray_$toString__Lcom_google_gwt_json_client_JSONArray_2(this$static){
  var c, i, sb;
  sb = java_lang_StringBuffer_$StringBuffer__Ljava_lang_StringBuffer_2(new java_lang_StringBuffer());
  sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_69;
  for (i = 0 , c = this$static.com_google_gwt_json_client_JSONArray_jsArray.length; i < c; ++i) {
    if (i > 0) {
      sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_70;
    }
    java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_Object_2(sb, com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2I(this$static, i));
  }
  sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_71;
  return sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}

function com_google_gwt_json_client_JSONArray_equals__Ljava_lang_Object_2(other){
  if (!(other != null && com_google_gwt_lang_Cast_canCast__II(other.java_lang_Object_typeId$, 32))) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONArray_jsArray == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(other, 32).com_google_gwt_json_client_JSONArray_jsArray;
}

function com_google_gwt_json_client_JSONArray_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONArray_12_1classLit;
}

function com_google_gwt_json_client_JSONArray_getUnwrapper__(){
  return com_google_gwt_json_client_JSONArray_unwrap__Lcom_google_gwt_json_client_JSONArray_2;
}

function com_google_gwt_json_client_JSONArray_hashCode__(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2(this.com_google_gwt_json_client_JSONArray_jsArray);
}

function com_google_gwt_json_client_JSONArray_isArray__(){
  return this;
}

function com_google_gwt_json_client_JSONArray_toString__(){
  return com_google_gwt_json_client_JSONArray_$toString__Lcom_google_gwt_json_client_JSONArray_2(this);
}

function com_google_gwt_json_client_JSONArray_unwrap__Lcom_google_gwt_json_client_JSONArray_2(value){
  return value.com_google_gwt_json_client_JSONArray_jsArray;
}

function com_google_gwt_json_client_JSONArray(){
}

_ = com_google_gwt_json_client_JSONArray.prototype = new com_google_gwt_json_client_JSONValue();
_.equals__Ljava_lang_Object_2$ = com_google_gwt_json_client_JSONArray_equals__Ljava_lang_Object_2;
_.getClass__$ = com_google_gwt_json_client_JSONArray_getClass__;
_.getUnwrapper__ = com_google_gwt_json_client_JSONArray_getUnwrapper__;
_.hashCode__$ = com_google_gwt_json_client_JSONArray_hashCode__;
_.isArray__ = com_google_gwt_json_client_JSONArray_isArray__;
_.toString__$ = com_google_gwt_json_client_JSONArray_toString__;
_.java_lang_Object_typeId$ = 31;
_.com_google_gwt_json_client_JSONArray_jsArray = null;
function com_google_gwt_json_client_JSONBoolean_$clinit__(){
  com_google_gwt_json_client_JSONBoolean_$clinit__ = nullMethod;
  com_google_gwt_json_client_JSONBoolean_FALSE = com_google_gwt_json_client_JSONBoolean_$JSONBoolean__Lcom_google_gwt_json_client_JSONBoolean_2Z(new com_google_gwt_json_client_JSONBoolean(), false);
  com_google_gwt_json_client_JSONBoolean_TRUE = com_google_gwt_json_client_JSONBoolean_$JSONBoolean__Lcom_google_gwt_json_client_JSONBoolean_2Z(new com_google_gwt_json_client_JSONBoolean(), true);
}

function com_google_gwt_json_client_JSONBoolean_$JSONBoolean__Lcom_google_gwt_json_client_JSONBoolean_2Z(this$static, value){
  com_google_gwt_json_client_JSONBoolean_$clinit__();
  this$static.com_google_gwt_json_client_JSONBoolean_value = value;
  return this$static;
}

function com_google_gwt_json_client_JSONBoolean_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONBoolean_12_1classLit;
}

function com_google_gwt_json_client_JSONBoolean_getInstance__Z(b){
  com_google_gwt_json_client_JSONBoolean_$clinit__();
  if (b) {
    return com_google_gwt_json_client_JSONBoolean_TRUE;
  }
   else {
    return com_google_gwt_json_client_JSONBoolean_FALSE;
  }
}

function com_google_gwt_json_client_JSONBoolean_getUnwrapper__(){
  return com_google_gwt_json_client_JSONBoolean_unwrap__Lcom_google_gwt_json_client_JSONBoolean_2;
}

function com_google_gwt_json_client_JSONBoolean_toString__(){
  return java_lang_Boolean_$clinit__() , $intern_49 + this.com_google_gwt_json_client_JSONBoolean_value;
}

function com_google_gwt_json_client_JSONBoolean_unwrap__Lcom_google_gwt_json_client_JSONBoolean_2(value){
  return value.com_google_gwt_json_client_JSONBoolean_value;
}

function com_google_gwt_json_client_JSONBoolean(){
}

_ = com_google_gwt_json_client_JSONBoolean.prototype = new com_google_gwt_json_client_JSONValue();
_.getClass__$ = com_google_gwt_json_client_JSONBoolean_getClass__;
_.getUnwrapper__ = com_google_gwt_json_client_JSONBoolean_getUnwrapper__;
_.toString__$ = com_google_gwt_json_client_JSONBoolean_toString__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_json_client_JSONBoolean_value = false;
var com_google_gwt_json_client_JSONBoolean_FALSE, com_google_gwt_json_client_JSONBoolean_TRUE;
function com_google_gwt_json_client_JSONException_$JSONException__Lcom_google_gwt_json_client_JSONException_2Ljava_lang_String_2(this$static, message){
  this$static.java_lang_Throwable_detailMessage = message;
  return this$static;
}

function com_google_gwt_json_client_JSONException_$JSONException__Lcom_google_gwt_json_client_JSONException_2Ljava_lang_Throwable_2(this$static, cause){
  this$static.java_lang_Throwable_detailMessage = !cause?null:java_lang_Throwable_$toString__Ljava_lang_Throwable_2(cause);
  return this$static;
}

function com_google_gwt_json_client_JSONException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONException_12_1classLit;
}

function com_google_gwt_json_client_JSONException(){
}

_ = com_google_gwt_json_client_JSONException.prototype = new java_lang_RuntimeException();
_.getClass__$ = com_google_gwt_json_client_JSONException_getClass__;
_.java_lang_Object_typeId$ = 32;
function com_google_gwt_json_client_JSONNull_$clinit__(){
  com_google_gwt_json_client_JSONNull_$clinit__ = nullMethod;
  com_google_gwt_json_client_JSONNull_instance = (com_google_gwt_json_client_JSONNull_$clinit__() , new com_google_gwt_json_client_JSONNull());
}

function com_google_gwt_json_client_JSONNull_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNull_12_1classLit;
}

function com_google_gwt_json_client_JSONNull_getUnwrapper__(){
  return com_google_gwt_json_client_JSONNull_unwrap__;
}

function com_google_gwt_json_client_JSONNull_toString__(){
  return $intern_51;
}

function com_google_gwt_json_client_JSONNull_unwrap__(){
  return null;
}

function com_google_gwt_json_client_JSONNull(){
}

_ = com_google_gwt_json_client_JSONNull.prototype = new com_google_gwt_json_client_JSONValue();
_.getClass__$ = com_google_gwt_json_client_JSONNull_getClass__;
_.getUnwrapper__ = com_google_gwt_json_client_JSONNull_getUnwrapper__;
_.toString__$ = com_google_gwt_json_client_JSONNull_toString__;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_json_client_JSONNull_instance;
function com_google_gwt_json_client_JSONNumber_$JSONNumber__Lcom_google_gwt_json_client_JSONNumber_2D(this$static, value){
  this$static.com_google_gwt_json_client_JSONNumber_value = value;
  return this$static;
}

function com_google_gwt_json_client_JSONNumber_equals__Ljava_lang_Object_2(other){
  if (!(other != null && com_google_gwt_lang_Cast_canCast__II(other.java_lang_Object_typeId$, 33))) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONNumber_value == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(other, 33).com_google_gwt_json_client_JSONNumber_value;
}

function com_google_gwt_json_client_JSONNumber_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNumber_12_1classLit;
}

function com_google_gwt_json_client_JSONNumber_getUnwrapper__(){
  return com_google_gwt_json_client_JSONNumber_unwrap__Lcom_google_gwt_json_client_JSONNumber_2;
}

function com_google_gwt_json_client_JSONNumber_hashCode__(){
  return ~~Math.max(Math.min(java_lang_Double_$Double__Ljava_lang_Double_2D(new java_lang_Double(), this.com_google_gwt_json_client_JSONNumber_value).java_lang_Double_value, 2147483647), -2147483648);
}

function com_google_gwt_json_client_JSONNumber_toString__(){
  return this.com_google_gwt_json_client_JSONNumber_value + $intern_49;
}

function com_google_gwt_json_client_JSONNumber_unwrap__Lcom_google_gwt_json_client_JSONNumber_2(value){
  return value.com_google_gwt_json_client_JSONNumber_value;
}

function com_google_gwt_json_client_JSONNumber(){
}

_ = com_google_gwt_json_client_JSONNumber.prototype = new com_google_gwt_json_client_JSONValue();
_.equals__Ljava_lang_Object_2$ = com_google_gwt_json_client_JSONNumber_equals__Ljava_lang_Object_2;
_.getClass__$ = com_google_gwt_json_client_JSONNumber_getClass__;
_.getUnwrapper__ = com_google_gwt_json_client_JSONNumber_getUnwrapper__;
_.hashCode__$ = com_google_gwt_json_client_JSONNumber_hashCode__;
_.toString__$ = com_google_gwt_json_client_JSONNumber_toString__;
_.java_lang_Object_typeId$ = 33;
_.com_google_gwt_json_client_JSONNumber_value = 0;
function com_google_gwt_json_client_JSONObject_$JSONObject__Lcom_google_gwt_json_client_JSONObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static, jsValue){
  this$static.com_google_gwt_json_client_JSONObject_jsObject = jsValue;
  return this$static;
}

function com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2(this$static, result){
  var jsObject = this$static.com_google_gwt_json_client_JSONObject_jsObject;
  var i = 0;
  for (var key in jsObject) {
    result[i++] = key;
  }
  return result;
}

function com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(this$static, key){
  var com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2_v_0, com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2_func_0;
  if (key == null) {
    throw new java_lang_NullPointerException();
  }
  return com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2_v_0 = this$static.com_google_gwt_json_client_JSONObject_jsObject[key] , com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2_func_0 = (com_google_gwt_json_client_JSONParser_$clinit__() , com_google_gwt_json_client_JSONParser_typeMap)[typeof com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2_v_0] , com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2_func_0?com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2_func_0(com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2_v_0):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2(typeof com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2_v_0);
}

function com_google_gwt_json_client_JSONObject_equals__Ljava_lang_Object_2(other){
  if (!(other != null && com_google_gwt_lang_Cast_canCast__II(other.java_lang_Object_typeId$, 34))) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONObject_jsObject == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(other, 34).com_google_gwt_json_client_JSONObject_jsObject;
}

function com_google_gwt_json_client_JSONObject_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONObject_12_1classLit;
}

function com_google_gwt_json_client_JSONObject_getUnwrapper__(){
  return com_google_gwt_json_client_JSONObject_unwrap__Lcom_google_gwt_json_client_JSONObject_2;
}

function com_google_gwt_json_client_JSONObject_hashCode__(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2(this.com_google_gwt_json_client_JSONObject_jsObject);
}

function com_google_gwt_json_client_JSONObject_isObject__(){
  return this;
}

function com_google_gwt_json_client_JSONObject_toString__(){
  var first, key, key$array, key$index, key$max, keys, sb;
  sb = java_lang_StringBuffer_$StringBuffer__Ljava_lang_StringBuffer_2(new java_lang_StringBuffer());
  sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_72;
  first = true;
  keys = com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2(this, com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, 0, 1, 0, 0));
  for (key$array = keys , key$index = 0 , key$max = key$array.length; key$index < key$max; ++key$index) {
    key = key$array[key$index];
    if (first) {
      first = false;
    }
     else {
      sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_33;
    }
    java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2(sb, com_google_gwt_json_client_JSONString_escapeValue__Ljava_lang_String_2(key));
    sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_73;
    java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_Object_2(sb, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(this, key));
  }
  sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_74;
  return sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}

function com_google_gwt_json_client_JSONObject_unwrap__Lcom_google_gwt_json_client_JSONObject_2(value){
  return value.com_google_gwt_json_client_JSONObject_jsObject;
}

function com_google_gwt_json_client_JSONObject(){
}

_ = com_google_gwt_json_client_JSONObject.prototype = new com_google_gwt_json_client_JSONValue();
_.equals__Ljava_lang_Object_2$ = com_google_gwt_json_client_JSONObject_equals__Ljava_lang_Object_2;
_.getClass__$ = com_google_gwt_json_client_JSONObject_getClass__;
_.getUnwrapper__ = com_google_gwt_json_client_JSONObject_getUnwrapper__;
_.hashCode__$ = com_google_gwt_json_client_JSONObject_hashCode__;
_.isObject__ = com_google_gwt_json_client_JSONObject_isObject__;
_.toString__$ = com_google_gwt_json_client_JSONObject_toString__;
_.java_lang_Object_typeId$ = 34;
_.com_google_gwt_json_client_JSONObject_jsObject = null;
function com_google_gwt_json_client_JSONParser_$clinit__(){
  com_google_gwt_json_client_JSONParser_$clinit__ = nullMethod;
  com_google_gwt_json_client_JSONParser_typeMap = {'boolean':com_google_gwt_json_client_JSONParser_createBoolean__Z, number:com_google_gwt_json_client_JSONParser_createNumber__D, string:com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2, object:com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2, 'function':com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2, undefined:com_google_gwt_json_client_JSONParser_createUndefined__};
}

function com_google_gwt_json_client_JSONParser_createBoolean__Z(v){
  return com_google_gwt_json_client_JSONBoolean_getInstance__Z(v);
}

function com_google_gwt_json_client_JSONParser_createNumber__D(v){
  return com_google_gwt_json_client_JSONNumber_$JSONNumber__Lcom_google_gwt_json_client_JSONNumber_2D(new com_google_gwt_json_client_JSONNumber(), v);
}

function com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2(o){
  if (!o) {
    return com_google_gwt_json_client_JSONNull_$clinit__() , com_google_gwt_json_client_JSONNull_instance;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = com_google_gwt_json_client_JSONParser_typeMap[typeof v];
    return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return com_google_gwt_json_client_JSONArray_$JSONArray__Lcom_google_gwt_json_client_JSONArray_2Lcom_google_gwt_core_client_JavaScriptObject_2(new com_google_gwt_json_client_JSONArray(), o);
  }
   else {
    return com_google_gwt_json_client_JSONObject_$JSONObject__Lcom_google_gwt_json_client_JSONObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(new com_google_gwt_json_client_JSONObject(), o);
  }
}

function com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2(v){
  return com_google_gwt_json_client_JSONString_$JSONString__Lcom_google_gwt_json_client_JSONString_2Ljava_lang_String_2(new com_google_gwt_json_client_JSONString(), v);
}

function com_google_gwt_json_client_JSONParser_createUndefined__(){
  return null;
}

function com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2(jsonString){
  var com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2_v_0, com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2_func_0;
  com_google_gwt_json_client_JSONParser_$clinit__();
  var $e0, ex;
  if (jsonString == null) {
    throw new java_lang_NullPointerException();
  }
  if (jsonString.length == 0) {
    throw java_lang_IllegalArgumentException_$IllegalArgumentException__Ljava_lang_IllegalArgumentException_2Ljava_lang_String_2(new java_lang_IllegalArgumentException(), $intern_75);
  }
  try {
    return com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2_v_0 = eval($intern_36 + jsonString + $intern_37) , com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2_func_0 = com_google_gwt_json_client_JSONParser_typeMap[typeof com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2_v_0] , com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2_func_0?com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2_func_0(com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2_v_0):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2(typeof com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2_v_0);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I($e0, 35)) {
      ex = $e0;
      throw com_google_gwt_json_client_JSONException_$JSONException__Lcom_google_gwt_json_client_JSONException_2Ljava_lang_Throwable_2(new com_google_gwt_json_client_JSONException(), ex);
    }
     else 
      throw $e0;
  }
}

function com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2(typeString){
  com_google_gwt_json_client_JSONParser_$clinit__();
  throw com_google_gwt_json_client_JSONException_$JSONException__Lcom_google_gwt_json_client_JSONException_2Ljava_lang_String_2(new com_google_gwt_json_client_JSONException(), $intern_76 + typeString + $intern_77);
}

var com_google_gwt_json_client_JSONParser_typeMap;
function com_google_gwt_json_client_JSONString_$clinit__(){
  var com_google_gwt_json_client_JSONString_initEscapeTable___out_0;
  com_google_gwt_json_client_JSONString_$clinit__ = nullMethod;
  com_google_gwt_json_client_JSONString_escapeTable = (com_google_gwt_json_client_JSONString_initEscapeTable___out_0 = [$intern_78, $intern_79, $intern_80, $intern_81, $intern_82, $intern_83, $intern_84, $intern_85, $intern_86, $intern_87, $intern_88, $intern_89, $intern_90, $intern_91, $intern_92, $intern_93, $intern_94, $intern_95, $intern_96, $intern_97, $intern_98, $intern_99, $intern_100, $intern_101, $intern_102, $intern_103, $intern_104, $intern_105, $intern_106, $intern_107, $intern_108, $intern_109] , com_google_gwt_json_client_JSONString_initEscapeTable___out_0[34] = $intern_110 , com_google_gwt_json_client_JSONString_initEscapeTable___out_0[92] = $intern_111 , com_google_gwt_json_client_JSONString_initEscapeTable___out_0);
}

function com_google_gwt_json_client_JSONString_$JSONString__Lcom_google_gwt_json_client_JSONString_2Ljava_lang_String_2(this$static, value){
  com_google_gwt_json_client_JSONString_$clinit__();
  if (value == null) {
    throw new java_lang_NullPointerException();
  }
  this$static.com_google_gwt_json_client_JSONString_value = value;
  return this$static;
}

function com_google_gwt_json_client_JSONString_equals__Ljava_lang_Object_2(other){
  if (!(other != null && com_google_gwt_lang_Cast_canCast__II(other.java_lang_Object_typeId$, 36))) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2(this.com_google_gwt_json_client_JSONString_value, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(other, 36).com_google_gwt_json_client_JSONString_value);
}

function com_google_gwt_json_client_JSONString_escapeValue__Ljava_lang_String_2(toEscape){
  com_google_gwt_json_client_JSONString_$clinit__();
  var s = toEscape.replace(/[\x00-\x1F"\\]/g, function(x){
    var com_google_gwt_json_client_JSONString_escapeChar__Ljava_lang_String_2_lookedUp_0;
    return com_google_gwt_json_client_JSONString_escapeChar__Ljava_lang_String_2_lookedUp_0 = com_google_gwt_json_client_JSONString_escapeTable[x.charCodeAt(0)] , com_google_gwt_json_client_JSONString_escapeChar__Ljava_lang_String_2_lookedUp_0 == null?x:com_google_gwt_json_client_JSONString_escapeChar__Ljava_lang_String_2_lookedUp_0;
  }
  );
  return $intern_112 + s + $intern_112;
}

function com_google_gwt_json_client_JSONString_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONString_12_1classLit;
}

function com_google_gwt_json_client_JSONString_getUnwrapper__(){
  return com_google_gwt_json_client_JSONString_unwrap__Lcom_google_gwt_json_client_JSONString_2;
}

function com_google_gwt_json_client_JSONString_hashCode__(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2(this.com_google_gwt_json_client_JSONString_value);
}

function com_google_gwt_json_client_JSONString_toString__(){
  return com_google_gwt_json_client_JSONString_escapeValue__Ljava_lang_String_2(this.com_google_gwt_json_client_JSONString_value);
}

function com_google_gwt_json_client_JSONString_unwrap__Lcom_google_gwt_json_client_JSONString_2(value){
  return value.com_google_gwt_json_client_JSONString_value;
}

function com_google_gwt_json_client_JSONString(){
}

_ = com_google_gwt_json_client_JSONString.prototype = new com_google_gwt_json_client_JSONValue();
_.equals__Ljava_lang_Object_2$ = com_google_gwt_json_client_JSONString_equals__Ljava_lang_Object_2;
_.getClass__$ = com_google_gwt_json_client_JSONString_getClass__;
_.getUnwrapper__ = com_google_gwt_json_client_JSONString_getUnwrapper__;
_.hashCode__$ = com_google_gwt_json_client_JSONString_hashCode__;
_.toString__$ = com_google_gwt_json_client_JSONString_toString__;
_.java_lang_Object_typeId$ = 35;
_.com_google_gwt_json_client_JSONString_value = null;
var com_google_gwt_json_client_JSONString_escapeTable;
function com_google_gwt_lang_Array_createFromSeed__II(seedType, length){
  var array = new Array(length);
  if (seedType > 0) {
    var value = [null, 0, false, [0, 0]][seedType];
    for (var i = 0; i < length; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function com_google_gwt_lang_Array_getClass__(){
  return this.com_google_gwt_lang_Array_arrayClass$;
}

function com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(arrayClass, typeId, queryId, length, seedType){
  var result;
  result = com_google_gwt_lang_Array_createFromSeed__II(seedType, length);
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__();
  com_google_gwt_lang_Array$ExpandoWrapper_wrapArray__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2(result, com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues);
  result.com_google_gwt_lang_Array_arrayClass$ = arrayClass;
  result.java_lang_Object_typeId$ = typeId;
  result.com_google_gwt_lang_Array_queryId$ = queryId;
  return result;
}

function com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2(arrayClass, typeId, queryId, array){
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__();
  com_google_gwt_lang_Array$ExpandoWrapper_wrapArray__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2(array, com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues);
  array.com_google_gwt_lang_Array_arrayClass$ = arrayClass;
  array.java_lang_Object_typeId$ = typeId;
  array.com_google_gwt_lang_Array_queryId$ = queryId;
  return array;
}

function com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(array, index, value){
  if (value != null) {
    if (array.com_google_gwt_lang_Array_queryId$ > 0 && !com_google_gwt_lang_Cast_canCastUnsafe__II(value.java_lang_Object_typeId$, array.com_google_gwt_lang_Array_queryId$)) {
      throw new java_lang_ArrayStoreException();
    }
    if (array.com_google_gwt_lang_Array_queryId$ < 0 && (value.java_lang_Object_typeMarker$ == nullMethod || value.java_lang_Object_typeId$ == 2)) {
      throw new java_lang_ArrayStoreException();
    }
  }
  return array[index] = value;
}

function com_google_gwt_lang_Array(){
}

_ = com_google_gwt_lang_Array.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_lang_Array_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_lang_Array_arrayClass$ = null;
_.length = 0;
_.com_google_gwt_lang_Array_queryId$ = 0;
function com_google_gwt_lang_Array$ExpandoWrapper_$clinit__(){
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__ = nullMethod;
  com_google_gwt_lang_Array$ExpandoWrapper_expandoNames = [];
  com_google_gwt_lang_Array$ExpandoWrapper_expandoValues = [];
  com_google_gwt_lang_Array$ExpandoWrapper_initExpandos__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_lang_Array(), com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues);
}

function com_google_gwt_lang_Array$ExpandoWrapper_initExpandos__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name in protoType) {
    if (value = protoType[name]) {
      expandoNames[i] = name;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function com_google_gwt_lang_Array$ExpandoWrapper_wrapArray__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2(array, expandoNames, expandoValues){
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues;
function com_google_gwt_lang_Cast_canCast__II(srcId, dstId){
  return srcId && !!com_google_gwt_lang_Cast_typeIdArray[srcId][dstId];
}

function com_google_gwt_lang_Cast_canCastUnsafe__II(srcId, dstId){
  return srcId && com_google_gwt_lang_Cast_typeIdArray[srcId][dstId];
}

function com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(src, dstId){
  if (src != null && !com_google_gwt_lang_Cast_canCastUnsafe__II(src.java_lang_Object_typeId$, dstId)) {
    throw new java_lang_ClassCastException();
  }
  return src;
}

function com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2(src){
  if (src != null && (src.java_lang_Object_typeMarker$ == nullMethod || src.java_lang_Object_typeId$ == 2)) {
    throw new java_lang_ClassCastException();
  }
  return src;
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(src, dstId){
  return src != null && com_google_gwt_lang_Cast_canCast__II(src.java_lang_Object_typeId$, dstId);
}

function com_google_gwt_lang_Cast_round_1int__D(x){
  return ~~Math.max(Math.min(x, 2147483647), -2147483648);
}

function com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2(o){
  if (o != null) {
    throw new java_lang_ClassCastException();
  }
  return o;
}

var com_google_gwt_lang_Cast_typeIdArray = [{}, {}, {1:1, 10:1, 11:1, 12:1}, {38:1}, {4:1, 12:1}, {31:1}, {38:1}, {16:1}, {20:1}, {10:1, 37:1}, {10:1, 18:1, 37:1}, {10:1, 17:1, 18:1, 37:1}, {3:1}, {3:1}, {3:1}, {25:1}, {3:1}, {3:1}, {3:1}, {19:1}, {19:1}, {26:1}, {19:1}, {5:1}, {39:1}, {39:1}, {10:1, 18:1, 37:1}, {10:1, 18:1, 35:1, 37:1}, {28:1}, {29:1}, {29:1}, {32:1}, {10:1, 18:1, 37:1}, {33:1}, {34:1}, {36:1}, {10:1, 18:1, 37:1}, {39:1}, {39:1}, {31:1}, {6:1}, {8:1}, {2:1, 6:1, 7:1, 8:1}, {2:1, 6:1, 7:1, 8:1, 42:1}, {2:1, 6:1, 7:1, 8:1, 42:1}, {2:1, 6:1, 7:1, 8:1, 21:1, 42:1}, {2:1, 6:1, 7:1, 8:1}, {2:1, 6:1, 7:1, 8:1}, {2:1, 6:1, 7:1, 8:1}, {2:1, 6:1, 7:1, 8:1, 42:1}, {2:1, 6:1, 7:1, 8:1}, {2:1, 6:1, 7:1, 8:1, 42:1}, {2:1, 6:1, 7:1, 8:1, 42:1}, {2:1, 6:1, 7:1, 8:1, 24:1, 42:1}, {2:1, 6:1, 7:1, 8:1, 24:1, 42:1}, {2:1, 6:1, 7:1, 8:1, 22:1, 42:1}, {2:1, 6:1, 7:1, 8:1}, {2:1, 6:1, 7:1, 8:1}, {8:1, 40:1}, {2:1, 6:1, 7:1, 8:1, 24:1, 42:1}, {31:1}, {10:1, 12:1, 13:1}, {10:1, 12:1, 13:1}, {5:1}, {38:1}, {2:1, 6:1, 7:1, 8:1, 21:1, 41:1, 42:1}, {31:1}, {2:1, 6:1, 7:1, 8:1, 21:1, 41:1, 42:1}, {2:1, 6:1, 7:1, 8:1}, {2:1, 6:1, 7:1, 8:1}, {2:1, 6:1, 7:1, 8:1}, {2:1, 6:1, 7:1, 8:1, 23:1, 42:1}, {44:1}, {45:1}, {9:1, 10:1, 12:1, 13:1}, {43:1}, {2:1, 6:1, 7:1, 8:1}, {31:1}, {31:1}, {31:1}, {31:1}, {2:1, 6:1, 7:1, 8:1}, {31:1}, {38:1}, {31:1}, {31:1}, {2:1, 6:1, 7:1, 8:1, 31:1}, {2:1, 6:1, 7:1, 8:1}, {31:1}, {2:1, 6:1, 7:1, 8:1, 31:1, 46:1}, {31:1}, {2:1, 6:1, 7:1, 8:1, 31:1}, {3:1}, {31:1}, {31:1}, {10:1, 18:1, 37:1}, {10:1, 18:1, 37:1}, {10:1, 37:1}, {10:1, 37:1}, {10:1, 12:1, 47:1}, {10:1, 18:1, 37:1}, {10:1}, {10:1, 12:1, 48:1}, {10:1, 18:1, 37:1}, {10:1, 18:1, 37:1}, {10:1, 18:1, 37:1}, {10:1, 18:1, 37:1}, {11:1}, {10:1, 18:1, 37:1}, {52:1}, {52:1}, {49:1}, {49:1}, {49:1}, {50:1}, {52:1}, {10:1, 30:1, 50:1}, {10:1, 51:1}, {10:1, 52:1}, {49:1}, {10:1, 18:1, 37:1}, {10:1, 50:1}, {6:1}, {15:1}, {27:1}, {14:1}];
function com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2(e){
  if (e != null && com_google_gwt_lang_Cast_canCast__II(e.java_lang_Object_typeId$, 37)) {
    return e;
  }
  return com_google_gwt_core_client_JavaScriptException_$JavaScriptException__Lcom_google_gwt_core_client_JavaScriptException_2Ljava_lang_Object_2(new com_google_gwt_core_client_JavaScriptException(), e);
}

function com_google_gwt_lang_LongLib_add___3D_3D(a, b){
  var newHigh, newLow;
  newHigh = a[1] + b[1];
  newLow = a[0] + b[0];
  return com_google_gwt_lang_LongLib_create__DD(newLow, newHigh);
}

function com_google_gwt_lang_LongLib_addTimes___3DDD(accum, a, b){
  if (a == 0) {
    return accum;
  }
  if (b == 0) {
    return accum;
  }
  return com_google_gwt_lang_LongLib_add___3D_3D(accum, com_google_gwt_lang_LongLib_create__DD(a * b, 0));
}

function com_google_gwt_lang_LongLib_compare___3D_3D(a, b){
  var nega, negb;
  if (a[0] == b[0] && a[1] == b[1]) {
    return 0;
  }
  nega = a[1] < 0;
  negb = b[1] < 0;
  if (nega && !negb) {
    return -1;
  }
  if (!nega && negb) {
    return 1;
  }
  if (com_google_gwt_lang_LongLib_sub___3D_3D(a, b)[1] < 0) {
    return -1;
  }
   else {
    return 1;
  }
}

function com_google_gwt_lang_LongLib_create__DD(valueLow, valueHigh){
  var diffHigh, diffLow;
  valueHigh %= 1.8446744073709552E19;
  valueLow %= 1.8446744073709552E19;
  diffHigh = valueHigh % 4294967296;
  diffLow = Math.floor(valueLow / 4294967296) * 4294967296;
  valueHigh = valueHigh - diffHigh + diffLow;
  valueLow = valueLow - diffLow + diffHigh;
  while (valueLow < 0) {
    valueLow += 4294967296;
    valueHigh -= 4294967296;
  }
  while (valueLow > 4294967295) {
    valueLow -= 4294967296;
    valueHigh += 4294967296;
  }
  valueHigh = valueHigh % 1.8446744073709552E19;
  while (valueHigh > 9223372032559808512) {
    valueHigh -= 1.8446744073709552E19;
  }
  while (valueHigh < -9223372036854775808) {
    valueHigh += 1.8446744073709552E19;
  }
  return [valueLow, valueHigh];
}

function com_google_gwt_lang_LongLib_div___3D_3D(a, b){
  var approx, deltaRem, deltaResult, halfa, rem, result;
  if (b[0] == 0 && b[1] == 0) {
    throw java_lang_ArithmeticException_$ArithmeticException__Ljava_lang_ArithmeticException_2Ljava_lang_String_2(new java_lang_ArithmeticException(), $intern_113);
  }
  if (a[0] == 0 && a[1] == 0) {
    return com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_ZERO;
  }
  if (com_google_gwt_lang_LongLib_eq___3D_3D(a, (com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE))) {
    if (com_google_gwt_lang_LongLib_eq___3D_3D(b, com_google_gwt_lang_LongLib$Const_ONE) || com_google_gwt_lang_LongLib_eq___3D_3D(b, com_google_gwt_lang_LongLib$Const_NEG_1ONE)) {
      return com_google_gwt_lang_LongLib$Const_MIN_1VALUE;
    }
    halfa = com_google_gwt_lang_LongLib_shr___3DI(a, 1);
    approx = com_google_gwt_lang_LongLib_shl___3DI(com_google_gwt_lang_LongLib_div___3D_3D(halfa, b), 1);
    rem = com_google_gwt_lang_LongLib_sub___3D_3D(a, com_google_gwt_lang_LongLib_mul___3D_3D(b, approx));
    return com_google_gwt_lang_LongLib_add___3D_3D(approx, com_google_gwt_lang_LongLib_div___3D_3D(rem, b));
  }
  if (com_google_gwt_lang_LongLib_eq___3D_3D(b, com_google_gwt_lang_LongLib$Const_MIN_1VALUE)) {
    return com_google_gwt_lang_LongLib$Const_ZERO;
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return com_google_gwt_lang_LongLib_div___3D_3D(com_google_gwt_lang_LongLib_neg___3D(a), com_google_gwt_lang_LongLib_neg___3D(b));
    }
     else {
      return com_google_gwt_lang_LongLib_neg___3D(com_google_gwt_lang_LongLib_div___3D_3D(com_google_gwt_lang_LongLib_neg___3D(a), b));
    }
  }
  if (b[1] < 0) {
    return com_google_gwt_lang_LongLib_neg___3D(com_google_gwt_lang_LongLib_div___3D_3D(a, com_google_gwt_lang_LongLib_neg___3D(b)));
  }
  result = com_google_gwt_lang_LongLib$Const_ZERO;
  rem = a;
  while (com_google_gwt_lang_LongLib_compare___3D_3D(rem, b) >= 0) {
    deltaResult = com_google_gwt_lang_LongLib_fromDouble__D(Math.floor(com_google_gwt_lang_LongLib_toDoubleRoundDown___3D(rem) / com_google_gwt_lang_LongLib_toDoubleRoundUp___3D(b)));
    if (deltaResult[0] == 0 && deltaResult[1] == 0) {
      deltaResult = com_google_gwt_lang_LongLib$Const_ONE;
    }
    deltaRem = com_google_gwt_lang_LongLib_mul___3D_3D(deltaResult, b);
    result = com_google_gwt_lang_LongLib_add___3D_3D(result, deltaResult);
    rem = com_google_gwt_lang_LongLib_sub___3D_3D(rem, deltaRem);
  }
  return result;
}

function com_google_gwt_lang_LongLib_eq___3D_3D(a, b){
  return a[0] == b[0] && a[1] == b[1];
}

function com_google_gwt_lang_LongLib_fromDouble__D(value){
  if (isNaN(value)) {
    return com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_ZERO;
  }
  if (value < -9223372036854775808) {
    return com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE;
  }
  if (value >= 9223372036854775807) {
    return com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_MAX_1VALUE;
  }
  if (value > 0) {
    return com_google_gwt_lang_LongLib_create__DD(Math.floor(value), 0);
  }
   else {
    return com_google_gwt_lang_LongLib_create__DD(Math.ceil(value), 0);
  }
}

function com_google_gwt_lang_LongLib_fromInt__I(value){
  var rebase, result;
  if (value > -129 && value < 128) {
    rebase = value + 128;
    result = (com_google_gwt_lang_LongLib$CachedInts_$clinit__() , com_google_gwt_lang_LongLib$CachedInts_boxedValues)[rebase];
    if (result == null) {
      result = com_google_gwt_lang_LongLib$CachedInts_boxedValues[rebase] = com_google_gwt_lang_LongLib_internalFromInt__I(value);
    }
    return result;
  }
  return com_google_gwt_lang_LongLib_internalFromInt__I(value);
}

function com_google_gwt_lang_LongLib_internalFromInt__I(value){
  if (value >= 0) {
    return [value, 0];
  }
   else {
    return [value + 4294967296, -4294967296];
  }
}

function com_google_gwt_lang_LongLib_lowBits___3D(a){
  if (a[0] >= 2147483648) {
    return ~~Math.max(Math.min(a[0] - 4294967296, 2147483647), -2147483648);
  }
   else {
    return ~~Math.max(Math.min(a[0], 2147483647), -2147483648);
  }
}

function com_google_gwt_lang_LongLib_mul___3D_3D(a, b){
  var a1, a2, a3, a4, b1, b2, b3, b4, res;
  if (a[0] == 0 && a[1] == 0) {
    return com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_ZERO;
  }
  if (b[0] == 0 && b[1] == 0) {
    return com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_ZERO;
  }
  if (com_google_gwt_lang_LongLib_eq___3D_3D(a, (com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE))) {
    return com_google_gwt_lang_LongLib_multByMinValue___3D(b);
  }
  if (com_google_gwt_lang_LongLib_eq___3D_3D(b, com_google_gwt_lang_LongLib$Const_MIN_1VALUE)) {
    return com_google_gwt_lang_LongLib_multByMinValue___3D(a);
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return com_google_gwt_lang_LongLib_mul___3D_3D(com_google_gwt_lang_LongLib_neg___3D(a), com_google_gwt_lang_LongLib_neg___3D(b));
    }
     else {
      return com_google_gwt_lang_LongLib_neg___3D(com_google_gwt_lang_LongLib_mul___3D_3D(com_google_gwt_lang_LongLib_neg___3D(a), b));
    }
  }
  if (b[1] < 0) {
    return com_google_gwt_lang_LongLib_neg___3D(com_google_gwt_lang_LongLib_mul___3D_3D(a, com_google_gwt_lang_LongLib_neg___3D(b)));
  }
  if (com_google_gwt_lang_LongLib_compare___3D_3D(a, com_google_gwt_lang_LongLib$Const_TWO_1PWR_124) < 0 && com_google_gwt_lang_LongLib_compare___3D_3D(b, com_google_gwt_lang_LongLib$Const_TWO_1PWR_124) < 0) {
    return com_google_gwt_lang_LongLib_create__DD((a[1] + a[0]) * (b[1] + b[0]), 0);
  }
  a3 = a[1] % 281474976710656;
  a4 = a[1] - a3;
  a1 = a[0] % 65536;
  a2 = a[0] - a1;
  b3 = b[1] % 281474976710656;
  b4 = b[1] - b3;
  b1 = b[0] % 65536;
  b2 = b[0] - b1;
  res = com_google_gwt_lang_LongLib$Const_ZERO;
  res = com_google_gwt_lang_LongLib_addTimes___3DDD(res, a4, b1);
  res = com_google_gwt_lang_LongLib_addTimes___3DDD(res, a3, b2);
  res = com_google_gwt_lang_LongLib_addTimes___3DDD(res, a3, b1);
  res = com_google_gwt_lang_LongLib_addTimes___3DDD(res, a2, b3);
  res = com_google_gwt_lang_LongLib_addTimes___3DDD(res, a2, b2);
  res = com_google_gwt_lang_LongLib_addTimes___3DDD(res, a2, b1);
  res = com_google_gwt_lang_LongLib_addTimes___3DDD(res, a1, b4);
  res = com_google_gwt_lang_LongLib_addTimes___3DDD(res, a1, b3);
  res = com_google_gwt_lang_LongLib_addTimes___3DDD(res, a1, b2);
  res = com_google_gwt_lang_LongLib_addTimes___3DDD(res, a1, b1);
  return res;
}

function com_google_gwt_lang_LongLib_multByMinValue___3D(a){
  if ((com_google_gwt_lang_LongLib_lowBits___3D(a) & 1) == 1) {
    return com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE;
  }
   else {
    return com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_ZERO;
  }
}

function com_google_gwt_lang_LongLib_neg___3D(a){
  var newHigh, newLow;
  if (com_google_gwt_lang_LongLib_eq___3D_3D(a, (com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE))) {
    return com_google_gwt_lang_LongLib$Const_MIN_1VALUE;
  }
  newHigh = -a[1];
  newLow = -a[0];
  if (newLow > 4294967295) {
    newLow -= 4294967296;
    newHigh += 4294967296;
  }
  if (newLow < 0) {
    newLow += 4294967296;
    newHigh -= 4294967296;
  }
  return [newLow, newHigh];
}

function com_google_gwt_lang_LongLib_pwrAsDouble__I(n){
  if (n <= 30) {
    return 1 << n;
  }
   else {
    return com_google_gwt_lang_LongLib_pwrAsDouble__I(30) * com_google_gwt_lang_LongLib_pwrAsDouble__I(n - 30);
  }
}

function com_google_gwt_lang_LongLib_shl___3DI(a, n){
  var diff, newHigh, newLow, twoToN;
  n &= 63;
  if (com_google_gwt_lang_LongLib_eq___3D_3D(a, (com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE))) {
    if (n == 0) {
      return a;
    }
     else {
      return com_google_gwt_lang_LongLib$Const_ZERO;
    }
  }
  if (a[1] < 0) {
    return com_google_gwt_lang_LongLib_neg___3D(com_google_gwt_lang_LongLib_shl___3DI(com_google_gwt_lang_LongLib_neg___3D(a), n));
  }
  twoToN = com_google_gwt_lang_LongLib_pwrAsDouble__I(n);
  newHigh = a[1] * twoToN % 1.8446744073709552E19;
  newLow = a[0] * twoToN;
  diff = newLow - newLow % 4294967296;
  newHigh += diff;
  newLow -= diff;
  if (newHigh >= 9223372036854775807) {
    newHigh -= 1.8446744073709552E19;
  }
  return [newLow, newHigh];
}

function com_google_gwt_lang_LongLib_shr___3DI(a, n){
  var newHigh, newLow, shiftFact;
  n &= 63;
  shiftFact = com_google_gwt_lang_LongLib_pwrAsDouble__I(n);
  newHigh = a[1] / shiftFact;
  newLow = Math.floor(a[0] / shiftFact);
  return com_google_gwt_lang_LongLib_create__DD(newLow, newHigh);
}

function com_google_gwt_lang_LongLib_sub___3D_3D(a, b){
  var newHigh, newLow;
  newHigh = a[1] - b[1];
  newLow = a[0] - b[0];
  return com_google_gwt_lang_LongLib_create__DD(newLow, newHigh);
}

function com_google_gwt_lang_LongLib_toDoubleRoundDown___3D(a){
  var diff, magnitute, toSubtract;
  magnitute = com_google_gwt_lang_Cast_round_1int__D(Math.log(a[1]) / (com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_LN_12));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toSubtract = (1 << diff) - 1;
    return a[1] + (a[0] - toSubtract);
  }
}

function com_google_gwt_lang_LongLib_toDoubleRoundUp___3D(a){
  var diff, magnitute, toAdd;
  magnitute = com_google_gwt_lang_Cast_round_1int__D(Math.log(a[1]) / (com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_LN_12));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toAdd = (1 << diff) - 1;
    return a[1] + (a[0] + toAdd);
  }
}

function com_google_gwt_lang_LongLib_toString___3D(a){
  var digits, rem, remDivTenPower, res, tenPowerLong, zeroesNeeded;
  if (a[0] == 0 && a[1] == 0) {
    return $intern_114;
  }
  if (com_google_gwt_lang_LongLib_eq___3D_3D(a, (com_google_gwt_lang_LongLib$Const_$clinit__() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE))) {
    return $intern_115;
  }
  if (a[1] < 0) {
    return $intern_116 + com_google_gwt_lang_LongLib_toString___3D(com_google_gwt_lang_LongLib_neg___3D(a));
  }
  rem = a;
  res = $intern_49;
  while (!(rem[0] == 0 && rem[1] == 0)) {
    tenPowerLong = com_google_gwt_lang_LongLib_fromInt__I(1000000000);
    remDivTenPower = com_google_gwt_lang_LongLib_div___3D_3D(rem, tenPowerLong);
    digits = $intern_49 + com_google_gwt_lang_LongLib_lowBits___3D(com_google_gwt_lang_LongLib_sub___3D_3D(rem, com_google_gwt_lang_LongLib_mul___3D_3D(remDivTenPower, tenPowerLong)));
    rem = remDivTenPower;
    if (!(rem[0] == 0 && rem[1] == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; --zeroesNeeded) {
        digits = $intern_114 + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function com_google_gwt_lang_LongLib$CachedInts_$clinit__(){
  com_google_gwt_lang_LongLib$CachedInts_$clinit__ = nullMethod;
  com_google_gwt_lang_LongLib$CachedInts_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(com_google_gwt_lang_ClassLiteralHolder__13_13D_1classLit, 0, 14, 256, 0);
}

var com_google_gwt_lang_LongLib$CachedInts_boxedValues;
function com_google_gwt_lang_LongLib$Const_$clinit__(){
  com_google_gwt_lang_LongLib$Const_$clinit__ = nullMethod;
  com_google_gwt_lang_LongLib$Const_LN_12 = Math.log(2);
  com_google_gwt_lang_LongLib$Const_MAX_1VALUE = P7fffffffffffffff_longLit;
  com_google_gwt_lang_LongLib$Const_MIN_1VALUE = N8000000000000000_longLit;
  com_google_gwt_lang_LongLib$Const_NEG_1ONE = com_google_gwt_lang_LongLib_fromInt__I(-1);
  com_google_gwt_lang_LongLib$Const_ONE = com_google_gwt_lang_LongLib_fromInt__I(1);
  com_google_gwt_lang_LongLib_fromInt__I(2);
  com_google_gwt_lang_LongLib$Const_TWO_1PWR_124 = P1000000_longLit;
  com_google_gwt_lang_LongLib$Const_ZERO = com_google_gwt_lang_LongLib_fromInt__I(0);
}

var com_google_gwt_lang_LongLib$Const_LN_12, com_google_gwt_lang_LongLib$Const_MAX_1VALUE, com_google_gwt_lang_LongLib$Const_MIN_1VALUE, com_google_gwt_lang_LongLib$Const_NEG_1ONE, com_google_gwt_lang_LongLib$Const_ONE, com_google_gwt_lang_LongLib$Const_TWO_1PWR_124, com_google_gwt_lang_LongLib$Const_ZERO;
function com_google_gwt_user_client_CommandCanceledException_$CommandCanceledException__Lcom_google_gwt_user_client_CommandCanceledException_2Lcom_google_gwt_user_client_Command_2(this$static){
  return this$static;
}

function com_google_gwt_user_client_CommandCanceledException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1CommandCanceledException_12_1classLit;
}

function com_google_gwt_user_client_CommandCanceledException(){
}

_ = com_google_gwt_user_client_CommandCanceledException.prototype = new java_lang_RuntimeException();
_.getClass__$ = com_google_gwt_user_client_CommandCanceledException_getClass__;
_.java_lang_Object_typeId$ = 36;
function com_google_gwt_user_client_CommandExecutor_$CommandExecutor__Lcom_google_gwt_user_client_CommandExecutor_2(this$static){
  this$static.com_google_gwt_user_client_CommandExecutor_cancellationTimer = com_google_gwt_user_client_CommandExecutor$1_$CommandExecutor$1__Lcom_google_gwt_user_client_CommandExecutor$1_2(new com_google_gwt_user_client_CommandExecutor$1(), this$static);
  this$static.com_google_gwt_user_client_CommandExecutor_commands = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  this$static.com_google_gwt_user_client_CommandExecutor_executionTimer = com_google_gwt_user_client_CommandExecutor$2_$CommandExecutor$2__Lcom_google_gwt_user_client_CommandExecutor$2_2(new com_google_gwt_user_client_CommandExecutor$2(), this$static);
  this$static.com_google_gwt_user_client_CommandExecutor_iterator = com_google_gwt_user_client_CommandExecutor$CircularIterator_$CommandExecutor$CircularIterator__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(new com_google_gwt_user_client_CommandExecutor$CircularIterator(), this$static);
  return this$static;
}

function com_google_gwt_user_client_CommandExecutor_$doCommandCanceled__Lcom_google_gwt_user_client_CommandExecutor_2(this$static){
  var cmd;
  cmd = com_google_gwt_user_client_CommandExecutor$CircularIterator_$getLast__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(this$static.com_google_gwt_user_client_CommandExecutor_iterator);
  com_google_gwt_user_client_CommandExecutor$CircularIterator_$remove__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(this$static.com_google_gwt_user_client_CommandExecutor_iterator);
  if (cmd != null && com_google_gwt_lang_Cast_canCast__II(cmd.java_lang_Object_typeId$, 38)) {
    com_google_gwt_user_client_CommandCanceledException_$CommandCanceledException__Lcom_google_gwt_user_client_CommandCanceledException_2Lcom_google_gwt_user_client_Command_2(new com_google_gwt_user_client_CommandCanceledException(), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(cmd, 38));
  }
   else {
  }
  this$static.com_google_gwt_user_client_CommandExecutor_executing = false;
  com_google_gwt_user_client_CommandExecutor_$maybeStartExecutionTimer__Lcom_google_gwt_user_client_CommandExecutor_2(this$static);
}

function com_google_gwt_user_client_CommandExecutor_$doExecuteCommands__Lcom_google_gwt_user_client_CommandExecutor_2D(this$static, startTimeMillis){
  var command, element, wasCanceled;
  wasCanceled = false;
  try {
    this$static.com_google_gwt_user_client_CommandExecutor_executing = true;
    this$static.com_google_gwt_user_client_CommandExecutor_iterator.com_google_gwt_user_client_CommandExecutor$CircularIterator_end = this$static.com_google_gwt_user_client_CommandExecutor_commands.java_util_ArrayList_size;
    com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2I(this$static.com_google_gwt_user_client_CommandExecutor_cancellationTimer, 10000);
    while (com_google_gwt_user_client_CommandExecutor$CircularIterator_$hasNext__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(this$static.com_google_gwt_user_client_CommandExecutor_iterator)) {
      element = com_google_gwt_user_client_CommandExecutor$CircularIterator_$next__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(this$static.com_google_gwt_user_client_CommandExecutor_iterator);
      try {
        if (element == null) {
          return;
        }
        if (element != null && com_google_gwt_lang_Cast_canCast__II(element.java_lang_Object_typeId$, 38)) {
          command = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(element, 38);
          command.execute__();
        }
         else {
        }
      }
       finally {
        wasCanceled = this$static.com_google_gwt_user_client_CommandExecutor_iterator.com_google_gwt_user_client_CommandExecutor$CircularIterator_last == -1;
        if (wasCanceled) {
          return;
        }
        com_google_gwt_user_client_CommandExecutor$CircularIterator_$remove__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(this$static.com_google_gwt_user_client_CommandExecutor_iterator);
      }
      if ((new Date()).getTime() - startTimeMillis >= 100) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2(this$static.com_google_gwt_user_client_CommandExecutor_cancellationTimer);
      this$static.com_google_gwt_user_client_CommandExecutor_executing = false;
      com_google_gwt_user_client_CommandExecutor_$maybeStartExecutionTimer__Lcom_google_gwt_user_client_CommandExecutor_2(this$static);
    }
  }
}

function com_google_gwt_user_client_CommandExecutor_$maybeStartExecutionTimer__Lcom_google_gwt_user_client_CommandExecutor_2(this$static){
  if (this$static.com_google_gwt_user_client_CommandExecutor_commands.java_util_ArrayList_size != 0 && !this$static.com_google_gwt_user_client_CommandExecutor_executionTimerPending && !this$static.com_google_gwt_user_client_CommandExecutor_executing) {
    this$static.com_google_gwt_user_client_CommandExecutor_executionTimerPending = true;
    com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2I(this$static.com_google_gwt_user_client_CommandExecutor_executionTimer, 1);
  }
}

function com_google_gwt_user_client_CommandExecutor_$submit__Lcom_google_gwt_user_client_CommandExecutor_2Lcom_google_gwt_user_client_Command_2(this$static, command){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_CommandExecutor_commands, command);
  com_google_gwt_user_client_CommandExecutor_$maybeStartExecutionTimer__Lcom_google_gwt_user_client_CommandExecutor_2(this$static);
}

function com_google_gwt_user_client_CommandExecutor_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1CommandExecutor_12_1classLit;
}

function com_google_gwt_user_client_CommandExecutor(){
}

_ = com_google_gwt_user_client_CommandExecutor.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_CommandExecutor_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_CommandExecutor_executing = false;
_.com_google_gwt_user_client_CommandExecutor_executionTimerPending = false;
function com_google_gwt_user_client_CommandExecutor$1_$clinit__(){
  com_google_gwt_user_client_CommandExecutor$1_$clinit__ = nullMethod;
  com_google_gwt_user_client_Timer_$clinit__();
}

function com_google_gwt_user_client_CommandExecutor$1_$CommandExecutor$1__Lcom_google_gwt_user_client_CommandExecutor$1_2(this$static, this$0){
  com_google_gwt_user_client_CommandExecutor$1_$clinit__();
  this$static.com_google_gwt_user_client_CommandExecutor$1_this$0 = this$0;
  return this$static;
}

function com_google_gwt_user_client_CommandExecutor$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1CommandExecutor$1_12_1classLit;
}

function com_google_gwt_user_client_CommandExecutor$1_run__(){
  if (!this.com_google_gwt_user_client_CommandExecutor$1_this$0.com_google_gwt_user_client_CommandExecutor_executing) {
    return;
  }
  com_google_gwt_user_client_CommandExecutor_$doCommandCanceled__Lcom_google_gwt_user_client_CommandExecutor_2(this.com_google_gwt_user_client_CommandExecutor$1_this$0);
}

function com_google_gwt_user_client_CommandExecutor$1(){
}

_ = com_google_gwt_user_client_CommandExecutor$1.prototype = new com_google_gwt_user_client_Timer();
_.getClass__$ = com_google_gwt_user_client_CommandExecutor$1_getClass__;
_.run__ = com_google_gwt_user_client_CommandExecutor$1_run__;
_.java_lang_Object_typeId$ = 37;
_.com_google_gwt_user_client_CommandExecutor$1_this$0 = null;
function com_google_gwt_user_client_CommandExecutor$2_$clinit__(){
  com_google_gwt_user_client_CommandExecutor$2_$clinit__ = nullMethod;
  com_google_gwt_user_client_Timer_$clinit__();
}

function com_google_gwt_user_client_CommandExecutor$2_$CommandExecutor$2__Lcom_google_gwt_user_client_CommandExecutor$2_2(this$static, this$0){
  com_google_gwt_user_client_CommandExecutor$2_$clinit__();
  this$static.com_google_gwt_user_client_CommandExecutor$2_this$0 = this$0;
  return this$static;
}

function com_google_gwt_user_client_CommandExecutor$2_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1CommandExecutor$2_12_1classLit;
}

function com_google_gwt_user_client_CommandExecutor$2_run__(){
  this.com_google_gwt_user_client_CommandExecutor$2_this$0.com_google_gwt_user_client_CommandExecutor_executionTimerPending = false;
  com_google_gwt_user_client_CommandExecutor_$doExecuteCommands__Lcom_google_gwt_user_client_CommandExecutor_2D(this.com_google_gwt_user_client_CommandExecutor$2_this$0, (new Date()).getTime());
}

function com_google_gwt_user_client_CommandExecutor$2(){
}

_ = com_google_gwt_user_client_CommandExecutor$2.prototype = new com_google_gwt_user_client_Timer();
_.getClass__$ = com_google_gwt_user_client_CommandExecutor$2_getClass__;
_.run__ = com_google_gwt_user_client_CommandExecutor$2_run__;
_.java_lang_Object_typeId$ = 38;
_.com_google_gwt_user_client_CommandExecutor$2_this$0 = null;
function com_google_gwt_user_client_CommandExecutor$CircularIterator_$CommandExecutor$CircularIterator__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(this$static, this$0){
  this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_this$0 = this$0;
  return this$static;
}

function com_google_gwt_user_client_CommandExecutor$CircularIterator_$getLast__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(this$static){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_this$0.com_google_gwt_user_client_CommandExecutor_commands, this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_last);
}

function com_google_gwt_user_client_CommandExecutor$CircularIterator_$hasNext__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(this$static){
  return this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_next < this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_end;
}

function com_google_gwt_user_client_CommandExecutor$CircularIterator_$next__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(this$static){
  var command;
  this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_last = this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_next;
  command = java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_this$0.com_google_gwt_user_client_CommandExecutor_commands, this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_next++);
  if (this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_next >= this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_end) {
    this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_next = 0;
  }
  return command;
}

function com_google_gwt_user_client_CommandExecutor$CircularIterator_$remove__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(this$static){
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2I(this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_this$0.com_google_gwt_user_client_CommandExecutor_commands, this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_last);
  --this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_end;
  if (this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_last <= this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_next) {
    if (--this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_next < 0) {
      this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_next = 0;
    }
  }
  this$static.com_google_gwt_user_client_CommandExecutor$CircularIterator_last = -1;
}

function com_google_gwt_user_client_CommandExecutor$CircularIterator_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1CommandExecutor$CircularIterator_12_1classLit;
}

function com_google_gwt_user_client_CommandExecutor$CircularIterator_hasNext__(){
  return this.com_google_gwt_user_client_CommandExecutor$CircularIterator_next < this.com_google_gwt_user_client_CommandExecutor$CircularIterator_end;
}

function com_google_gwt_user_client_CommandExecutor$CircularIterator_next__(){
  return com_google_gwt_user_client_CommandExecutor$CircularIterator_$next__Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2(this);
}

function com_google_gwt_user_client_CommandExecutor$CircularIterator(){
}

_ = com_google_gwt_user_client_CommandExecutor$CircularIterator.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_CommandExecutor$CircularIterator_getClass__;
_.hasNext__ = com_google_gwt_user_client_CommandExecutor$CircularIterator_hasNext__;
_.next__ = com_google_gwt_user_client_CommandExecutor$CircularIterator_next__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_CommandExecutor$CircularIterator_end = 0;
_.com_google_gwt_user_client_CommandExecutor$CircularIterator_last = -1;
_.com_google_gwt_user_client_CommandExecutor$CircularIterator_next = 0;
_.com_google_gwt_user_client_CommandExecutor$CircularIterator_this$0 = null;
function com_google_gwt_user_client_DOM_dispatchEventImpl__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(evt, elem, listener){
  var prevCurrentEvent;
  if (elem == com_google_gwt_user_client_DOM_sCaptureElem) {
    if (com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , evt).type) == 8192) {
      com_google_gwt_user_client_DOM_sCaptureElem = null;
    }
  }
  prevCurrentEvent = com_google_gwt_user_client_DOM_currentEvent;
  com_google_gwt_user_client_DOM_currentEvent = evt;
  try {
    listener.onBrowserEvent__Lcom_google_gwt_user_client_Event_2(evt);
  }
   finally {
    com_google_gwt_user_client_DOM_currentEvent = prevCurrentEvent;
  }
}

function com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2(evt){
  var ret;
  ret = com_google_gwt_user_client_Event$NativePreviewEvent_fire__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_dom_client_NativeEvent_2(com_google_gwt_user_client_Event_handlers, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    (com_google_gwt_dom_client_DOMImpl_$clinit__() , evt).preventDefault();
  }
  return ret;
}

function com_google_gwt_user_client_DOM_releaseCapture__Lcom_google_gwt_user_client_Element_2(elem){
  if (!!com_google_gwt_user_client_DOM_sCaptureElem && elem == com_google_gwt_user_client_DOM_sCaptureElem) {
    com_google_gwt_user_client_DOM_sCaptureElem = null;
  }
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2();
  com_google_gwt_user_client_impl_DOMImplStandard_$releaseCaptureImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(elem);
}

function com_google_gwt_user_client_DOM_setCapture__Lcom_google_gwt_user_client_Element_2(elem){
  com_google_gwt_user_client_DOM_sCaptureElem = elem;
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2();
  com_google_gwt_user_client_impl_DOMImplStandard_captureElem = elem;
}

function com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2I(elem, eventBits){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2();
  elem.__eventBits = eventBits;
  elem.onclick = eventBits & 1?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.ondblclick = eventBits & 2?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmousedown = eventBits & 4?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmouseup = eventBits & 8?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmouseover = eventBits & 16?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmouseout = eventBits & 32?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmousemove = eventBits & 64?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onkeydown = eventBits & 128?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onkeypress = eventBits & 256?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onkeyup = eventBits & 512?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onchange = eventBits & 1024?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onfocus = eventBits & 2048?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onblur = eventBits & 4096?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onlosecapture = eventBits & 8192?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onscroll = eventBits & 16384?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onload = eventBits & 32768?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onerror = eventBits & 65536?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmousewheel = eventBits & 131072?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.oncontextmenu = eventBits & 262144?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
}

var com_google_gwt_user_client_DOM_currentEvent = null, com_google_gwt_user_client_DOM_sCaptureElem = null;
function com_google_gwt_user_client_DeferredCommand_$clinit__(){
  com_google_gwt_user_client_DeferredCommand_$clinit__ = nullMethod;
  com_google_gwt_user_client_DeferredCommand_commandExecutor = com_google_gwt_user_client_CommandExecutor_$CommandExecutor__Lcom_google_gwt_user_client_CommandExecutor_2(new com_google_gwt_user_client_CommandExecutor());
}

function com_google_gwt_user_client_DeferredCommand_addCommand__Lcom_google_gwt_user_client_Command_2(cmd){
  com_google_gwt_user_client_DeferredCommand_$clinit__();
  if (!cmd) {
    throw java_lang_NullPointerException_$NullPointerException__Ljava_lang_NullPointerException_2Ljava_lang_String_2(new java_lang_NullPointerException(), $intern_117);
  }
  com_google_gwt_user_client_CommandExecutor_$submit__Lcom_google_gwt_user_client_CommandExecutor_2Lcom_google_gwt_user_client_Command_2(com_google_gwt_user_client_DeferredCommand_commandExecutor, cmd);
}

var com_google_gwt_user_client_DeferredCommand_commandExecutor;
function com_google_gwt_user_client_Event_addNativePreviewHandler__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2(handler){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2();
  com_google_gwt_user_client_Event$NativePreviewEvent_getType__();
  if (!com_google_gwt_user_client_Event_handlers) {
    com_google_gwt_user_client_Event_handlers = com_google_gwt_event_shared_HandlerManager_$HandlerManager__Lcom_google_gwt_event_shared_HandlerManager_2Ljava_lang_Object_2Z(new com_google_gwt_event_shared_HandlerManager(), null, true);
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton = new com_google_gwt_user_client_Event$NativePreviewEvent();
  }
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(com_google_gwt_user_client_Event_handlers, com_google_gwt_user_client_Event$NativePreviewEvent_TYPE, handler);
}

var com_google_gwt_user_client_Event_handlers = null;
function com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2(this$static){
  this$static.com_google_gwt_event_shared_GwtEvent_dead = false;
  this$static.com_google_gwt_event_shared_GwtEvent_source = null;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = false;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = false;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = null;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_dispatch__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2(handler){
  com_google_gwt_user_client_ui_PopupPanel_$previewNativeEvent__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_Event$NativePreviewEvent_2(handler.com_google_gwt_user_client_ui_PopupPanel$2_this$0, this);
}

function com_google_gwt_user_client_Event$NativePreviewEvent_fire__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_dom_client_NativeEvent_2(handlers, nativeEvent){
  if (!!com_google_gwt_user_client_Event$NativePreviewEvent_TYPE && !!handlers && java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(handlers.com_google_gwt_event_shared_HandlerManager_registry.com_google_gwt_event_shared_HandlerManager$HandlerRegistry_map, com_google_gwt_user_client_Event$NativePreviewEvent_TYPE)) {
    com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2(com_google_gwt_user_client_Event$NativePreviewEvent_singleton);
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = nativeEvent;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2(handlers, com_google_gwt_user_client_Event$NativePreviewEvent_singleton);
    return !(com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled && !com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed);
  }
  return true;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_getAssociatedType__(){
  return com_google_gwt_user_client_Event$NativePreviewEvent_TYPE;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Event$NativePreviewEvent_12_1classLit;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_getType__(){
  if (!com_google_gwt_user_client_Event$NativePreviewEvent_TYPE) {
    com_google_gwt_user_client_Event$NativePreviewEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type());
  }
  return com_google_gwt_user_client_Event$NativePreviewEvent_TYPE;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_revive__(){
  com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2(this);
}

function com_google_gwt_user_client_Event$NativePreviewEvent(){
}

_ = com_google_gwt_user_client_Event$NativePreviewEvent.prototype = new com_google_gwt_event_shared_GwtEvent();
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2 = com_google_gwt_user_client_Event$NativePreviewEvent_dispatch__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2;
_.getAssociatedType__ = com_google_gwt_user_client_Event$NativePreviewEvent_getAssociatedType__;
_.getClass__$ = com_google_gwt_user_client_Event$NativePreviewEvent_getClass__;
_.revive__ = com_google_gwt_user_client_Event$NativePreviewEvent_revive__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = false;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = false;
_.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = null;
var com_google_gwt_user_client_Event$NativePreviewEvent_TYPE = null, com_google_gwt_user_client_Event$NativePreviewEvent_singleton = null;
function com_google_gwt_user_client_Timer$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Timer$1_12_1classLit;
}

function com_google_gwt_user_client_Timer$1_onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2(event){
  while ((com_google_gwt_user_client_Timer_$clinit__() , com_google_gwt_user_client_Timer_timers).java_util_ArrayList_size > 0) {
    com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(com_google_gwt_user_client_Timer_timers, 0), 39));
  }
}

function com_google_gwt_user_client_Timer$1(){
}

_ = com_google_gwt_user_client_Timer$1.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_Timer$1_getClass__;
_.onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2 = com_google_gwt_user_client_Timer$1_onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2;
_.java_lang_Object_typeId$ = 39;
function com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(com_google_gwt_event_logical_shared_CloseEvent_TYPE?com_google_gwt_event_logical_shared_CloseEvent_TYPE:(com_google_gwt_event_logical_shared_CloseEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type())), handler);
}

function com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(type, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(com_google_gwt_user_client_Window_getHandlers__(), type, handler);
}

function com_google_gwt_user_client_Window_fireClosedImpl__(){
  if (com_google_gwt_user_client_Window_closeHandlersInitialized) {
    com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2Z(com_google_gwt_user_client_Window_getHandlers__());
  }
}

function com_google_gwt_user_client_Window_fireClosingImpl__(){
  var event;
  if (com_google_gwt_user_client_Window_closeHandlersInitialized) {
    event = (com_google_gwt_user_client_Window$ClosingEvent_$clinit__() , new com_google_gwt_user_client_Window$ClosingEvent());
    com_google_gwt_user_client_Window_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2(event);
    return null;
  }
  return null;
}

function com_google_gwt_user_client_Window_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2(event){
  if (com_google_gwt_user_client_Window_handlers) {
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2(com_google_gwt_user_client_Window_handlers, event);
  }
}

function com_google_gwt_user_client_Window_getHandlers__(){
  if (!com_google_gwt_user_client_Window_handlers) {
    com_google_gwt_user_client_Window_handlers = com_google_gwt_user_client_Window$WindowHandlers_$Window$WindowHandlers__Lcom_google_gwt_user_client_Window$WindowHandlers_2(new com_google_gwt_user_client_Window$WindowHandlers());
  }
  return com_google_gwt_user_client_Window_handlers;
}

function com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__(){
  if (!com_google_gwt_user_client_Window_closeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImpl_$initWindowCloseHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2();
    com_google_gwt_user_client_Window_closeHandlersInitialized = true;
  }
}

var com_google_gwt_user_client_Window_closeHandlersInitialized = false, com_google_gwt_user_client_Window_handlers = null;
function com_google_gwt_user_client_Window$ClosingEvent_$clinit__(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__ = nullMethod;
  com_google_gwt_user_client_Window$ClosingEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type());
}

function com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_user_client_Window$ClosingHandler_2(handler){
  null.nullMethod();
}

function com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__(){
  return com_google_gwt_user_client_Window$ClosingEvent_TYPE;
}

function com_google_gwt_user_client_Window$ClosingEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$ClosingEvent_12_1classLit;
}

function com_google_gwt_user_client_Window$ClosingEvent(){
}

_ = com_google_gwt_user_client_Window$ClosingEvent.prototype = new com_google_gwt_event_shared_GwtEvent();
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2 = com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_user_client_Window$ClosingHandler_2;
_.getAssociatedType__ = com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__;
_.getClass__$ = com_google_gwt_user_client_Window$ClosingEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
var com_google_gwt_user_client_Window$ClosingEvent_TYPE;
function com_google_gwt_user_client_Window$WindowHandlers_$Window$WindowHandlers__Lcom_google_gwt_user_client_Window$WindowHandlers_2(this$static){
  this$static.com_google_gwt_event_shared_HandlerManager_registry = com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$HandlerManager$HandlerRegistry__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2(new com_google_gwt_event_shared_HandlerManager$HandlerRegistry());
  this$static.com_google_gwt_event_shared_HandlerManager_source = null;
  this$static.com_google_gwt_event_shared_HandlerManager_isReverseOrder = false;
  return this$static;
}

function com_google_gwt_user_client_Window$WindowHandlers_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$WindowHandlers_12_1classLit;
}

function com_google_gwt_user_client_Window$WindowHandlers(){
}

_ = com_google_gwt_user_client_Window$WindowHandlers.prototype = new com_google_gwt_event_shared_HandlerManager();
_.getClass__$ = com_google_gwt_user_client_Window$WindowHandlers_getClass__;
_.java_lang_Object_typeId$ = 40;
function com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2(eventType){
  switch (eventType) {
    case $intern_118:
      return 4096;
    case $intern_119:
      return 1024;
    case $intern_62:
      return 1;
    case $intern_120:
      return 2;
    case $intern_121:
      return 2048;
    case $intern_122:
      return 128;
    case $intern_64:
      return 256;
    case $intern_123:
      return 512;
    case $intern_124:
      return 32768;
    case $intern_125:
      return 8192;
    case $intern_65:
      return 4;
    case $intern_66:
      return 64;
    case $intern_67:
      return 32;
    case $intern_126:
      return 16;
    case $intern_68:
      return 8;
    case $intern_127:
      return 16384;
    case $intern_128:
      return 65536;
    case $intern_129:
      return 131072;
    case $intern_130:
      return 131072;
    case $intern_131:
      return 262144;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2(){
  if (!com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized) {
    com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2();
    com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = true;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_isMyListener__Ljava_lang_Object_2(object){
  return !(object != null && (object.java_lang_Object_typeMarker$ != nullMethod && object.java_lang_Object_typeId$ != 2)) && (object != null && com_google_gwt_lang_Cast_canCast__II(object.java_lang_Object_typeId$, 7));
}

var com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = false;
function com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2I(elem, index){
  var count = 0, child = elem.firstChild;
  while (child) {
    var next = child.nextSibling;
    if (child.nodeType == 1) {
      if (index == count)
        return child;
      ++count;
    }
    child = next;
  }
  return null;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$getChildCount__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(elem){
  var count = 0, child = elem.firstChild;
  while (child) {
    if (child.nodeType == 1)
      ++count;
    child = child.nextSibling;
  }
  return count;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2(){
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent = function(evt){
    if (com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent(evt)) {
      var cap = com_google_gwt_user_client_impl_DOMImplStandard_captureElem;
      if (cap && cap.__listener) {
        if (com_google_gwt_user_client_impl_DOMImpl_isMyListener__Ljava_lang_Object_2(cap.__listener)) {
          com_google_gwt_user_client_DOM_dispatchEventImpl__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(evt, cap, cap.__listener);
          evt.stopPropagation();
        }
      }
    }
  }
  ;
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent = function(evt){
    if (!com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2(evt)) {
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    }
    return true;
  }
  ;
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent = function(evt){
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentNode;
    }
    if (curElem && curElem.nodeType != 1) {
      curElem = null;
    }
    if (listener) {
      if (com_google_gwt_user_client_impl_DOMImpl_isMyListener__Ljava_lang_Object_2(listener)) {
        com_google_gwt_user_client_DOM_dispatchEventImpl__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2(evt, curElem, listener);
      }
    }
  }
  ;
  $wnd.addEventListener($intern_62, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_120, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_65, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_68, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_66, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_126, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_67, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_129, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_122, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent, true);
  $wnd.addEventListener($intern_123, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent, true);
  $wnd.addEventListener($intern_64, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent, true);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2I(parent, toAdd, index){
  var count = 0, child = parent.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent.insertBefore(toAdd, before);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$releaseCaptureImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(elem){
  if (elem === com_google_gwt_user_client_impl_DOMImplStandard_captureElem) {
    com_google_gwt_user_client_impl_DOMImplStandard_captureElem = null;
  }
}

var com_google_gwt_user_client_impl_DOMImplStandard_captureElem = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent = null;
function com_google_gwt_user_client_impl_ElementMapperImpl_$ElementMapperImpl__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2(this$static){
  this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  return this$static;
}

function com_google_gwt_user_client_impl_ElementMapperImpl_$get__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  var index, com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2_index_0;
  index = (com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2_index_0 = elem[$intern_132] , com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2_index_0 == null?-1:com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2_index_0);
  if (index < 0) {
    return null;
  }
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index), 8);
}

function com_google_gwt_user_client_impl_ElementMapperImpl_$put__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_ui_UIObject_2(this$static, uiObject){
  var index;
  if (!this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList) {
    index = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList.java_util_ArrayList_size;
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, uiObject);
  }
   else {
    index = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index;
    java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index, uiObject);
    this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_next;
  }
  uiObject.com_google_gwt_user_client_ui_UIObject_element[$intern_132] = index;
}

function com_google_gwt_user_client_impl_ElementMapperImpl_$removeByElement__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  var index, com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2_index_0;
  index = (com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2_index_0 = elem[$intern_132] , com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2_index_0 == null?-1:com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2_index_0);
  elem[$intern_132] = null;
  java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index, null);
  this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_$ElementMapperImpl$FreeNode__Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2ILcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2(new com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode(), index, this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList);
}

function com_google_gwt_user_client_impl_ElementMapperImpl_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1ElementMapperImpl_12_1classLit;
}

function com_google_gwt_user_client_impl_ElementMapperImpl(){
}

_ = com_google_gwt_user_client_impl_ElementMapperImpl.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_impl_ElementMapperImpl_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = null;
function com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_$ElementMapperImpl$FreeNode__Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2ILcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2(this$static, index, next){
  this$static.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index = index;
  this$static.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_next = next;
  return this$static;
}

function com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1ElementMapperImpl$FreeNode_12_1classLit;
}

function com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode(){
}

_ = com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index = 0;
_.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_next = null;
function com_google_gwt_user_client_impl_WindowImpl_$initWindowCloseHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = com_google_gwt_user_client_Window_fireClosingImpl__();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = function(evt){
    try {
      com_google_gwt_user_client_Window_fireClosedImpl__();
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  ;
}

function com_google_gwt_user_client_ui_UIObject_$addStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, style){
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this$static.getStyleElement__(), style, true);
}

function com_google_gwt_user_client_ui_UIObject_$removeStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, style){
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this$static.getStyleElement__(), style, false);
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
}

function com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2II(this$static, width, height){
  if (width >= 0) {
    this$static.setWidth__Ljava_lang_String_2(width + $intern_39);
  }
  if (height >= 0) {
    this$static.setHeight__Ljava_lang_String_2(height + $intern_39);
  }
}

function com_google_gwt_user_client_ui_UIObject_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1UIObject_12_1classLit;
}

function com_google_gwt_user_client_ui_UIObject_getOffsetHeight__(){
  return parseInt(this.com_google_gwt_user_client_ui_UIObject_element[$intern_17]) || 0;
}

function com_google_gwt_user_client_ui_UIObject_getOffsetWidth__(){
  return parseInt(this.com_google_gwt_user_client_ui_UIObject_element[$intern_16]) || 0;
}

function com_google_gwt_user_client_ui_UIObject_getStyleElement__(){
  return this.com_google_gwt_user_client_ui_UIObject_element;
}

function com_google_gwt_user_client_ui_UIObject_getStylePrimaryName__Lcom_google_gwt_dom_client_Element_2(elem){
  var fullClassName, spaceIdx;
  fullClassName = elem[$intern_133] == null?null:String(elem[$intern_133]);
  spaceIdx = fullClassName.indexOf(java_lang_String_fromCodePoint__I(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx - 0);
  }
  return fullClassName;
}

function com_google_gwt_user_client_ui_UIObject_setHeight__Ljava_lang_String_2(height){
  this.com_google_gwt_user_client_ui_UIObject_element.style[$intern_134] = height;
}

function com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(elem, style, add){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  if (!elem) {
    throw java_lang_RuntimeException_$RuntimeException__Ljava_lang_RuntimeException_2Ljava_lang_String_2(new java_lang_RuntimeException(), $intern_135);
  }
  style = java_lang_String_$trim__Ljava_lang_String_2(style);
  if (style.length == 0) {
    throw java_lang_IllegalArgumentException_$IllegalArgumentException__Ljava_lang_IllegalArgumentException_2Ljava_lang_String_2(new java_lang_IllegalArgumentException(), $intern_136);
  }
  oldStyle = elem[$intern_133] == null?null:String(elem[$intern_133]);
  idx = oldStyle.indexOf(style);
  while (idx != -1) {
    if (idx == 0 || oldStyle.charCodeAt(idx - 1) == 32) {
      last = idx + style.length;
      lastPos = oldStyle.length;
      if (last == lastPos || last < lastPos && oldStyle.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldStyle.indexOf(style, idx + 1);
  }
  if (add) {
    if (idx == -1) {
      if (oldStyle.length > 0) {
        oldStyle += $intern_137;
      }
      elem[$intern_133] = oldStyle + style;
    }
  }
   else {
    if (idx != -1) {
      begin = java_lang_String_$trim__Ljava_lang_String_2(oldStyle.substr(0, idx - 0));
      end = java_lang_String_$trim__Ljava_lang_String_2(java_lang_String_$substring__Ljava_lang_String_2I(oldStyle, idx + style.length));
      if (begin.length == 0) {
        newClassName = end;
      }
       else if (end.length == 0) {
        newClassName = begin;
      }
       else {
        newClassName = begin + $intern_137 + end;
      }
      elem[$intern_133] = newClassName;
    }
  }
}

function com_google_gwt_user_client_ui_UIObject_setWidth__Ljava_lang_String_2(width){
  this.com_google_gwt_user_client_ui_UIObject_element.style[$intern_138] = width;
}

function com_google_gwt_user_client_ui_UIObject_toString__(){
  if (!this.com_google_gwt_user_client_ui_UIObject_element) {
    return $intern_139;
  }
  return (com_google_gwt_dom_client_DOMImpl_$clinit__() , this.com_google_gwt_user_client_ui_UIObject_element).outerHTML;
}

function com_google_gwt_user_client_ui_UIObject(){
}

_ = com_google_gwt_user_client_ui_UIObject.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_UIObject_getClass__;
_.getOffsetHeight__ = com_google_gwt_user_client_ui_UIObject_getOffsetHeight__;
_.getOffsetWidth__ = com_google_gwt_user_client_ui_UIObject_getOffsetWidth__;
_.getStyleElement__ = com_google_gwt_user_client_ui_UIObject_getStyleElement__;
_.setHeight__Ljava_lang_String_2 = com_google_gwt_user_client_ui_UIObject_setHeight__Ljava_lang_String_2;
_.setWidth__Ljava_lang_String_2 = com_google_gwt_user_client_ui_UIObject_setWidth__Ljava_lang_String_2;
_.toString__$ = com_google_gwt_user_client_ui_UIObject_toString__;
_.java_lang_Object_typeId$ = 41;
_.com_google_gwt_user_client_ui_UIObject_element = null;
function com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(this$static, handler, type){
  com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2I(this$static, com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2(type.com_google_gwt_event_dom_client_DomEvent$Type_name));
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = com_google_gwt_event_shared_HandlerManager_$HandlerManager__Lcom_google_gwt_event_shared_HandlerManager_2Ljava_lang_Object_2(new com_google_gwt_event_shared_HandlerManager(), this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager, type, handler);
}

function com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2(this$static, event){
  if (this$static.com_google_gwt_user_client_ui_Widget_handlerManager) {
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2(this$static.com_google_gwt_user_client_ui_Widget_handlerManager, event);
  }
}

function com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  var bitsToAdd;
  if (this$static.isAttached__()) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), $intern_140);
  }
  this$static.com_google_gwt_user_client_ui_Widget_attached = true;
  this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = this$static;
  bitsToAdd = this$static.com_google_gwt_user_client_ui_Widget_eventsToSink;
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  if (bitsToAdd > 0) {
    com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2I(this$static, bitsToAdd);
  }
  this$static.doAttachChildren__();
  this$static.onLoad__();
}

function com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2(this$static, event){
  var related;
  switch (com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , event).type)) {
    case 16:
    case 32:
      related = event.relatedTarget;
      if (!!related && this$static.com_google_gwt_user_client_ui_UIObject_element.contains(related)) {
        return;
      }

  }
  com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2(event, this$static, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (!this$static.isAttached__()) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), $intern_141);
  }
  try {
    this$static.onUnload__();
  }
   finally {
    this$static.doDetachChildren__();
    this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = null;
    this$static.com_google_gwt_user_client_ui_Widget_attached = false;
  }
}

function com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_parent) {
    com_google_gwt_user_client_ui_RootPanel_$clinit__();
    if (java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map, this$static)) {
      this$static.onDetach__();
      java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map, this$static) != null;
    }
  }
   else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(this$static.com_google_gwt_user_client_ui_Widget_parent, 42)) {
    com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this$static.com_google_gwt_user_client_ui_Widget_parent, 42).remove__Lcom_google_gwt_user_client_ui_Widget_2(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), $intern_142);
  }
}

function com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, parent){
  var oldParent;
  oldParent = this$static.com_google_gwt_user_client_ui_Widget_parent;
  if (!parent) {
    if (!!oldParent && oldParent.isAttached__()) {
      this$static.onDetach__();
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = null;
  }
   else {
    if (oldParent) {
      throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), $intern_143);
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = parent;
    if (parent.isAttached__()) {
      this$static.onAttach__();
    }
  }
}

function com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2I(this$static, eventBitsToAdd){
  if (this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1) {
    com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2I(this$static.com_google_gwt_user_client_ui_UIObject_element, eventBitsToAdd | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0));
  }
   else {
    this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= eventBitsToAdd;
  }
}

function com_google_gwt_user_client_ui_Widget_doAttachChildren__(){
}

function com_google_gwt_user_client_ui_Widget_doDetachChildren__(){
}

function com_google_gwt_user_client_ui_Widget_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2(event){
  com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2(this, event);
}

function com_google_gwt_user_client_ui_Widget_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit;
}

function com_google_gwt_user_client_ui_Widget_isAttached__(){
  return this.com_google_gwt_user_client_ui_Widget_attached;
}

function com_google_gwt_user_client_ui_Widget_onAttach__(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2(this);
}

function com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2(event){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2(this, event);
}

function com_google_gwt_user_client_ui_Widget_onDetach__(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2(this);
}

function com_google_gwt_user_client_ui_Widget_onLoad__(){
}

function com_google_gwt_user_client_ui_Widget_onUnload__(){
}

function com_google_gwt_user_client_ui_Widget(){
}

_ = com_google_gwt_user_client_ui_Widget.prototype = new com_google_gwt_user_client_ui_UIObject();
_.doAttachChildren__ = com_google_gwt_user_client_ui_Widget_doAttachChildren__;
_.doDetachChildren__ = com_google_gwt_user_client_ui_Widget_doDetachChildren__;
_.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2 = com_google_gwt_user_client_ui_Widget_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2;
_.getClass__$ = com_google_gwt_user_client_ui_Widget_getClass__;
_.isAttached__ = com_google_gwt_user_client_ui_Widget_isAttached__;
_.onAttach__ = com_google_gwt_user_client_ui_Widget_onAttach__;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2 = com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2;
_.onDetach__ = com_google_gwt_user_client_ui_Widget_onDetach__;
_.onLoad__ = com_google_gwt_user_client_ui_Widget_onLoad__;
_.onUnload__ = com_google_gwt_user_client_ui_Widget_onUnload__;
_.java_lang_Object_typeId$ = 42;
_.com_google_gwt_user_client_ui_Widget_attached = false;
_.com_google_gwt_user_client_ui_Widget_eventsToSink = 0;
_.com_google_gwt_user_client_ui_Widget_handlerManager = null;
_.com_google_gwt_user_client_ui_Widget_parent = null;
function com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2(this$static){
  var it;
  it = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator(), this$static.com_google_gwt_user_client_ui_ComplexPanel_children);
  while (it.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < it.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size - 1) {
    com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(it);
    com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(it);
  }
}

function com_google_gwt_user_client_ui_Panel_doAttachChildren__(){
  var child, it;
  for (it = this.iterator__(); it.hasNext__();) {
    child = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 2);
    child.onAttach__();
  }
}

function com_google_gwt_user_client_ui_Panel_doDetachChildren__(){
  var child, it;
  for (it = this.iterator__(); it.hasNext__();) {
    child = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(it.next__(), 2);
    child.onDetach__();
  }
}

function com_google_gwt_user_client_ui_Panel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Panel_12_1classLit;
}

function com_google_gwt_user_client_ui_Panel_onLoad__(){
}

function com_google_gwt_user_client_ui_Panel_onUnload__(){
}

function com_google_gwt_user_client_ui_Panel(){
}

_ = com_google_gwt_user_client_ui_Panel.prototype = new com_google_gwt_user_client_ui_Widget();
_.doAttachChildren__ = com_google_gwt_user_client_ui_Panel_doAttachChildren__;
_.doDetachChildren__ = com_google_gwt_user_client_ui_Panel_doDetachChildren__;
_.getClass__$ = com_google_gwt_user_client_ui_Panel_getClass__;
_.onLoad__ = com_google_gwt_user_client_ui_Panel_onLoad__;
_.onUnload__ = com_google_gwt_user_client_ui_Panel_onUnload__;
_.java_lang_Object_typeId$ = 43;
function com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2(this$static, child, container){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(child);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
  container.appendChild(child.com_google_gwt_user_client_ui_UIObject_element);
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$adjustIndex__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, child, beforeIndex){
  var idx;
  com_google_gwt_user_client_ui_ComplexPanel_$checkIndexBoundsForInsertion__Lcom_google_gwt_user_client_ui_ComplexPanel_2I(this$static, beforeIndex);
  if (child.com_google_gwt_user_client_ui_Widget_parent == this$static) {
    idx = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
    if (idx < beforeIndex) {
      --beforeIndex;
    }
  }
  return beforeIndex;
}

function com_google_gwt_user_client_ui_ComplexPanel_$checkIndexBoundsForInsertion__Lcom_google_gwt_user_client_ui_ComplexPanel_2I(this$static, index){
  if (index < 0 || index > this$static.com_google_gwt_user_client_ui_ComplexPanel_children.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException();
  }
}

function com_google_gwt_user_client_ui_ComplexPanel_$insert__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2IZ(this$static, child, container, beforeIndex, domInsert){
  beforeIndex = com_google_gwt_user_client_ui_ComplexPanel_$adjustIndex__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, child, beforeIndex);
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(child);
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child, beforeIndex);
  if (domInsert) {
    com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2I(container, child.com_google_gwt_user_client_ui_UIObject_element, beforeIndex);
  }
   else {
    container.appendChild(child.com_google_gwt_user_client_ui_UIObject_element);
  }
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  var elem;
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(w, null);
  elem = w.com_google_gwt_user_client_ui_UIObject_element;
  com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , elem)).removeChild(elem);
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  return true;
}

function com_google_gwt_user_client_ui_ComplexPanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ComplexPanel_12_1classLit;
}

function com_google_gwt_user_client_ui_ComplexPanel_iterator__(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator(), this.com_google_gwt_user_client_ui_ComplexPanel_children);
}

function com_google_gwt_user_client_ui_ComplexPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2(w){
  return com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this, w);
}

function com_google_gwt_user_client_ui_ComplexPanel(){
}

_ = com_google_gwt_user_client_ui_ComplexPanel.prototype = new com_google_gwt_user_client_ui_Panel();
_.getClass__$ = com_google_gwt_user_client_ui_ComplexPanel_getClass__;
_.iterator__ = com_google_gwt_user_client_ui_ComplexPanel_iterator__;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_ui_ComplexPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2;
_.java_lang_Object_typeId$ = 44;
function com_google_gwt_user_client_ui_AbsolutePanel_$AbsolutePanel__Lcom_google_gwt_user_client_ui_AbsolutePanel_2(this$static){
  com_google_gwt_user_client_ui_AbsolutePanel_$AbsolutePanel__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_Element_2(this$static, (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_144));
  this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_145] = $intern_146;
  this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_18] = $intern_8;
  return this$static;
}

function com_google_gwt_user_client_ui_AbsolutePanel_$AbsolutePanel__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_Element_2(this$static, elem){
  this$static.com_google_gwt_user_client_ui_ComplexPanel_children = com_google_gwt_user_client_ui_WidgetCollection_$WidgetCollection__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_HasWidgets_2(new com_google_gwt_user_client_ui_WidgetCollection(), this$static);
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
  return this$static;
}

function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2(this$static, w, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, w, left, top){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(w);
  this$static.setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_Widget_2II(w, left, top);
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2(this$static, w, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w);
  if (removed) {
    com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element);
  }
  return removed;
}

function com_google_gwt_user_client_ui_AbsolutePanel_$setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(w, left, top){
  var h;
  h = w.com_google_gwt_user_client_ui_UIObject_element;
  if (left == -1 && top == -1) {
    com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2(h);
  }
   else {
    h.style[$intern_145] = $intern_147;
    h.style[$intern_38] = left + $intern_39;
    h.style[$intern_40] = top + $intern_39;
  }
}

function com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2(elem){
  elem.style[$intern_38] = $intern_49;
  elem.style[$intern_40] = $intern_49;
  elem.style[$intern_145] = $intern_49;
}

function com_google_gwt_user_client_ui_AbsolutePanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AbsolutePanel_12_1classLit;
}

function com_google_gwt_user_client_ui_AbsolutePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2(w){
  return com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this, w);
}

function com_google_gwt_user_client_ui_AbsolutePanel_setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_Widget_2II(w, left, top){
  com_google_gwt_user_client_ui_AbsolutePanel_$setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(w, left, top);
}

function com_google_gwt_user_client_ui_AbsolutePanel(){
}

_ = com_google_gwt_user_client_ui_AbsolutePanel.prototype = new com_google_gwt_user_client_ui_ComplexPanel();
_.getClass__$ = com_google_gwt_user_client_ui_AbsolutePanel_getClass__;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_ui_AbsolutePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2;
_.setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_Widget_2II = com_google_gwt_user_client_ui_AbsolutePanel_setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_Widget_2II;
_.java_lang_Object_typeId$ = 45;
function com_google_gwt_user_client_ui_FocusWidget_$setFocus__Lcom_google_gwt_user_client_ui_FocusWidget_2Z(this$static, focused){
  if (focused) {
    this$static.com_google_gwt_user_client_ui_UIObject_element.focus();
  }
   else {
    this$static.com_google_gwt_user_client_ui_UIObject_element.blur();
  }
}

function com_google_gwt_user_client_ui_FocusWidget_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FocusWidget_12_1classLit;
}

function com_google_gwt_user_client_ui_FocusWidget(){
}

_ = com_google_gwt_user_client_ui_FocusWidget.prototype = new com_google_gwt_user_client_ui_Widget();
_.getClass__$ = com_google_gwt_user_client_ui_FocusWidget_getClass__;
_.java_lang_Object_typeId$ = 46;
function com_google_gwt_user_client_ui_ButtonBase_$ButtonBase__Lcom_google_gwt_user_client_ui_ButtonBase_2Lcom_google_gwt_dom_client_Element_2(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
  this$static.com_google_gwt_user_client_ui_UIObject_element.tabIndex = 0;
  return this$static;
}

function com_google_gwt_user_client_ui_ButtonBase_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ButtonBase_12_1classLit;
}

function com_google_gwt_user_client_ui_ButtonBase(){
}

_ = com_google_gwt_user_client_ui_ButtonBase.prototype = new com_google_gwt_user_client_ui_FocusWidget();
_.getClass__$ = com_google_gwt_user_client_ui_ButtonBase_getClass__;
_.java_lang_Object_typeId$ = 47;
function com_google_gwt_user_client_ui_Button_$Button__Lcom_google_gwt_user_client_ui_Button_2Ljava_lang_String_2(this$static, html){
  com_google_gwt_user_client_ui_ButtonBase_$ButtonBase__Lcom_google_gwt_user_client_ui_ButtonBase_2Lcom_google_gwt_dom_client_Element_2(this$static, (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_148));
  com_google_gwt_user_client_ui_Button_adjustType__Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_UIObject_element);
  this$static.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_149;
  this$static.com_google_gwt_user_client_ui_UIObject_element.innerHTML = html || $intern_49;
  return this$static;
}

function com_google_gwt_user_client_ui_Button_adjustType__Lcom_google_gwt_dom_client_Element_2(button){
  if (button.type == $intern_150) {
    try {
      button.setAttribute($intern_151, $intern_148);
    }
     catch (e) {
    }
  }
}

function com_google_gwt_user_client_ui_Button_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Button_12_1classLit;
}

function com_google_gwt_user_client_ui_Button(){
}

_ = com_google_gwt_user_client_ui_Button.prototype = new com_google_gwt_user_client_ui_ButtonBase();
_.getClass__$ = com_google_gwt_user_client_ui_Button_getClass__;
_.java_lang_Object_typeId$ = 48;
function com_google_gwt_user_client_ui_CellPanel_$CellPanel__Lcom_google_gwt_user_client_ui_CellPanel_2(this$static){
  this$static.com_google_gwt_user_client_ui_ComplexPanel_children = com_google_gwt_user_client_ui_WidgetCollection_$WidgetCollection__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_HasWidgets_2(new com_google_gwt_user_client_ui_WidgetCollection(), this$static);
  this$static.com_google_gwt_user_client_ui_CellPanel_table = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_152);
  this$static.com_google_gwt_user_client_ui_CellPanel_body = $doc.createElement($intern_153);
  this$static.com_google_gwt_user_client_ui_CellPanel_table.appendChild(this$static.com_google_gwt_user_client_ui_CellPanel_body);
  this$static.com_google_gwt_user_client_ui_UIObject_element = this$static.com_google_gwt_user_client_ui_CellPanel_table;
  return this$static;
}

function com_google_gwt_user_client_ui_CellPanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1CellPanel_12_1classLit;
}

function com_google_gwt_user_client_ui_CellPanel(){
}

_ = com_google_gwt_user_client_ui_CellPanel.prototype = new com_google_gwt_user_client_ui_ComplexPanel();
_.getClass__$ = com_google_gwt_user_client_ui_CellPanel_getClass__;
_.java_lang_Object_typeId$ = 49;
_.com_google_gwt_user_client_ui_CellPanel_body = null;
_.com_google_gwt_user_client_ui_CellPanel_table = null;
function com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, widget){
  if (this$static.com_google_gwt_user_client_ui_Composite_widget) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), $intern_154);
  }
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(widget);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static, widget.com_google_gwt_user_client_ui_UIObject_element);
  this$static.com_google_gwt_user_client_ui_Composite_widget = widget;
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(widget, this$static);
}

function com_google_gwt_user_client_ui_Composite_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Composite_12_1classLit;
}

function com_google_gwt_user_client_ui_Composite_isAttached__(){
  if (this.com_google_gwt_user_client_ui_Composite_widget) {
    return this.com_google_gwt_user_client_ui_Composite_widget.com_google_gwt_user_client_ui_Widget_attached;
  }
  return false;
}

function com_google_gwt_user_client_ui_Composite_onAttach__(){
  if (this.com_google_gwt_user_client_ui_Widget_eventsToSink != -1) {
    com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2I(this.com_google_gwt_user_client_ui_Composite_widget, this.com_google_gwt_user_client_ui_Widget_eventsToSink);
    this.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  }
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_ui_Composite_widget);
  this.com_google_gwt_user_client_ui_UIObject_element.__listener = this;
}

function com_google_gwt_user_client_ui_Composite_onBrowserEvent__Lcom_google_gwt_user_client_Event_2(event){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2(this, event);
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2(this.com_google_gwt_user_client_ui_Composite_widget, event);
}

function com_google_gwt_user_client_ui_Composite_onDetach__(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_ui_Composite_widget);
}

function com_google_gwt_user_client_ui_Composite(){
}

_ = com_google_gwt_user_client_ui_Composite.prototype = new com_google_gwt_user_client_ui_Widget();
_.getClass__$ = com_google_gwt_user_client_ui_Composite_getClass__;
_.isAttached__ = com_google_gwt_user_client_ui_Composite_isAttached__;
_.onAttach__ = com_google_gwt_user_client_ui_Composite_onAttach__;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2 = com_google_gwt_user_client_ui_Composite_onBrowserEvent__Lcom_google_gwt_user_client_Event_2;
_.onDetach__ = com_google_gwt_user_client_ui_Composite_onDetach__;
_.java_lang_Object_typeId$ = 50;
_.com_google_gwt_user_client_ui_Composite_widget = null;
function com_google_gwt_user_client_ui_HTMLTable_$checkRowBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2I(this$static, row){
  var rowSize;
  rowSize = this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows.length;
  if (row >= rowSize || row < 0) {
    throw java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_String_2(new java_lang_IndexOutOfBoundsException(), $intern_155 + row + $intern_156 + rowSize);
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$insertRow__Lcom_google_gwt_user_client_ui_HTMLTable_2I(this$static, beforeRow){
  var tr;
  if (beforeRow != this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows.length) {
    com_google_gwt_user_client_ui_HTMLTable_$checkRowBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2I(this$static, beforeRow);
  }
  tr = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_157);
  com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2I(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, tr, beforeRow);
  return beforeRow;
}

function com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2Z(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , td));
  widget = null;
  if (maybeChild) {
    widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(com_google_gwt_user_client_impl_ElementMapperImpl_$get__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, maybeChild), 2);
  }
  if (widget) {
    com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, widget);
    return true;
  }
   else {
    if (clearInnerHTML) {
      td.innerHTML = $intern_49;
    }
    return false;
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, widget){
  var elem;
  if (widget.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(widget, null);
  elem = widget.com_google_gwt_user_client_ui_UIObject_element;
  com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , elem)).removeChild(elem);
  com_google_gwt_user_client_impl_ElementMapperImpl_$removeByElement__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, elem);
  return true;
}

function com_google_gwt_user_client_ui_HTMLTable_$removeRow__Lcom_google_gwt_user_client_ui_HTMLTable_2I(this$static, row){
  var column, columnCount, com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZ_td_0;
  columnCount = (com_google_gwt_user_client_ui_HTMLTable_$checkRowBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2I(this$static, row) , this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows[row].cells.length);
  for (column = 0; column < columnCount; ++column) {
    com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZ_td_0 = this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$0.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows[row].cells[column];
    com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2Z(this$static, com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZ_td_0, false);
  }
  this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem.removeChild(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows[row]);
}

function com_google_gwt_user_client_ui_HTMLTable_$setColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2(this$static, formatter){
  this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter = formatter;
  com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$prepareColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2(this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter);
}

function com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2(this$static, row, column, widget){
  var td, com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZ_td_0;
  com_google_gwt_user_client_ui_FlexTable_$prepareCell__Lcom_google_gwt_user_client_ui_FlexTable_2II(this$static, row, column);
  if (widget) {
    com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(widget);
    td = (com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZ_td_0 = this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$0.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows[row].cells[column] , com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2Z(this$static, com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZ_td_0, true) , com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZ_td_0);
    com_google_gwt_user_client_impl_ElementMapperImpl_$put__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_ui_UIObject_2(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, widget);
    td.appendChild(widget.com_google_gwt_user_client_ui_UIObject_element);
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(widget, this$static);
  }
}

function com_google_gwt_user_client_ui_HTMLTable_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable_12_1classLit;
}

function com_google_gwt_user_client_ui_HTMLTable_iterator__(){
  return com_google_gwt_user_client_ui_HTMLTable$1_$HTMLTable$1__Lcom_google_gwt_user_client_ui_HTMLTable$1_2(new com_google_gwt_user_client_ui_HTMLTable$1(), this);
}

function com_google_gwt_user_client_ui_HTMLTable_remove__Lcom_google_gwt_user_client_ui_Widget_2(widget){
  return com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2(this, widget);
}

function com_google_gwt_user_client_ui_HTMLTable(){
}

_ = com_google_gwt_user_client_ui_HTMLTable.prototype = new com_google_gwt_user_client_ui_Panel();
_.getClass__$ = com_google_gwt_user_client_ui_HTMLTable_getClass__;
_.iterator__ = com_google_gwt_user_client_ui_HTMLTable_iterator__;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_ui_HTMLTable_remove__Lcom_google_gwt_user_client_ui_Widget_2;
_.java_lang_Object_typeId$ = 51;
_.com_google_gwt_user_client_ui_HTMLTable_bodyElem = null;
_.com_google_gwt_user_client_ui_HTMLTable_cellFormatter = null;
_.com_google_gwt_user_client_ui_HTMLTable_columnFormatter = null;
_.com_google_gwt_user_client_ui_HTMLTable_tableElem = null;
function com_google_gwt_user_client_ui_FlexTable_$FlexTable__Lcom_google_gwt_user_client_ui_FlexTable_2(this$static){
  this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap = com_google_gwt_user_client_impl_ElementMapperImpl_$ElementMapperImpl__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2(new com_google_gwt_user_client_impl_ElementMapperImpl());
  this$static.com_google_gwt_user_client_ui_HTMLTable_tableElem = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_152);
  this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem = $doc.createElement($intern_153);
  this$static.com_google_gwt_user_client_ui_HTMLTable_tableElem.appendChild(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem);
  this$static.com_google_gwt_user_client_ui_UIObject_element = this$static.com_google_gwt_user_client_ui_HTMLTable_tableElem;
  this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter = com_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_$FlexTable$FlexCellFormatter__Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2(new com_google_gwt_user_client_ui_FlexTable$FlexCellFormatter(), this$static);
  com_google_gwt_user_client_ui_HTMLTable_$setColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2(this$static, com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$HTMLTable$ColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2(new com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter(), this$static));
  return this$static;
}

function com_google_gwt_user_client_ui_FlexTable_$prepareCell__Lcom_google_gwt_user_client_ui_FlexTable_2II(this$static, row, column){
  var cellCount, required;
  com_google_gwt_user_client_ui_FlexTable_$prepareRow__Lcom_google_gwt_user_client_ui_FlexTable_2I(this$static, row);
  if (column < 0) {
    throw java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_String_2(new java_lang_IndexOutOfBoundsException(), $intern_158 + column);
  }
  cellCount = (com_google_gwt_user_client_ui_HTMLTable_$checkRowBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2I(this$static, row) , this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows[row].cells.length);
  required = column + 1 - cellCount;
  if (required > 0) {
    com_google_gwt_user_client_ui_FlexTable_addCells__Lcom_google_gwt_user_client_Element_2II(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, row, required);
  }
}

function com_google_gwt_user_client_ui_FlexTable_$prepareRow__Lcom_google_gwt_user_client_ui_FlexTable_2I(this$static, row){
  var i, rowCount;
  if (row < 0) {
    throw java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_String_2(new java_lang_IndexOutOfBoundsException(), $intern_159 + row);
  }
  rowCount = this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows.length;
  for (i = rowCount; i <= row; ++i) {
    com_google_gwt_user_client_ui_HTMLTable_$insertRow__Lcom_google_gwt_user_client_ui_HTMLTable_2I(this$static, i);
  }
}

function com_google_gwt_user_client_ui_FlexTable_addCells__Lcom_google_gwt_user_client_Element_2II(table, row, num){
  var rowElem = table.rows[row];
  for (var i = 0; i < num; i++) {
    var cell = $doc.createElement($intern_160);
    rowElem.appendChild(cell);
  }
}

function com_google_gwt_user_client_ui_FlexTable_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FlexTable_12_1classLit;
}

function com_google_gwt_user_client_ui_FlexTable(){
}

_ = com_google_gwt_user_client_ui_FlexTable.prototype = new com_google_gwt_user_client_ui_HTMLTable();
_.getClass__$ = com_google_gwt_user_client_ui_FlexTable_getClass__;
_.java_lang_Object_typeId$ = 52;
function com_google_gwt_user_client_ui_HTMLTable$CellFormatter_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$CellFormatter_12_1classLit;
}

function com_google_gwt_user_client_ui_HTMLTable$CellFormatter(){
}

_ = com_google_gwt_user_client_ui_HTMLTable$CellFormatter.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_HTMLTable$CellFormatter_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$0 = null;
function com_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_$FlexTable$FlexCellFormatter__Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2(this$static, this$0){
  this$static.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$0 = this$0;
  return this$static;
}

function com_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FlexTable$FlexCellFormatter_12_1classLit;
}

function com_google_gwt_user_client_ui_FlexTable$FlexCellFormatter(){
}

_ = com_google_gwt_user_client_ui_FlexTable$FlexCellFormatter.prototype = new com_google_gwt_user_client_ui_HTMLTable$CellFormatter();
_.getClass__$ = com_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_user_client_ui_SimplePanel_$SimplePanel__Lcom_google_gwt_user_client_ui_SimplePanel_2(this$static){
  this$static.com_google_gwt_user_client_ui_UIObject_element = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_144);
  return this$static;
}

function com_google_gwt_user_client_ui_SimplePanel_$add__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  if (this$static.com_google_gwt_user_client_ui_SimplePanel_widget) {
    throw java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(new java_lang_IllegalStateException(), $intern_161);
  }
  com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w);
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2(this$static);
}

function com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  if (this$static.com_google_gwt_user_client_ui_SimplePanel_widget != w) {
    return false;
  }
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(w, null);
  this$static.getContainerElement__().removeChild(w.com_google_gwt_user_client_ui_UIObject_element);
  this$static.com_google_gwt_user_client_ui_SimplePanel_widget = null;
  return true;
}

function com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  if (w == this$static.com_google_gwt_user_client_ui_SimplePanel_widget) {
    return;
  }
  if (w) {
    com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(w);
  }
  if (this$static.com_google_gwt_user_client_ui_SimplePanel_widget) {
    com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, this$static.com_google_gwt_user_client_ui_SimplePanel_widget);
  }
  this$static.com_google_gwt_user_client_ui_SimplePanel_widget = w;
  if (w) {
    this$static.getContainerElement__().appendChild(this$static.com_google_gwt_user_client_ui_SimplePanel_widget.com_google_gwt_user_client_ui_UIObject_element);
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(w, this$static);
  }
}

function com_google_gwt_user_client_ui_SimplePanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel_12_1classLit;
}

function com_google_gwt_user_client_ui_SimplePanel_getContainerElement__(){
  return this.com_google_gwt_user_client_ui_UIObject_element;
}

function com_google_gwt_user_client_ui_SimplePanel_iterator__(){
  return com_google_gwt_user_client_ui_SimplePanel$1_$SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel$1_2(new com_google_gwt_user_client_ui_SimplePanel$1(), this);
}

function com_google_gwt_user_client_ui_SimplePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2(w){
  return com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this, w);
}

function com_google_gwt_user_client_ui_SimplePanel_setWidget__Lcom_google_gwt_user_client_ui_Widget_2(w){
  com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this, w);
}

function com_google_gwt_user_client_ui_SimplePanel(){
}

_ = com_google_gwt_user_client_ui_SimplePanel.prototype = new com_google_gwt_user_client_ui_Panel();
_.getClass__$ = com_google_gwt_user_client_ui_SimplePanel_getClass__;
_.getContainerElement__ = com_google_gwt_user_client_ui_SimplePanel_getContainerElement__;
_.iterator__ = com_google_gwt_user_client_ui_SimplePanel_iterator__;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_ui_SimplePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2;
_.setWidget__Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_ui_SimplePanel_setWidget__Lcom_google_gwt_user_client_ui_Widget_2;
_.java_lang_Object_typeId$ = 53;
_.com_google_gwt_user_client_ui_SimplePanel_widget = null;
function com_google_gwt_user_client_ui_FocusPanel_$FocusPanel__Lcom_google_gwt_user_client_ui_FocusPanel_2(this$static){
  this$static.com_google_gwt_user_client_ui_UIObject_element = com_google_gwt_user_client_ui_impl_FocusImpl_$createFocusable__Lcom_google_gwt_user_client_ui_impl_FocusImpl_2();
  return this$static;
}

function com_google_gwt_user_client_ui_FocusPanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FocusPanel_12_1classLit;
}

function com_google_gwt_user_client_ui_FocusPanel(){
}

_ = com_google_gwt_user_client_ui_FocusPanel.prototype = new com_google_gwt_user_client_ui_SimplePanel();
_.getClass__$ = com_google_gwt_user_client_ui_FocusPanel_getClass__;
_.java_lang_Object_typeId$ = 54;
function com_google_gwt_user_client_ui_HTMLTable$1_$HTMLTable$1__Lcom_google_gwt_user_client_ui_HTMLTable$1_2(this$static, this$0){
  this$static.com_google_gwt_user_client_ui_HTMLTable$1_this$0 = this$0;
  this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList = this$static.com_google_gwt_user_client_ui_HTMLTable$1_this$0.com_google_gwt_user_client_ui_HTMLTable_widgetMap.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList;
  com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2(this$static);
  return this$static;
}

function com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2(this$static){
  while (++this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex < this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_size) {
    if (java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList, this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex) != null) {
      return;
    }
  }
}

function com_google_gwt_user_client_ui_HTMLTable$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$1_12_1classLit;
}

function com_google_gwt_user_client_ui_HTMLTable$1_hasNext__(){
  return this.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex < this.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_size;
}

function com_google_gwt_user_client_ui_HTMLTable$1_next__(){
  var result;
  if (this.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex >= this.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_size) {
    throw new java_util_NoSuchElementException();
  }
  result = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this.com_google_gwt_user_client_ui_HTMLTable$1_widgetList, this.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex), 2);
  com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2(this);
  return result;
}

function com_google_gwt_user_client_ui_HTMLTable$1(){
}

_ = com_google_gwt_user_client_ui_HTMLTable$1.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_HTMLTable$1_getClass__;
_.hasNext__ = com_google_gwt_user_client_ui_HTMLTable$1_hasNext__;
_.next__ = com_google_gwt_user_client_ui_HTMLTable$1_next__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex = -1;
_.com_google_gwt_user_client_ui_HTMLTable$1_this$0 = null;
function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$HTMLTable$ColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2(this$static, this$0){
  this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_this$0 = this$0;
  return this$static;
}

function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$prepareColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2(this$static){
  if (!this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup) {
    this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_162);
    com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2I(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_this$0.com_google_gwt_user_client_ui_HTMLTable_tableElem, this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup, 0);
    this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup.appendChild($doc.createElement($intern_163));
  }
}

function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$ColumnFormatter_12_1classLit;
}

function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter(){
}

_ = com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup = null;
_.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_this$0 = null;
function com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__(){
  com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__ = nullMethod;
  com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_$HasHorizontalAlignment$HorizontalAlignmentConstant__Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant(), $intern_164);
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT = com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_$HasHorizontalAlignment$HorizontalAlignmentConstant__Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant(), $intern_38);
  com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_$HasHorizontalAlignment$HorizontalAlignmentConstant__Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant(), $intern_165);
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT;
}

var com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT;
function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_$HasHorizontalAlignment$HorizontalAlignmentConstant__Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2Ljava_lang_String_2(this$static, textAlignString){
  this$static.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString = textAlignString;
  return this$static;
}

function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$HorizontalAlignmentConstant_12_1classLit;
}

function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString = null;
function com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__(){
  com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__ = nullMethod;
  com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_$HasVerticalAlignment$VerticalAlignmentConstant__Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant(), $intern_166);
  com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_$HasVerticalAlignment$VerticalAlignmentConstant__Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant(), $intern_167);
  com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP = com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_$HasVerticalAlignment$VerticalAlignmentConstant__Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant(), $intern_40);
}

var com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP;
function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_$HasVerticalAlignment$VerticalAlignmentConstant__Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2Ljava_lang_String_2(this$static, verticalAlignString){
  this$static.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString = verticalAlignString;
  return this$static;
}

function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasVerticalAlignment$VerticalAlignmentConstant_12_1classLit;
}

function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString = null;
function com_google_gwt_user_client_ui_HorizontalPanel_$HorizontalPanel__Lcom_google_gwt_user_client_ui_HorizontalPanel_2(this$static){
  com_google_gwt_user_client_ui_CellPanel_$CellPanel__Lcom_google_gwt_user_client_ui_CellPanel_2(this$static);
  this$static.com_google_gwt_user_client_ui_HorizontalPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this$static.com_google_gwt_user_client_ui_HorizontalPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  this$static.com_google_gwt_user_client_ui_HorizontalPanel_tableRow = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_157);
  this$static.com_google_gwt_user_client_ui_CellPanel_body.appendChild(this$static.com_google_gwt_user_client_ui_HorizontalPanel_tableRow);
  this$static.com_google_gwt_user_client_ui_CellPanel_table[$intern_168] = $intern_114;
  this$static.com_google_gwt_user_client_ui_CellPanel_table[$intern_169] = $intern_114;
  return this$static;
}

function com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  var td;
  td = com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2(this$static);
  this$static.com_google_gwt_user_client_ui_HorizontalPanel_tableRow.appendChild(td);
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(w);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  td.appendChild(w.com_google_gwt_user_client_ui_UIObject_element);
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(w, this$static);
}

function com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2(this$static){
  var td;
  td = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_160);
  td[$intern_170] = this$static.com_google_gwt_user_client_ui_HorizontalPanel_horzAlign.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString;
  td.style[$intern_171] = this$static.com_google_gwt_user_client_ui_HorizontalPanel_vertAlign.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString;
  return td;
}

function com_google_gwt_user_client_ui_HorizontalPanel_$insert__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w, beforeIndex){
  var td;
  com_google_gwt_user_client_ui_ComplexPanel_$checkIndexBoundsForInsertion__Lcom_google_gwt_user_client_ui_ComplexPanel_2I(this$static, beforeIndex);
  td = com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2(this$static);
  com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2I(this$static.com_google_gwt_user_client_ui_HorizontalPanel_tableRow, td, beforeIndex);
  com_google_gwt_user_client_ui_ComplexPanel_$insert__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2IZ(this$static, w, td, beforeIndex, false);
}

function com_google_gwt_user_client_ui_HorizontalPanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HorizontalPanel_12_1classLit;
}

function com_google_gwt_user_client_ui_HorizontalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2(w){
  var removed, td;
  td = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , w.com_google_gwt_user_client_ui_UIObject_element));
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this, w);
  if (removed) {
    this.com_google_gwt_user_client_ui_HorizontalPanel_tableRow.removeChild(td);
  }
  return removed;
}

function com_google_gwt_user_client_ui_HorizontalPanel(){
}

_ = com_google_gwt_user_client_ui_HorizontalPanel.prototype = new com_google_gwt_user_client_ui_CellPanel();
_.getClass__$ = com_google_gwt_user_client_ui_HorizontalPanel_getClass__;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_ui_HorizontalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2;
_.java_lang_Object_typeId$ = 55;
_.com_google_gwt_user_client_ui_HorizontalPanel_tableRow = null;
function com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(this$static, text){
  this$static.com_google_gwt_user_client_ui_UIObject_element = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_144);
  this$static.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_172;
  com_google_gwt_dom_client_DOMImpl_$setInnerText__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, text);
  return this$static;
}

function com_google_gwt_user_client_ui_Label_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Label_12_1classLit;
}

function com_google_gwt_user_client_ui_Label(){
}

_ = com_google_gwt_user_client_ui_Label.prototype = new com_google_gwt_user_client_ui_Widget();
_.getClass__$ = com_google_gwt_user_client_ui_Label_getClass__;
_.java_lang_Object_typeId$ = 56;
function com_google_gwt_user_client_ui_MenuBar_$MenuBar__Lcom_google_gwt_user_client_ui_MenuBar_2Z(this$static, vertical){
  this$static.com_google_gwt_user_client_ui_MenuBar_allItems = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  this$static.com_google_gwt_user_client_ui_MenuBar_items = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  com_google_gwt_user_client_ui_MenuBar_$init__Lcom_google_gwt_user_client_ui_MenuBar_2ZLcom_google_gwt_user_client_ui_MenuBar$MenuBarImages_2(this$static, vertical, (com_google_gwt_user_client_ui_MenuBar_1MenuBarImages_1generatedBundle_$clinit__() , new com_google_gwt_user_client_ui_MenuBar_1MenuBarImages_1generatedBundle()));
  return this$static;
}

function com_google_gwt_user_client_ui_MenuBar_$addItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2(this$static, item){
  return com_google_gwt_user_client_ui_MenuBar_$insertItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2I(this$static, item, this$static.com_google_gwt_user_client_ui_MenuBar_allItems.java_util_ArrayList_size);
}

function com_google_gwt_user_client_ui_MenuBar_$addItemElement__Lcom_google_gwt_user_client_ui_MenuBar_2ILcom_google_gwt_user_client_Element_2(this$static, beforeIndex, tdElem){
  var tr;
  if (this$static.com_google_gwt_user_client_ui_MenuBar_vertical) {
    tr = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_157);
    com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2I(this$static.com_google_gwt_user_client_ui_MenuBar_body, tr, beforeIndex);
    tr.appendChild(tdElem);
  }
   else {
    tr = com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2I(this$static.com_google_gwt_user_client_ui_MenuBar_body, 0);
    com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2I(tr, tdElem, beforeIndex);
  }
}

function com_google_gwt_user_client_ui_MenuBar_$doItemAction__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2Z(this$static, item, fireCommand){
  var cmd;
  com_google_gwt_user_client_ui_MenuBar_$selectItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2(this$static, item);
  if (item) {
    if (fireCommand && !!item.com_google_gwt_user_client_ui_MenuItem_command) {
      cmd = item.com_google_gwt_user_client_ui_MenuItem_command;
      com_google_gwt_user_client_DeferredCommand_addCommand__Lcom_google_gwt_user_client_Command_2(cmd);
    }
     else {
    }
  }
}

function com_google_gwt_user_client_ui_MenuBar_$findItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_Element_2(this$static, hItem){
  var item, item$iterator;
  for (item$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this$static.com_google_gwt_user_client_ui_MenuBar_items); item$iterator.java_util_AbstractList$IteratorImpl_i < item$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    item = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(item$iterator), 40);
    if ((com_google_gwt_dom_client_DOMImpl_$clinit__() , item.com_google_gwt_user_client_ui_UIObject_element).contains(hItem)) {
      return item;
    }
  }
  return null;
}

function com_google_gwt_user_client_ui_MenuBar_$getItemContainerElement__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_MenuBar_vertical) {
    return this$static.com_google_gwt_user_client_ui_MenuBar_body;
  }
   else {
    return com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2I(this$static.com_google_gwt_user_client_ui_MenuBar_body, 0);
  }
}

function com_google_gwt_user_client_ui_MenuBar_$init__Lcom_google_gwt_user_client_ui_MenuBar_2ZLcom_google_gwt_user_client_ui_MenuBar$MenuBarImages_2(this$static, vertical){
  var outer, table, tr;
  table = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_152);
  this$static.com_google_gwt_user_client_ui_MenuBar_body = $doc.createElement($intern_153);
  table.appendChild(this$static.com_google_gwt_user_client_ui_MenuBar_body);
  if (!vertical) {
    tr = $doc.createElement($intern_157);
    this$static.com_google_gwt_user_client_ui_MenuBar_body.appendChild(tr);
  }
  this$static.com_google_gwt_user_client_ui_MenuBar_vertical = vertical;
  outer = com_google_gwt_user_client_ui_impl_FocusImpl_$createFocusable__Lcom_google_gwt_user_client_ui_impl_FocusImpl_2();
  outer.appendChild(table);
  this$static.com_google_gwt_user_client_ui_UIObject_element = outer;
  this$static.com_google_gwt_user_client_ui_UIObject_element.setAttribute($intern_173, $intern_174);
  com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2I(this$static, 2225);
  this$static.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_175;
  if (vertical) {
    com_google_gwt_user_client_ui_UIObject_$addStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, com_google_gwt_user_client_ui_UIObject_getStylePrimaryName__Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_UIObject_element) + $intern_116 + $intern_176);
  }
   else {
    com_google_gwt_user_client_ui_UIObject_$addStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, com_google_gwt_user_client_ui_UIObject_getStylePrimaryName__Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_UIObject_element) + $intern_116 + $intern_177);
  }
  this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_178] = $intern_10;
  this$static.com_google_gwt_user_client_ui_UIObject_element.setAttribute($intern_179, $intern_180);
}

function com_google_gwt_user_client_ui_MenuBar_$insertItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2I(this$static, item, beforeIndex){
  var i, itemsIndex;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_MenuBar_allItems.java_util_ArrayList_size) {
    throw new java_lang_IndexOutOfBoundsException();
  }
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_MenuBar_allItems, beforeIndex, item);
  itemsIndex = 0;
  for (i = 0; i < beforeIndex; ++i) {
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2I(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static.com_google_gwt_user_client_ui_MenuBar_allItems, i), 40)) {
      ++itemsIndex;
    }
  }
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_MenuBar_items, itemsIndex, item);
  com_google_gwt_user_client_ui_MenuBar_$addItemElement__Lcom_google_gwt_user_client_ui_MenuBar_2ILcom_google_gwt_user_client_Element_2(this$static, beforeIndex, item.com_google_gwt_user_client_ui_UIObject_element);
  com_google_gwt_user_client_ui_MenuItem_$setSelectionStyle__Lcom_google_gwt_user_client_ui_MenuItem_2Z(item, false);
  com_google_gwt_user_client_ui_MenuBar_$updateSubmenuIcon__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2(this$static, item);
  return item;
}

function com_google_gwt_user_client_ui_MenuBar_$itemOver__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2Z(this$static, item, focus){
  if (!item) {
    if (this$static.com_google_gwt_user_client_ui_MenuBar_selectedItem) {
      return;
    }
  }
  com_google_gwt_user_client_ui_MenuBar_$selectItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2(this$static, item);
  if (focus) {
    this$static.com_google_gwt_user_client_ui_UIObject_element.focus();
  }
  if (item) {
    if (this$static.com_google_gwt_user_client_ui_MenuBar_autoOpen) {
      com_google_gwt_user_client_ui_MenuBar_$doItemAction__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2Z(this$static, item, false);
    }
  }
}

function com_google_gwt_user_client_ui_MenuBar_$moveDown__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static){
  if (com_google_gwt_user_client_ui_MenuBar_$selectFirstItemIfNoneSelected__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static)) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_MenuBar_vertical) {
    com_google_gwt_user_client_ui_MenuBar_$selectNextItem__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static);
  }
   else {
  }
}

function com_google_gwt_user_client_ui_MenuBar_$moveToNextItem__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static){
  if (com_google_gwt_user_client_ui_MenuBar_$selectFirstItemIfNoneSelected__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static)) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_MenuBar_vertical) {
  }
   else {
    com_google_gwt_user_client_ui_MenuBar_$selectNextItem__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static);
  }
}

function com_google_gwt_user_client_ui_MenuBar_$moveToPrevItem__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static){
  if (com_google_gwt_user_client_ui_MenuBar_$selectFirstItemIfNoneSelected__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static)) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_MenuBar_vertical) {
  }
   else {
    com_google_gwt_user_client_ui_MenuBar_$selectPrevItem__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static);
  }
}

function com_google_gwt_user_client_ui_MenuBar_$moveUp__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static){
  if (com_google_gwt_user_client_ui_MenuBar_$selectFirstItemIfNoneSelected__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static)) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_MenuBar_vertical) {
    com_google_gwt_user_client_ui_MenuBar_$selectPrevItem__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static);
  }
   else {
  }
}

function com_google_gwt_user_client_ui_MenuBar_$selectFirstItemIfNoneSelected__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static){
  var nextItem;
  if (!this$static.com_google_gwt_user_client_ui_MenuBar_selectedItem) {
    nextItem = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static.com_google_gwt_user_client_ui_MenuBar_items, 0), 40);
    com_google_gwt_user_client_ui_MenuBar_$selectItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2(this$static, nextItem);
    return true;
  }
  return false;
}

function com_google_gwt_user_client_ui_MenuBar_$selectItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2(this$static, item){
  var td, tr;
  if (item == this$static.com_google_gwt_user_client_ui_MenuBar_selectedItem) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_MenuBar_selectedItem) {
    com_google_gwt_user_client_ui_MenuItem_$setSelectionStyle__Lcom_google_gwt_user_client_ui_MenuItem_2Z(this$static.com_google_gwt_user_client_ui_MenuBar_selectedItem, false);
    if (this$static.com_google_gwt_user_client_ui_MenuBar_vertical) {
      tr = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , this$static.com_google_gwt_user_client_ui_MenuBar_selectedItem.com_google_gwt_user_client_ui_UIObject_element));
      if (com_google_gwt_user_client_impl_DOMImplStandard_$getChildCount__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(tr) == 2) {
        td = com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2I(tr, 1);
        com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(td, $intern_181, false);
      }
    }
  }
  if (item) {
    com_google_gwt_user_client_ui_MenuItem_$setSelectionStyle__Lcom_google_gwt_user_client_ui_MenuItem_2Z(item, true);
    if (this$static.com_google_gwt_user_client_ui_MenuBar_vertical) {
      tr = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , item.com_google_gwt_user_client_ui_UIObject_element));
      if (com_google_gwt_user_client_impl_DOMImplStandard_$getChildCount__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(tr) == 2) {
        td = com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2I(tr, 1);
        com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(td, $intern_181, true);
      }
    }
    this$static.com_google_gwt_user_client_ui_UIObject_element.setAttribute($intern_182, (com_google_gwt_dom_client_DOMImpl_$clinit__() , item.com_google_gwt_user_client_ui_UIObject_element).getAttribute($intern_183) || $intern_49);
  }
  this$static.com_google_gwt_user_client_ui_MenuBar_selectedItem = item;
}

function com_google_gwt_user_client_ui_MenuBar_$selectNextItem__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static){
  var index, itemToBeSelected;
  if (!this$static.com_google_gwt_user_client_ui_MenuBar_selectedItem) {
    return;
  }
  index = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2I(this$static.com_google_gwt_user_client_ui_MenuBar_items, this$static.com_google_gwt_user_client_ui_MenuBar_selectedItem, 0);
  if (index < this$static.com_google_gwt_user_client_ui_MenuBar_items.java_util_ArrayList_size - 1) {
    itemToBeSelected = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static.com_google_gwt_user_client_ui_MenuBar_items, index + 1), 40);
  }
   else {
    itemToBeSelected = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static.com_google_gwt_user_client_ui_MenuBar_items, 0), 40);
  }
  com_google_gwt_user_client_ui_MenuBar_$selectItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2(this$static, itemToBeSelected);
}

function com_google_gwt_user_client_ui_MenuBar_$selectPrevItem__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static){
  var index, itemToBeSelected;
  if (!this$static.com_google_gwt_user_client_ui_MenuBar_selectedItem) {
    return;
  }
  index = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2I(this$static.com_google_gwt_user_client_ui_MenuBar_items, this$static.com_google_gwt_user_client_ui_MenuBar_selectedItem, 0);
  if (index > 0) {
    itemToBeSelected = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static.com_google_gwt_user_client_ui_MenuBar_items, index - 1), 40);
  }
   else {
    itemToBeSelected = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static.com_google_gwt_user_client_ui_MenuBar_items, this$static.com_google_gwt_user_client_ui_MenuBar_items.java_util_ArrayList_size - 1), 40);
  }
  com_google_gwt_user_client_ui_MenuBar_$selectItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2(this$static, itemToBeSelected);
}

function com_google_gwt_user_client_ui_MenuBar_$updateSubmenuIcon__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2(this$static, item){
  var container, idx, tdCount, tr;
  if (!this$static.com_google_gwt_user_client_ui_MenuBar_vertical) {
    return;
  }
  idx = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2I(this$static.com_google_gwt_user_client_ui_MenuBar_allItems, item, 0);
  if (idx == -1) {
    return;
  }
  container = com_google_gwt_user_client_ui_MenuBar_$getItemContainerElement__Lcom_google_gwt_user_client_ui_MenuBar_2(this$static);
  tr = com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2I(container, idx);
  tdCount = com_google_gwt_user_client_impl_DOMImplStandard_$getChildCount__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2(tr);
  if (tdCount == 2) {
    tr.removeChild(com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2I(tr, 1));
  }
  item.com_google_gwt_user_client_ui_UIObject_element[$intern_184] = 2;
}

function com_google_gwt_user_client_ui_MenuBar_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1MenuBar_12_1classLit;
}

function com_google_gwt_user_client_ui_MenuBar_onBrowserEvent__Lcom_google_gwt_user_client_Event_2(event){
  var item, keyCode;
  item = com_google_gwt_user_client_ui_MenuBar_$findItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_Element_2(this, (com_google_gwt_dom_client_DOMImpl_$clinit__() , event).target);
  switch (com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2(event.type)) {
    case 1:
      {
        this.com_google_gwt_user_client_ui_UIObject_element.focus();
        if (item) {
          com_google_gwt_user_client_ui_MenuBar_$doItemAction__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2Z(this, item, true);
        }
        break;
      }

    case 16:
      {
        if (item) {
          com_google_gwt_user_client_ui_MenuBar_$itemOver__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2Z(this, item, true);
        }
        break;
      }

    case 32:
      {
        if (item) {
          com_google_gwt_user_client_ui_MenuBar_$itemOver__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2Z(this, null, true);
        }
        break;
      }

    case 2048:
      {
        com_google_gwt_user_client_ui_MenuBar_$selectFirstItemIfNoneSelected__Lcom_google_gwt_user_client_ui_MenuBar_2(this);
        break;
      }

    case 128:
      {
        keyCode = event.which || (event.keyCode || 0);
        switch (keyCode) {
          case 37:
            {
              com_google_gwt_user_client_ui_MenuBar_$moveToPrevItem__Lcom_google_gwt_user_client_ui_MenuBar_2(this);
            }

            event.cancelBubble = true;
            event.preventDefault();
            break;
          case 39:
            {
              com_google_gwt_user_client_ui_MenuBar_$moveToNextItem__Lcom_google_gwt_user_client_ui_MenuBar_2(this);
            }

            event.cancelBubble = true;
            event.preventDefault();
            break;
          case 38:
            com_google_gwt_user_client_ui_MenuBar_$moveUp__Lcom_google_gwt_user_client_ui_MenuBar_2(this);
            event.cancelBubble = true;
            event.preventDefault();
            break;
          case 40:
            com_google_gwt_user_client_ui_MenuBar_$moveDown__Lcom_google_gwt_user_client_ui_MenuBar_2(this);
            event.cancelBubble = true;
            event.preventDefault();
            break;
          case 27:
            event.cancelBubble = true;
            event.preventDefault();
            break;
          case 13:
            if (!com_google_gwt_user_client_ui_MenuBar_$selectFirstItemIfNoneSelected__Lcom_google_gwt_user_client_ui_MenuBar_2(this)) {
              com_google_gwt_user_client_ui_MenuBar_$doItemAction__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2Z(this, this.com_google_gwt_user_client_ui_MenuBar_selectedItem, true);
              event.cancelBubble = true;
              event.preventDefault();
            }

        }
        break;
      }

  }
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2(this, event);
}

function com_google_gwt_user_client_ui_MenuBar_onDetach__(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2(this);
}

function com_google_gwt_user_client_ui_MenuBar(){
}

_ = com_google_gwt_user_client_ui_MenuBar.prototype = new com_google_gwt_user_client_ui_Widget();
_.getClass__$ = com_google_gwt_user_client_ui_MenuBar_getClass__;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2 = com_google_gwt_user_client_ui_MenuBar_onBrowserEvent__Lcom_google_gwt_user_client_Event_2;
_.onDetach__ = com_google_gwt_user_client_ui_MenuBar_onDetach__;
_.java_lang_Object_typeId$ = 57;
_.com_google_gwt_user_client_ui_MenuBar_autoOpen = false;
_.com_google_gwt_user_client_ui_MenuBar_body = null;
_.com_google_gwt_user_client_ui_MenuBar_selectedItem = null;
_.com_google_gwt_user_client_ui_MenuBar_vertical = false;
function com_google_gwt_user_client_ui_MenuBar_1MenuBarImages_1generatedBundle_$clinit__(){
  com_google_gwt_user_client_ui_MenuBar_1MenuBarImages_1generatedBundle_$clinit__ = nullMethod;
}

function com_google_gwt_user_client_ui_MenuBar_1MenuBarImages_1generatedBundle_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1MenuBar_11MenuBarImages_11generatedBundle_12_1classLit;
}

function com_google_gwt_user_client_ui_MenuBar_1MenuBarImages_1generatedBundle(){
}

_ = com_google_gwt_user_client_ui_MenuBar_1MenuBarImages_1generatedBundle.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_MenuBar_1MenuBarImages_1generatedBundle_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_user_client_ui_MenuItem_$MenuItem__Lcom_google_gwt_user_client_ui_MenuItem_2Ljava_lang_String_2Lcom_google_gwt_user_client_Command_2(this$static, text, cmd){
  com_google_gwt_user_client_ui_MenuItem_$MenuItem__Lcom_google_gwt_user_client_ui_MenuItem_2Ljava_lang_String_2Z(this$static, text, false);
  this$static.com_google_gwt_user_client_ui_MenuItem_command = cmd;
  return this$static;
}

function com_google_gwt_user_client_ui_MenuItem_$MenuItem__Lcom_google_gwt_user_client_ui_MenuItem_2Ljava_lang_String_2Z(this$static, text, asHTML){
  this$static.com_google_gwt_user_client_ui_UIObject_element = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_160);
  com_google_gwt_user_client_ui_MenuItem_$setSelectionStyle__Lcom_google_gwt_user_client_ui_MenuItem_2Z(this$static, false);
  if (asHTML) {
    this$static.com_google_gwt_user_client_ui_UIObject_element.innerHTML = text || $intern_49;
  }
   else {
    com_google_gwt_dom_client_DOMImpl_$setInnerText__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_UIObject_element, text);
  }
  this$static.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_185;
  this$static.com_google_gwt_user_client_ui_UIObject_element.setAttribute($intern_183, com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2($doc));
  this$static.com_google_gwt_user_client_ui_UIObject_element.setAttribute($intern_173, $intern_186);
  return this$static;
}

function com_google_gwt_user_client_ui_MenuItem_$setSelectionStyle__Lcom_google_gwt_user_client_ui_MenuItem_2Z(this$static, selected){
  if (selected) {
    com_google_gwt_user_client_ui_UIObject_$addStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, com_google_gwt_user_client_ui_UIObject_getStylePrimaryName__Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_UIObject_element) + $intern_116 + $intern_187);
  }
   else {
    com_google_gwt_user_client_ui_UIObject_$removeStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2(this$static, com_google_gwt_user_client_ui_UIObject_getStylePrimaryName__Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_UIObject_element) + $intern_116 + $intern_187);
  }
}

function com_google_gwt_user_client_ui_MenuItem_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1MenuItem_12_1classLit;
}

function com_google_gwt_user_client_ui_MenuItem(){
}

_ = com_google_gwt_user_client_ui_MenuItem.prototype = new com_google_gwt_user_client_ui_UIObject();
_.getClass__$ = com_google_gwt_user_client_ui_MenuItem_getClass__;
_.java_lang_Object_typeId$ = 58;
_.com_google_gwt_user_client_ui_MenuItem_command = null;
function com_google_gwt_user_client_ui_PopupPanel_$PopupPanel__Lcom_google_gwt_user_client_ui_PopupPanel_2ZZ(this$static, autoHide, modal){
  this$static.com_google_gwt_user_client_ui_UIObject_element = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_144);
  this$static.com_google_gwt_user_client_ui_PopupPanel_animType = (com_google_gwt_user_client_ui_PopupPanel$AnimationType_$clinit__() , com_google_gwt_user_client_ui_PopupPanel$AnimationType_CENTER);
  this$static.com_google_gwt_user_client_ui_PopupPanel_resizeAnimation = com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$PopupPanel$ResizeAnimation__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2Lcom_google_gwt_user_client_ui_PopupPanel_2(new com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation(), this$static);
  this$static.com_google_gwt_user_client_ui_UIObject_element.appendChild($doc.createElement($intern_144));
  com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2II(this$static, 0, 0);
  com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_UIObject_element))[$intern_133] = $intern_188;
  com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_UIObject_element)[$intern_133] = $intern_189;
  this$static.com_google_gwt_user_client_ui_PopupPanel_autoHide = autoHide;
  this$static.com_google_gwt_user_client_ui_PopupPanel_modal = modal;
  return this$static;
}

function com_google_gwt_user_client_ui_PopupPanel_$blur__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_dom_client_Element_2(elt){
  if (elt.blur && elt != $doc.body) {
    elt.blur();
  }
}

function com_google_gwt_user_client_ui_PopupPanel_$eventTargetsPopup__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_dom_client_NativeEvent_2(this$static, event){
  var target;
  target = (com_google_gwt_dom_client_DOMImpl_$clinit__() , event).target;
  if (com_google_gwt_dom_client_Element_is__Lcom_google_gwt_core_client_JavaScriptObject_2(target)) {
    return this$static.com_google_gwt_user_client_ui_UIObject_element.contains(target);
  }
  return false;
}

function com_google_gwt_user_client_ui_PopupPanel_$hide__Lcom_google_gwt_user_client_ui_PopupPanel_2Z(this$static){
  if (!this$static.com_google_gwt_user_client_ui_PopupPanel_showing) {
    return;
  }
  com_google_gwt_user_client_ui_PopupPanel_$setState__Lcom_google_gwt_user_client_ui_PopupPanel_2ZZ(this$static, false, true);
  com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2Z(this$static);
}

function com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2(this$static){
  var w;
  w = this$static.com_google_gwt_user_client_ui_SimplePanel_widget;
  if (w) {
    if (this$static.com_google_gwt_user_client_ui_PopupPanel_desiredHeight != null) {
      w.setHeight__Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_PopupPanel_desiredHeight);
    }
    if (this$static.com_google_gwt_user_client_ui_PopupPanel_desiredWidth != null) {
      w.setWidth__Ljava_lang_String_2(this$static.com_google_gwt_user_client_ui_PopupPanel_desiredWidth);
    }
  }
}

function com_google_gwt_user_client_ui_PopupPanel_$position__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_ui_UIObject_2II(this$static, relativeObject, offsetWidth, offsetHeight){
  var distanceFromWindowLeft, distanceFromWindowTop, distanceToWindowBottom, distanceToWindowRight, left, offsetWidthDiff, textBoxOffsetWidth, top, windowBottom, windowLeft, windowRight, windowTop;
  textBoxOffsetWidth = parseInt(relativeObject.com_google_gwt_user_client_ui_UIObject_element[$intern_16]) || 0;
  offsetWidthDiff = offsetWidth - textBoxOffsetWidth;
  left = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , relativeObject.com_google_gwt_user_client_ui_UIObject_element));
  if (offsetWidthDiff > 0) {
    windowRight = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2($doc) + com_google_gwt_dom_client_DOMImpl_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2($doc);
    windowLeft = com_google_gwt_dom_client_DOMImpl_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2($doc);
    distanceToWindowRight = windowRight - left;
    distanceFromWindowLeft = left - windowLeft;
    if (distanceToWindowRight < offsetWidth && distanceFromWindowLeft >= offsetWidthDiff) {
      left -= offsetWidthDiff;
    }
  }
  top = com_google_gwt_dom_client_DOMImplOpera_$getAbsoluteTop__Lcom_google_gwt_dom_client_DOMImplOpera_2Lcom_google_gwt_dom_client_Element_2(relativeObject.com_google_gwt_user_client_ui_UIObject_element);
  windowTop = com_google_gwt_dom_client_DOMImpl_$getScrollTop__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2($doc);
  windowBottom = com_google_gwt_dom_client_DOMImpl_$getScrollTop__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2($doc) + com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2($doc);
  distanceFromWindowTop = top - windowTop;
  distanceToWindowBottom = windowBottom - (top + (parseInt(relativeObject.com_google_gwt_user_client_ui_UIObject_element[$intern_17]) || 0));
  if (distanceToWindowBottom < offsetHeight && distanceFromWindowTop >= offsetHeight) {
    top -= offsetHeight;
  }
   else {
    top += parseInt(relativeObject.com_google_gwt_user_client_ui_UIObject_element[$intern_17]) || 0;
  }
  com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2II(this$static, left, top);
}

function com_google_gwt_user_client_ui_PopupPanel_$previewNativeEvent__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_Event$NativePreviewEvent_2(this$static, event){
  var eventTargetsPopupOrPartner, nativeEvent, target, type;
  if (event.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled || !this$static.com_google_gwt_user_client_ui_PopupPanel_previewAllNativeEvents && event.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed) {
    if (this$static.com_google_gwt_user_client_ui_PopupPanel_modal) {
      event.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true;
    }
    return;
  }
  if (event.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled) {
    return;
  }
  nativeEvent = event.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent;
  eventTargetsPopupOrPartner = com_google_gwt_user_client_ui_PopupPanel_$eventTargetsPopup__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_dom_client_NativeEvent_2(this$static, nativeEvent);
  if (eventTargetsPopupOrPartner) {
    event.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = true;
  }
  if (this$static.com_google_gwt_user_client_ui_PopupPanel_modal) {
    event.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true;
  }
  type = com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , nativeEvent).type);
  switch (type) {
    case 128:
      {
        (nativeEvent.which || (nativeEvent.keyCode || 0)) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 512:
      {
        (nativeEvent.which || (nativeEvent.keyCode || 0)) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 256:
      {
        (nativeEvent.which || (nativeEvent.keyCode || 0)) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 4:
      if (com_google_gwt_user_client_DOM_sCaptureElem) {
        event.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = true;
        return;
      }

      if (!eventTargetsPopupOrPartner && this$static.com_google_gwt_user_client_ui_PopupPanel_autoHide) {
        com_google_gwt_user_client_ui_PopupPanel_$hide__Lcom_google_gwt_user_client_ui_PopupPanel_2Z(this$static);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
      {
        if (com_google_gwt_user_client_DOM_sCaptureElem) {
          event.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.target;
        if (this$static.com_google_gwt_user_client_ui_PopupPanel_modal && !eventTargetsPopupOrPartner && !!target) {
          com_google_gwt_user_client_ui_PopupPanel_$blur__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_dom_client_Element_2(target);
          event.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true;
          return;
        }
        break;
      }

  }
}

function com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2II(this$static, left, top){
  var elem;
  this$static.com_google_gwt_user_client_ui_PopupPanel_leftPosition = left;
  this$static.com_google_gwt_user_client_ui_PopupPanel_topPosition = top;
  left -= com_google_gwt_dom_client_Document_$getBodyOffsetLeft__Lcom_google_gwt_dom_client_Document_2($doc);
  top -= com_google_gwt_dom_client_Document_$getBodyOffsetTop__Lcom_google_gwt_dom_client_Document_2($doc);
  elem = this$static.com_google_gwt_user_client_ui_UIObject_element;
  elem.style[$intern_38] = left + $intern_39;
  elem.style[$intern_40] = top + $intern_39;
}

function com_google_gwt_user_client_ui_PopupPanel_$setPopupPositionAndShow__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_ui_PopupPanel$PositionCallback_2(this$static, callback){
  this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_7] = $intern_8;
  com_google_gwt_user_client_ui_PopupPanel_$show__Lcom_google_gwt_user_client_ui_PopupPanel_2(this$static);
  com_google_gwt_user_client_ui_PopupPanel$1_$setPosition__Lcom_google_gwt_user_client_ui_PopupPanel$1_2II(callback, parseInt(this$static.com_google_gwt_user_client_ui_UIObject_element[$intern_16]) || 0, parseInt(this$static.com_google_gwt_user_client_ui_UIObject_element[$intern_17]) || 0);
  this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_7] = $intern_19;
}

function com_google_gwt_user_client_ui_PopupPanel_$setState__Lcom_google_gwt_user_client_ui_PopupPanel_2ZZ(this$static, showing, maybeAnimate){
  if (maybeAnimate) {
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$setState__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2Z(this$static.com_google_gwt_user_client_ui_PopupPanel_resizeAnimation, showing);
  }
   else {
    com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2(this$static.com_google_gwt_user_client_ui_PopupPanel_resizeAnimation);
  }
  this$static.com_google_gwt_user_client_ui_PopupPanel_showing = showing;
  if (showing) {
    this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration = com_google_gwt_user_client_Event_addNativePreviewHandler__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2(com_google_gwt_user_client_ui_PopupPanel$2_$PopupPanel$2__Lcom_google_gwt_user_client_ui_PopupPanel$2_2(new com_google_gwt_user_client_ui_PopupPanel$2(), this$static));
  }
   else if (this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration) {
    com_google_gwt_event_shared_DefaultHandlerRegistration_$removeHandler__Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2(this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration);
    this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration = null;
  }
}

function com_google_gwt_user_client_ui_PopupPanel_$show__Lcom_google_gwt_user_client_ui_PopupPanel_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_PopupPanel_showing) {
    return;
  }
  com_google_gwt_user_client_ui_PopupPanel_$setState__Lcom_google_gwt_user_client_ui_PopupPanel_2ZZ(this$static, true, true);
}

function com_google_gwt_user_client_ui_PopupPanel_$showRelativeTo__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_ui_UIObject_2(this$static, target){
  com_google_gwt_user_client_ui_PopupPanel_$setPopupPositionAndShow__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_ui_PopupPanel$PositionCallback_2(this$static, com_google_gwt_user_client_ui_PopupPanel$1_$PopupPanel$1__Lcom_google_gwt_user_client_ui_PopupPanel$1_2(new com_google_gwt_user_client_ui_PopupPanel$1(), this$static, target));
}

function com_google_gwt_user_client_ui_PopupPanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel_12_1classLit;
}

function com_google_gwt_user_client_ui_PopupPanel_getContainerElement__(){
  return com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , this.com_google_gwt_user_client_ui_UIObject_element));
}

function com_google_gwt_user_client_ui_PopupPanel_getOffsetHeight__(){
  return parseInt(this.com_google_gwt_user_client_ui_UIObject_element[$intern_17]) || 0;
}

function com_google_gwt_user_client_ui_PopupPanel_getOffsetWidth__(){
  return parseInt(this.com_google_gwt_user_client_ui_UIObject_element[$intern_16]) || 0;
}

function com_google_gwt_user_client_ui_PopupPanel_getStyleElement__(){
  return com_google_gwt_user_client_ui_impl_PopupImpl_$getStyleElement__Lcom_google_gwt_user_client_ui_impl_PopupImpl_2Lcom_google_gwt_user_client_Element_2(com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , this.com_google_gwt_user_client_ui_UIObject_element)));
}

function com_google_gwt_user_client_ui_PopupPanel_onUnload__(){
  if (this.com_google_gwt_user_client_ui_PopupPanel_showing) {
    com_google_gwt_user_client_ui_PopupPanel_$setState__Lcom_google_gwt_user_client_ui_PopupPanel_2ZZ(this, false, false);
  }
}

function com_google_gwt_user_client_ui_PopupPanel_setHeight__Ljava_lang_String_2(height){
  this.com_google_gwt_user_client_ui_PopupPanel_desiredHeight = height;
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2(this);
  if (height.length == 0) {
    this.com_google_gwt_user_client_ui_PopupPanel_desiredHeight = null;
  }
}

function com_google_gwt_user_client_ui_PopupPanel_setWidget__Lcom_google_gwt_user_client_ui_Widget_2(w){
  com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2(this, w);
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2(this);
}

function com_google_gwt_user_client_ui_PopupPanel_setWidth__Ljava_lang_String_2(width){
  this.com_google_gwt_user_client_ui_PopupPanel_desiredWidth = width;
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2(this);
  if (width.length == 0) {
    this.com_google_gwt_user_client_ui_PopupPanel_desiredWidth = null;
  }
}

function com_google_gwt_user_client_ui_PopupPanel(){
}

_ = com_google_gwt_user_client_ui_PopupPanel.prototype = new com_google_gwt_user_client_ui_SimplePanel();
_.getClass__$ = com_google_gwt_user_client_ui_PopupPanel_getClass__;
_.getContainerElement__ = com_google_gwt_user_client_ui_PopupPanel_getContainerElement__;
_.getOffsetHeight__ = com_google_gwt_user_client_ui_PopupPanel_getOffsetHeight__;
_.getOffsetWidth__ = com_google_gwt_user_client_ui_PopupPanel_getOffsetWidth__;
_.getStyleElement__ = com_google_gwt_user_client_ui_PopupPanel_getStyleElement__;
_.onUnload__ = com_google_gwt_user_client_ui_PopupPanel_onUnload__;
_.setHeight__Ljava_lang_String_2 = com_google_gwt_user_client_ui_PopupPanel_setHeight__Ljava_lang_String_2;
_.setWidget__Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_ui_PopupPanel_setWidget__Lcom_google_gwt_user_client_ui_Widget_2;
_.setWidth__Ljava_lang_String_2 = com_google_gwt_user_client_ui_PopupPanel_setWidth__Ljava_lang_String_2;
_.java_lang_Object_typeId$ = 59;
_.com_google_gwt_user_client_ui_PopupPanel_autoHide = false;
_.com_google_gwt_user_client_ui_PopupPanel_desiredHeight = null;
_.com_google_gwt_user_client_ui_PopupPanel_desiredWidth = null;
_.com_google_gwt_user_client_ui_PopupPanel_leftPosition = -1;
_.com_google_gwt_user_client_ui_PopupPanel_modal = false;
_.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration = null;
_.com_google_gwt_user_client_ui_PopupPanel_previewAllNativeEvents = false;
_.com_google_gwt_user_client_ui_PopupPanel_showing = false;
_.com_google_gwt_user_client_ui_PopupPanel_topPosition = -1;
function com_google_gwt_user_client_ui_PopupPanel$1_$PopupPanel$1__Lcom_google_gwt_user_client_ui_PopupPanel$1_2(this$static, this$0, val$target){
  this$static.com_google_gwt_user_client_ui_PopupPanel$1_this$0 = this$0;
  this$static.com_google_gwt_user_client_ui_PopupPanel$1_val$target = val$target;
  return this$static;
}

function com_google_gwt_user_client_ui_PopupPanel$1_$setPosition__Lcom_google_gwt_user_client_ui_PopupPanel$1_2II(this$static, offsetWidth, offsetHeight){
  com_google_gwt_user_client_ui_PopupPanel_$position__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_ui_UIObject_2II(this$static.com_google_gwt_user_client_ui_PopupPanel$1_this$0, this$static.com_google_gwt_user_client_ui_PopupPanel$1_val$target, offsetWidth, offsetHeight);
}

function com_google_gwt_user_client_ui_PopupPanel$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$1_12_1classLit;
}

function com_google_gwt_user_client_ui_PopupPanel$1(){
}

_ = com_google_gwt_user_client_ui_PopupPanel$1.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_PopupPanel$1_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_PopupPanel$1_this$0 = null;
_.com_google_gwt_user_client_ui_PopupPanel$1_val$target = null;
function com_google_gwt_user_client_ui_PopupPanel$2_$PopupPanel$2__Lcom_google_gwt_user_client_ui_PopupPanel$2_2(this$static, this$0){
  this$static.com_google_gwt_user_client_ui_PopupPanel$2_this$0 = this$0;
  return this$static;
}

function com_google_gwt_user_client_ui_PopupPanel$2_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$2_12_1classLit;
}

function com_google_gwt_user_client_ui_PopupPanel$2(){
}

_ = com_google_gwt_user_client_ui_PopupPanel$2.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_PopupPanel$2_getClass__;
_.java_lang_Object_typeId$ = 60;
_.com_google_gwt_user_client_ui_PopupPanel$2_this$0 = null;
function java_lang_Enum_compareTo__Ljava_lang_Enum_2(other){
  return this.java_lang_Enum_ordinal - other.java_lang_Enum_ordinal;
}

function java_lang_Enum_equals__Ljava_lang_Object_2(other){
  return this === (other == null?null:other);
}

function java_lang_Enum_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Enum_12_1classLit;
}

function java_lang_Enum_hashCode__(){
  return this.$H || (this.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}

function java_lang_Enum_toString__(){
  return this.java_lang_Enum_name;
}

function java_lang_Enum_valueOf__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(map, name){
  var result;
  result = map[$intern_190 + name];
  if (!result) {
    throw java_lang_IllegalArgumentException_$IllegalArgumentException__Ljava_lang_IllegalArgumentException_2Ljava_lang_String_2(new java_lang_IllegalArgumentException(), name);
  }
  return result;
}

function java_lang_Enum(){
}

_ = java_lang_Enum.prototype = new java_lang_Object();
_.compareTo__Ljava_lang_Object_2$ = java_lang_Enum_compareTo__Ljava_lang_Enum_2;
_.equals__Ljava_lang_Object_2$ = java_lang_Enum_equals__Ljava_lang_Object_2;
_.getClass__$ = java_lang_Enum_getClass__;
_.hashCode__$ = java_lang_Enum_hashCode__;
_.toString__$ = java_lang_Enum_toString__;
_.java_lang_Object_typeId$ = 61;
_.java_lang_Enum_name = null;
_.java_lang_Enum_ordinal = 0;
function com_google_gwt_user_client_ui_PopupPanel$AnimationType_$clinit__(){
  com_google_gwt_user_client_ui_PopupPanel$AnimationType_$clinit__ = nullMethod;
  com_google_gwt_user_client_ui_PopupPanel$AnimationType_CENTER = com_google_gwt_user_client_ui_PopupPanel$AnimationType_$PopupPanel$AnimationType__Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2Ljava_lang_String_2I(new com_google_gwt_user_client_ui_PopupPanel$AnimationType(), $intern_191, 0);
  com_google_gwt_user_client_ui_PopupPanel$AnimationType_$PopupPanel$AnimationType__Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2Ljava_lang_String_2I(new com_google_gwt_user_client_ui_PopupPanel$AnimationType(), $intern_192, 1);
  com_google_gwt_user_client_ui_PopupPanel$AnimationType_$PopupPanel$AnimationType__Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2Ljava_lang_String_2I(new com_google_gwt_user_client_ui_PopupPanel$AnimationType(), $intern_193, 2);
}

function com_google_gwt_user_client_ui_PopupPanel$AnimationType_$PopupPanel$AnimationType__Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2Ljava_lang_String_2I(this$static, enum$name, enum$ordinal){
  com_google_gwt_user_client_ui_PopupPanel$AnimationType_$clinit__();
  this$static.java_lang_Enum_name = enum$name;
  this$static.java_lang_Enum_ordinal = enum$ordinal;
  return this$static;
}

function com_google_gwt_user_client_ui_PopupPanel$AnimationType_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$AnimationType_12_1classLit;
}

function com_google_gwt_user_client_ui_PopupPanel$AnimationType(){
}

_ = com_google_gwt_user_client_ui_PopupPanel$AnimationType.prototype = new java_lang_Enum();
_.getClass__$ = com_google_gwt_user_client_ui_PopupPanel$AnimationType_getClass__;
_.java_lang_Object_typeId$ = 62;
var com_google_gwt_user_client_ui_PopupPanel$AnimationType_CENTER;
function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$PopupPanel$ResizeAnimation__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2Lcom_google_gwt_user_client_ui_PopupPanel_2(this$static, panel){
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel = panel;
  return this$static;
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onComplete__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2(this$static){
  if (!this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing) {
    com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2((com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null)), this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
  }
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style[$intern_194] = $intern_195;
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style[$intern_18] = $intern_19;
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onInstantaneousRun__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing) {
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style[$intern_145] = $intern_147;
    if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_topPosition != -1) {
      com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2II(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_leftPosition, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_topPosition);
    }
    com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2((com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null)), this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
  }
   else {
    com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2((com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null)), this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
  }
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style[$intern_18] = $intern_19;
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onUpdate__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2D(this$static, progress){
  var bottom, height, left, right, top, width;
  if (!this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing) {
    progress = 1 - progress;
  }
  top = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = ~~Math.max(Math.min(progress * this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight, 2147483647), -2147483648);
  width = ~~Math.max(Math.min(progress * this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth, 2147483647), -2147483648);
  switch (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_animType.java_lang_Enum_ordinal) {
    case 2:
      right = this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth;
      bottom = height;
      break;
    case 0:
      top = this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight - height >> 1;
      left = this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth - width >> 1;
      right = left + width;
      bottom = top + height;
      break;
    case 1:
      right = left + width;
      bottom = top + height;
  }
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style[$intern_194] = $intern_196 + top + $intern_197 + right + $intern_197 + bottom + $intern_197 + left + $intern_198;
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$setState__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2Z(this$static, showing){
  var animate;
  com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2(this$static);
  animate = false;
  if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_animType != (com_google_gwt_user_client_ui_PopupPanel$AnimationType_$clinit__() , com_google_gwt_user_client_ui_PopupPanel$AnimationType_CENTER) && !showing) {
    animate = false;
  }
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing = showing;
  if (animate) {
    if (showing) {
      this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style[$intern_145] = $intern_147;
      if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_topPosition != -1) {
        com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2II(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_leftPosition, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_topPosition);
      }
      this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_UIObject_element.style[$intern_194] = $intern_199;
      com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2((com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null)), this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
    }
    com_google_gwt_user_client_DeferredCommand_addCommand__Lcom_google_gwt_user_client_Command_2(com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_$PopupPanel$ResizeAnimation$1__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2(new com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1(), this$static));
  }
   else {
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onInstantaneousRun__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2(this$static);
  }
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$ResizeAnimation_12_1classLit;
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation(){
}

_ = com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation.prototype = new com_google_gwt_animation_client_Animation();
_.getClass__$ = com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_getClass__;
_.java_lang_Object_typeId$ = 63;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel = null;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight = 0;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth = -1;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing = false;
function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_$PopupPanel$ResizeAnimation$1__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2(this$static, this$1){
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_this$1 = this$1;
  return this$static;
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_execute__(){
  com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2ID(this.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_this$1, 200, (new Date()).getTime());
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$ResizeAnimation$1_12_1classLit;
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1(){
}

_ = com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1.prototype = new java_lang_Object();
_.execute__ = com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_execute__;
_.getClass__$ = com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_getClass__;
_.java_lang_Object_typeId$ = 64;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_this$1 = null;
function com_google_gwt_user_client_ui_RootPanel_$clinit__(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__ = nullMethod;
  com_google_gwt_user_client_ui_RootPanel_rootPanels = java_util_HashMap_$HashMap__Ljava_util_HashMap_2(new java_util_HashMap());
  com_google_gwt_user_client_ui_RootPanel_widgetsToDetach = java_util_HashSet_$HashSet__Ljava_util_HashSet_2(new java_util_HashSet());
}

function com_google_gwt_user_client_ui_RootPanel_$RootPanel__Lcom_google_gwt_user_client_ui_RootPanel_2Lcom_google_gwt_dom_client_Element_2(this$static, elem){
  com_google_gwt_user_client_ui_RootPanel_$clinit__();
  this$static.com_google_gwt_user_client_ui_ComplexPanel_children = com_google_gwt_user_client_ui_WidgetCollection_$WidgetCollection__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_HasWidgets_2(new com_google_gwt_user_client_ui_WidgetCollection(), this$static);
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2(this$static);
  return this$static;
}

function com_google_gwt_user_client_ui_RootPanel_detachWidgets__(){
  var java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0, java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2_entry_0;
  com_google_gwt_user_client_ui_RootPanel_$clinit__();
  var widget, widget$iterator;
  for (widget$iterator = (java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0 = java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2(new java_util_AbstractHashMap$EntrySetIterator(), java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map).java_util_AbstractMap$1_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0) , java_util_AbstractMap$1$1_$AbstractMap$1$1__Ljava_util_AbstractMap$1$1_2(new java_util_AbstractMap$1$1(), java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0)); java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2(widget$iterator.java_util_AbstractMap$1$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter);) {
    widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I((java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2_entry_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(widget$iterator.java_util_AbstractMap$1$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter), 49) , java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2_entry_0.getKey__()), 2);
    if (widget.isAttached__()) {
      widget.onDetach__();
    }
  }
  java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map);
  java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2(com_google_gwt_user_client_ui_RootPanel_rootPanels);
}

function com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(id){
  com_google_gwt_user_client_ui_RootPanel_$clinit__();
  var rp;
  rp = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, id), 41);
  if (rp) {
    return rp;
  }
  if (com_google_gwt_user_client_ui_RootPanel_rootPanels.java_util_AbstractHashMap_size == 0) {
    com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2(new com_google_gwt_user_client_ui_RootPanel$1());
  }
  rp = com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_$RootPanel$DefaultRootPanel__Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2(new com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel());
  java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, id, rp);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, rp);
  return rp;
}

function com_google_gwt_user_client_ui_RootPanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel_12_1classLit;
}

function com_google_gwt_user_client_ui_RootPanel(){
}

_ = com_google_gwt_user_client_ui_RootPanel.prototype = new com_google_gwt_user_client_ui_AbsolutePanel();
_.getClass__$ = com_google_gwt_user_client_ui_RootPanel_getClass__;
_.java_lang_Object_typeId$ = 65;
var com_google_gwt_user_client_ui_RootPanel_rootPanels, com_google_gwt_user_client_ui_RootPanel_widgetsToDetach;
function com_google_gwt_user_client_ui_RootPanel$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$1_12_1classLit;
}

function com_google_gwt_user_client_ui_RootPanel$1_onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2(closeEvent){
  com_google_gwt_user_client_ui_RootPanel_detachWidgets__();
}

function com_google_gwt_user_client_ui_RootPanel$1(){
}

_ = com_google_gwt_user_client_ui_RootPanel$1.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_RootPanel$1_getClass__;
_.onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2 = com_google_gwt_user_client_ui_RootPanel$1_onClose__Lcom_google_gwt_event_logical_shared_CloseEvent_2;
_.java_lang_Object_typeId$ = 66;
function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_$clinit__(){
  com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_$clinit__ = nullMethod;
  com_google_gwt_user_client_ui_RootPanel_$clinit__();
}

function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_$RootPanel$DefaultRootPanel__Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2(this$static){
  com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_$clinit__();
  com_google_gwt_user_client_ui_RootPanel_$RootPanel__Lcom_google_gwt_user_client_ui_RootPanel_2Lcom_google_gwt_dom_client_Element_2(this$static, $doc.body);
  return this$static;
}

function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$DefaultRootPanel_12_1classLit;
}

function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_Widget_2II(w, left, top){
  left -= com_google_gwt_dom_client_Document_$getBodyOffsetLeft__Lcom_google_gwt_dom_client_Document_2($doc);
  top -= com_google_gwt_dom_client_Document_$getBodyOffsetTop__Lcom_google_gwt_dom_client_Document_2($doc);
  com_google_gwt_user_client_ui_AbsolutePanel_$setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2II(w, left, top);
}

function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel(){
}

_ = com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel.prototype = new com_google_gwt_user_client_ui_RootPanel();
_.getClass__$ = com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_getClass__;
_.setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_Widget_2II = com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_setWidgetPositionImpl__Lcom_google_gwt_user_client_ui_Widget_2II;
_.java_lang_Object_typeId$ = 67;
function com_google_gwt_user_client_ui_SimplePanel$1_$SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel$1_2(this$static, this$0){
  this$static.com_google_gwt_user_client_ui_SimplePanel$1_this$0 = this$0;
  this$static.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = !!this$static.com_google_gwt_user_client_ui_SimplePanel$1_this$0.com_google_gwt_user_client_ui_SimplePanel_widget;
  return this$static;
}

function com_google_gwt_user_client_ui_SimplePanel$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel$1_12_1classLit;
}

function com_google_gwt_user_client_ui_SimplePanel$1_hasNext__(){
  return this.com_google_gwt_user_client_ui_SimplePanel$1_hasElement;
}

function com_google_gwt_user_client_ui_SimplePanel$1_next__(){
  if (!this.com_google_gwt_user_client_ui_SimplePanel$1_hasElement || !this.com_google_gwt_user_client_ui_SimplePanel$1_this$0.com_google_gwt_user_client_ui_SimplePanel_widget) {
    throw new java_util_NoSuchElementException();
  }
  this.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = false;
  return this.com_google_gwt_user_client_ui_SimplePanel$1_this$0.com_google_gwt_user_client_ui_SimplePanel_widget;
}

function com_google_gwt_user_client_ui_SimplePanel$1(){
}

_ = com_google_gwt_user_client_ui_SimplePanel$1.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_SimplePanel$1_getClass__;
_.hasNext__ = com_google_gwt_user_client_ui_SimplePanel$1_hasNext__;
_.next__ = com_google_gwt_user_client_ui_SimplePanel$1_next__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_SimplePanel$1_this$0 = null;
function com_google_gwt_user_client_ui_TextBoxBase_$TextBoxBase__Lcom_google_gwt_user_client_ui_TextBoxBase_2Lcom_google_gwt_dom_client_Element_2(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
  this$static.com_google_gwt_user_client_ui_UIObject_element.tabIndex = 0;
  return this$static;
}

function com_google_gwt_user_client_ui_TextBoxBase_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBoxBase_12_1classLit;
}

function com_google_gwt_user_client_ui_TextBoxBase_onBrowserEvent__Lcom_google_gwt_user_client_Event_2(event){
  var type;
  type = com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , event).type);
  if ((type & 896) != 0) {
    com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2(this, event);
  }
   else {
    com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2(this, event);
  }
}

function com_google_gwt_user_client_ui_TextBoxBase(){
}

_ = com_google_gwt_user_client_ui_TextBoxBase.prototype = new com_google_gwt_user_client_ui_FocusWidget();
_.getClass__$ = com_google_gwt_user_client_ui_TextBoxBase_getClass__;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2 = com_google_gwt_user_client_ui_TextBoxBase_onBrowserEvent__Lcom_google_gwt_user_client_Event_2;
_.java_lang_Object_typeId$ = 68;
function com_google_gwt_user_client_ui_TextArea_$TextArea__Lcom_google_gwt_user_client_ui_TextArea_2(this$static){
  com_google_gwt_user_client_ui_TextBoxBase_$TextBoxBase__Lcom_google_gwt_user_client_ui_TextBoxBase_2Lcom_google_gwt_dom_client_Element_2(this$static, (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_200));
  this$static.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_201;
  return this$static;
}

function com_google_gwt_user_client_ui_TextArea_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextArea_12_1classLit;
}

function com_google_gwt_user_client_ui_TextArea(){
}

_ = com_google_gwt_user_client_ui_TextArea.prototype = new com_google_gwt_user_client_ui_TextBoxBase();
_.getClass__$ = com_google_gwt_user_client_ui_TextArea_getClass__;
_.java_lang_Object_typeId$ = 69;
function com_google_gwt_user_client_ui_TextBox_$TextBox__Lcom_google_gwt_user_client_ui_TextBox_2(this$static){
  var com_google_gwt_dom_client_Document_$createTextInputElement__Lcom_google_gwt_dom_client_Document_2_com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2_e_0_0;
  com_google_gwt_user_client_ui_TextBox_$TextBox__Lcom_google_gwt_user_client_ui_TextBox_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2(this$static, (com_google_gwt_dom_client_Document_$createTextInputElement__Lcom_google_gwt_dom_client_Document_2_com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2_e_0_0 = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_202) , com_google_gwt_dom_client_Document_$createTextInputElement__Lcom_google_gwt_dom_client_Document_2_com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2_e_0_0.type = $intern_203 , com_google_gwt_dom_client_Document_$createTextInputElement__Lcom_google_gwt_dom_client_Document_2_com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2_e_0_0), $intern_204);
  return this$static;
}

function com_google_gwt_user_client_ui_TextBox_$TextBox__Lcom_google_gwt_user_client_ui_TextBox_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2(this$static, element, styleName){
  this$static.com_google_gwt_user_client_ui_UIObject_element = element;
  this$static.com_google_gwt_user_client_ui_UIObject_element.tabIndex = 0;
  if (styleName != null) {
    this$static.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = styleName;
  }
  return this$static;
}

function com_google_gwt_user_client_ui_TextBox_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBox_12_1classLit;
}

function com_google_gwt_user_client_ui_TextBox(){
}

_ = com_google_gwt_user_client_ui_TextBox.prototype = new com_google_gwt_user_client_ui_TextBoxBase();
_.getClass__$ = com_google_gwt_user_client_ui_TextBox_getClass__;
_.java_lang_Object_typeId$ = 70;
function com_google_gwt_user_client_ui_VerticalPanel_$VerticalPanel__Lcom_google_gwt_user_client_ui_VerticalPanel_2(this$static){
  com_google_gwt_user_client_ui_CellPanel_$CellPanel__Lcom_google_gwt_user_client_ui_CellPanel_2(this$static);
  this$static.com_google_gwt_user_client_ui_VerticalPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this$static.com_google_gwt_user_client_ui_VerticalPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  this$static.com_google_gwt_user_client_ui_CellPanel_table[$intern_168] = $intern_114;
  this$static.com_google_gwt_user_client_ui_CellPanel_table[$intern_169] = $intern_114;
  return this$static;
}

function com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  var td, tr;
  tr = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_157);
  td = com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2(this$static);
  tr.appendChild(td);
  this$static.com_google_gwt_user_client_ui_CellPanel_body.appendChild(tr);
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2(w);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  td.appendChild(w.com_google_gwt_user_client_ui_UIObject_element);
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(w, this$static);
}

function com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2(this$static){
  var td;
  td = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_160);
  td[$intern_170] = this$static.com_google_gwt_user_client_ui_VerticalPanel_horzAlign.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString;
  td.style[$intern_171] = this$static.com_google_gwt_user_client_ui_VerticalPanel_vertAlign.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString;
  return td;
}

function com_google_gwt_user_client_ui_VerticalPanel_$insert__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w, beforeIndex){
  var td, tr;
  com_google_gwt_user_client_ui_ComplexPanel_$checkIndexBoundsForInsertion__Lcom_google_gwt_user_client_ui_ComplexPanel_2I(this$static, beforeIndex);
  tr = (com_google_gwt_dom_client_DOMImpl_$clinit__() , $doc).createElement($intern_157);
  td = com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2(this$static);
  tr.appendChild(td);
  com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2I(this$static.com_google_gwt_user_client_ui_CellPanel_body, tr, beforeIndex);
  com_google_gwt_user_client_ui_ComplexPanel_$insert__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2IZ(this$static, w, td, beforeIndex, false);
}

function com_google_gwt_user_client_ui_VerticalPanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1VerticalPanel_12_1classLit;
}

function com_google_gwt_user_client_ui_VerticalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2(w){
  var removed, td;
  td = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , w.com_google_gwt_user_client_ui_UIObject_element));
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this, w);
  if (removed) {
    this.com_google_gwt_user_client_ui_CellPanel_body.removeChild(com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2(td));
  }
  return removed;
}

function com_google_gwt_user_client_ui_VerticalPanel(){
}

_ = com_google_gwt_user_client_ui_VerticalPanel.prototype = new com_google_gwt_user_client_ui_CellPanel();
_.getClass__$ = com_google_gwt_user_client_ui_VerticalPanel_getClass__;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2 = com_google_gwt_user_client_ui_VerticalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2;
_.java_lang_Object_typeId$ = 71;
function com_google_gwt_user_client_ui_WidgetCollection_$WidgetCollection__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_HasWidgets_2(this$static, parent){
  this$static.com_google_gwt_user_client_ui_WidgetCollection_parent = parent;
  this$static.com_google_gwt_user_client_ui_WidgetCollection_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, 0, 2, 4, 0);
  return this$static;
}

function com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w, this$static.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_WidgetCollection_$get__Lcom_google_gwt_user_client_ui_WidgetCollection_2I(this$static, index){
  if (index < 0 || index >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException();
  }
  return this$static.com_google_gwt_user_client_ui_WidgetCollection_array[index];
}

function com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  var i;
  for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    if (this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] == w) {
      return i;
    }
  }
  return -1;
}

function com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException();
  }
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection_size == this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length) {
    newArray = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, 0, 2, this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length * 2, 0);
    for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length; ++i) {
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(newArray, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i]);
    }
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array = newArray;
  }
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = this$static.com_google_gwt_user_client_ui_WidgetCollection_size - 1; i > beforeIndex; --i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i - 1]);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, beforeIndex, w);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2I(this$static, index){
  var i;
  if (index < 0 || index >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException();
  }
  --this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = index; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i + 1]);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, this$static.com_google_gwt_user_client_ui_WidgetCollection_size, null);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w){
  var index;
  index = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, w);
  if (index == -1) {
    throw new java_util_NoSuchElementException();
  }
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2I(this$static, index);
}

function com_google_gwt_user_client_ui_WidgetCollection_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection_12_1classLit;
}

function com_google_gwt_user_client_ui_WidgetCollection(){
}

_ = com_google_gwt_user_client_ui_WidgetCollection.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_WidgetCollection_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_WidgetCollection_array = null;
_.com_google_gwt_user_client_ui_WidgetCollection_parent = null;
_.com_google_gwt_user_client_ui_WidgetCollection_size = 0;
function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(this$static, this$0){
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0 = this$0;
  return this$static;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_util_NoSuchElementException();
  }
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_array[++this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index];
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < 0 || this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IllegalStateException();
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_parent.remove__Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_array[this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index--]);
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection$WidgetIterator_12_1classLit;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__(){
  return this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size - 1;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2(this);
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator(){
}

_ = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator.prototype = new java_lang_Object();
_.getClass__$ = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_getClass__;
_.hasNext__ = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__;
_.next__ = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index = -1;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0 = null;
function com_google_gwt_user_client_ui_impl_FocusImpl_$createFocusable__Lcom_google_gwt_user_client_ui_impl_FocusImpl_2(){
  var e = $doc.createElement($intern_205);
  e.tabIndex = 0;
  return e;
}

function com_google_gwt_user_client_ui_impl_PopupImpl_$getStyleElement__Lcom_google_gwt_user_client_ui_impl_PopupImpl_2Lcom_google_gwt_user_client_Element_2(popup){
  return com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_dom_client_DOMImpl_$clinit__() , popup));
}

function com_scrumzilla_client_ScrumzillaTaskTypeRegistry_$ScrumzillaTaskTypeRegistry__Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2(this$static){
  this$static.com_scrumzilla_client_ScrumzillaTaskTypeRegistry_fTaskTypes = java_util_Vector_$Vector__Ljava_util_Vector_2(new java_util_Vector());
  return this$static;
}

function com_scrumzilla_client_ScrumzillaTaskTypeRegistry_$getTaskTypes__Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2(this$static){
  var i, toReturn;
  toReturn = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, 0, 1, this$static.com_scrumzilla_client_ScrumzillaTaskTypeRegistry_fTaskTypes.java_util_Vector_arrayList.java_util_ArrayList_size, 0);
  for (i = 0; i < toReturn.length; ++i) {
    toReturn[i] = (com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static.com_scrumzilla_client_ScrumzillaTaskTypeRegistry_fTaskTypes.java_util_Vector_arrayList, i), 43) , $intern_206);
  }
  return toReturn;
}

function com_scrumzilla_client_ScrumzillaTaskTypeRegistry_$lookupTaskType__Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2Ljava_lang_String_2(this$static, taskType){
  var registeredContrubution, registeredContrubution$iterator;
  for (registeredContrubution$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this$static.com_scrumzilla_client_ScrumzillaTaskTypeRegistry_fTaskTypes.java_util_Vector_arrayList); registeredContrubution$iterator.java_util_AbstractList$IteratorImpl_i < registeredContrubution$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    registeredContrubution = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(registeredContrubution$iterator), 43);
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2($intern_206, taskType)) {
      return registeredContrubution;
    }
  }
  return null;
}

function com_scrumzilla_client_ScrumzillaTaskTypeRegistry_$registerTaskType__Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2Lcom_scrumzilla_client_taskcontribution_ScrumzillaTaskTypeContribution_2(this$static, contribution){
  var registeredContrubution$iterator;
  for (registeredContrubution$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this$static.com_scrumzilla_client_ScrumzillaTaskTypeRegistry_fTaskTypes.java_util_Vector_arrayList); registeredContrubution$iterator.java_util_AbstractList$IteratorImpl_i < registeredContrubution$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(registeredContrubution$iterator), 43);
    throw java_lang_IllegalArgumentException_$IllegalArgumentException__Ljava_lang_IllegalArgumentException_2Ljava_lang_String_2(new java_lang_IllegalArgumentException(), $intern_207);
  }
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static.com_scrumzilla_client_ScrumzillaTaskTypeRegistry_fTaskTypes.java_util_Vector_arrayList, contribution);
}

function com_scrumzilla_client_ScrumzillaTaskTypeRegistry_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ScrumzillaTaskTypeRegistry_12_1classLit;
}

function com_scrumzilla_client_ScrumzillaTaskTypeRegistry(){
}

_ = com_scrumzilla_client_ScrumzillaTaskTypeRegistry.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_ScrumzillaTaskTypeRegistry_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_scrumzilla_client_controller_ScrumzillaController_$ScrumzillaController__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_ScrumzillaModel_2Lcom_google_gwt_event_shared_HandlerManager_2Lcom_scrumzilla_client_events_ScrumzillaEventDispatcher_2(this$static, scrumzillaHandlerManager){
  this$static.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager = scrumzillaHandlerManager;
  return this$static;
}

function com_scrumzilla_client_controller_ScrumzillaController_$addStory__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_controller_ScrumzillaControllerErrorHandler_2(s){
  if (s.com_scrumzilla_client_model_Story_fStoryName == null || java_lang_String_$trim__Ljava_lang_String_2(s.com_scrumzilla_client_model_Story_fStoryName).length == 0) {
  }
   else {
    com_scrumzilla_client_wave_ScrumzillaWaveModel_$doesStoryExist__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_ScrumzillaModel$AsynchResult_2(s, com_scrumzilla_client_controller_ScrumzillaController$2_$ScrumzillaController$2__Lcom_scrumzilla_client_controller_ScrumzillaController$2_2(new com_scrumzilla_client_controller_ScrumzillaController$2(), s));
  }
}

function com_scrumzilla_client_controller_ScrumzillaController_$changeTaskState__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_model_Task$TaskState_2(task, taskState){
  com_scrumzilla_client_model_Task_$setTaskState__Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_model_Task$TaskState_2(task, taskState);
  com_scrumzilla_client_wave_ScrumzillaWaveModel_$taskModified__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2(task);
}

function com_scrumzilla_client_controller_ScrumzillaController_$moveTaskToStory__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_model_Task_2(story, task){
  if (!task) {
    throw java_lang_IllegalArgumentException_$IllegalArgumentException__Ljava_lang_IllegalArgumentException_2Ljava_lang_String_2(new java_lang_IllegalArgumentException(), $intern_208);
  }
  task.com_scrumzilla_client_model_Task_fStory = story;
  com_scrumzilla_client_wave_ScrumzillaWaveModel_$taskModified__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2(task);
}

function com_scrumzilla_client_controller_ScrumzillaController_$removeStory__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_controller_ScrumzillaControllerErrorHandler_2(story){
  com_scrumzilla_client_wave_ScrumzillaWaveModel_$doesStoryExist__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_ScrumzillaModel$AsynchResult_2(story, com_scrumzilla_client_controller_ScrumzillaController$3_$ScrumzillaController$3__Lcom_scrumzilla_client_controller_ScrumzillaController$3_2(new com_scrumzilla_client_controller_ScrumzillaController$3(), story));
}

function com_scrumzilla_client_controller_ScrumzillaController_$removeTaskFromModel__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_controller_ScrumzillaControllerErrorHandler_2(task){
  com_scrumzilla_client_wave_ScrumzillaWaveModel_$doesTaskExist__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_ScrumzillaModel$AsynchResult_2(task, com_scrumzilla_client_controller_ScrumzillaController$4_$ScrumzillaController$4__Lcom_scrumzilla_client_controller_ScrumzillaController$4_2(new com_scrumzilla_client_controller_ScrumzillaController$4(), task));
}

function com_scrumzilla_client_controller_ScrumzillaController_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1controller_1ScrumzillaController_12_1classLit;
}

function com_scrumzilla_client_controller_ScrumzillaController(){
}

_ = com_scrumzilla_client_controller_ScrumzillaController.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_controller_ScrumzillaController_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager = null;
function com_scrumzilla_client_controller_ScrumzillaController$1_$ScrumzillaController$1__Lcom_scrumzilla_client_controller_ScrumzillaController$1_2(this$static, val$t){
  this$static.com_scrumzilla_client_controller_ScrumzillaController$1_val$t = val$t;
  return this$static;
}

function com_scrumzilla_client_controller_ScrumzillaController$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1controller_1ScrumzillaController$1_12_1classLit;
}

function com_scrumzilla_client_controller_ScrumzillaController$1_result__Ljava_lang_Boolean_2(taskExists){
  var com_scrumzilla_client_wave_ScrumzillaWaveModel_$addTask__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2_tasks_0, com_scrumzilla_client_wave_ScrumzillaWaveModel_$addTask__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2_waveTask_0;
  if (taskExists.java_lang_Boolean_value) {
    $wnd.alert($intern_209);
  }
   else {
    com_scrumzilla_client_wave_ScrumzillaWaveModel_$addTask__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2_waveTask_0 = {};
    com_scrumzilla_client_wave_WaveTask_$fromTask__Lcom_scrumzilla_client_wave_WaveTask_2Lcom_scrumzilla_client_model_Task_2(com_scrumzilla_client_wave_ScrumzillaWaveModel_$addTask__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2_waveTask_0, this.com_scrumzilla_client_controller_ScrumzillaController$1_val$t);
    com_scrumzilla_client_wave_ScrumzillaWaveModel_$addTask__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2_tasks_0 = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2($intern_210);
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(com_scrumzilla_client_wave_ScrumzillaWaveModel_$addTask__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2_tasks_0.java_util_ArrayList_array, com_scrumzilla_client_wave_ScrumzillaWaveModel_$addTask__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2_tasks_0.java_util_ArrayList_size++, com_scrumzilla_client_wave_ScrumzillaWaveModel_$addTask__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2_waveTask_0);
    com_scrumzilla_client_wave_ScrumzillaWaveModel_$storeWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2Ljava_util_List_2($intern_210, com_scrumzilla_client_wave_ScrumzillaWaveModel_$addTask__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2_tasks_0);
  }
}

function com_scrumzilla_client_controller_ScrumzillaController$1(){
}

_ = com_scrumzilla_client_controller_ScrumzillaController$1.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_controller_ScrumzillaController$1_getClass__;
_.result__Ljava_lang_Object_2 = com_scrumzilla_client_controller_ScrumzillaController$1_result__Ljava_lang_Boolean_2;
_.java_lang_Object_typeId$ = 0;
_.com_scrumzilla_client_controller_ScrumzillaController$1_val$t = null;
function com_scrumzilla_client_controller_ScrumzillaController$2_$ScrumzillaController$2__Lcom_scrumzilla_client_controller_ScrumzillaController$2_2(this$static, val$s){
  this$static.com_scrumzilla_client_controller_ScrumzillaController$2_val$s = val$s;
  return this$static;
}

function com_scrumzilla_client_controller_ScrumzillaController$2_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1controller_1ScrumzillaController$2_12_1classLit;
}

function com_scrumzilla_client_controller_ScrumzillaController$2_result__Ljava_lang_Boolean_2(storyExists){
  var com_scrumzilla_client_wave_ScrumzillaWaveModel_$addStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2_waveStories_0, com_scrumzilla_client_wave_ScrumzillaWaveModel_$addStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2_waveStory_0;
  if (storyExists.java_lang_Boolean_value) {
    $wnd.alert($intern_211 + this.com_scrumzilla_client_controller_ScrumzillaController$2_val$s.com_scrumzilla_client_model_Story_fStoryName);
  }
   else {
    com_scrumzilla_client_wave_ScrumzillaWaveModel_$addStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2_waveStory_0 = new Object();
    com_scrumzilla_client_wave_ScrumzillaWaveModel_$addStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2_waveStory_0.StoryName = this.com_scrumzilla_client_controller_ScrumzillaController$2_val$s.com_scrumzilla_client_model_Story_fStoryName;
    com_scrumzilla_client_wave_ScrumzillaWaveModel_$addStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2_waveStories_0 = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2($intern_212);
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(com_scrumzilla_client_wave_ScrumzillaWaveModel_$addStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2_waveStories_0.java_util_ArrayList_array, com_scrumzilla_client_wave_ScrumzillaWaveModel_$addStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2_waveStories_0.java_util_ArrayList_size++, com_scrumzilla_client_wave_ScrumzillaWaveModel_$addStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2_waveStory_0);
    com_scrumzilla_client_wave_ScrumzillaWaveModel_$storeWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2Ljava_util_List_2($intern_212, com_scrumzilla_client_wave_ScrumzillaWaveModel_$addStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2_waveStories_0);
  }
}

function com_scrumzilla_client_controller_ScrumzillaController$2(){
}

_ = com_scrumzilla_client_controller_ScrumzillaController$2.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_controller_ScrumzillaController$2_getClass__;
_.result__Ljava_lang_Object_2 = com_scrumzilla_client_controller_ScrumzillaController$2_result__Ljava_lang_Boolean_2;
_.java_lang_Object_typeId$ = 0;
_.com_scrumzilla_client_controller_ScrumzillaController$2_val$s = null;
function com_scrumzilla_client_controller_ScrumzillaController$3_$ScrumzillaController$3__Lcom_scrumzilla_client_controller_ScrumzillaController$3_2(this$static, val$story){
  this$static.com_scrumzilla_client_controller_ScrumzillaController$3_val$story = val$story;
  return this$static;
}

function com_scrumzilla_client_controller_ScrumzillaController$3_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1controller_1ScrumzillaController$3_12_1classLit;
}

function com_scrumzilla_client_controller_ScrumzillaController$3_result__Ljava_lang_Boolean_2(storyExists){
  if (storyExists.java_lang_Boolean_value) {
    com_scrumzilla_client_wave_ScrumzillaWaveModel_$removeStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2(this.com_scrumzilla_client_controller_ScrumzillaController$3_val$story);
  }
   else {
  }
}

function com_scrumzilla_client_controller_ScrumzillaController$3(){
}

_ = com_scrumzilla_client_controller_ScrumzillaController$3.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_controller_ScrumzillaController$3_getClass__;
_.result__Ljava_lang_Object_2 = com_scrumzilla_client_controller_ScrumzillaController$3_result__Ljava_lang_Boolean_2;
_.java_lang_Object_typeId$ = 0;
_.com_scrumzilla_client_controller_ScrumzillaController$3_val$story = null;
function com_scrumzilla_client_controller_ScrumzillaController$4_$ScrumzillaController$4__Lcom_scrumzilla_client_controller_ScrumzillaController$4_2(this$static, val$task){
  this$static.com_scrumzilla_client_controller_ScrumzillaController$4_val$task = val$task;
  return this$static;
}

function com_scrumzilla_client_controller_ScrumzillaController$4_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1controller_1ScrumzillaController$4_12_1classLit;
}

function com_scrumzilla_client_controller_ScrumzillaController$4_result__Ljava_lang_Boolean_2(taskExists){
  if (taskExists.java_lang_Boolean_value) {
    com_scrumzilla_client_wave_ScrumzillaWaveModel_$removeTask__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2(this.com_scrumzilla_client_controller_ScrumzillaController$4_val$task);
  }
   else {
    $wnd.alert($intern_213);
  }
}

function com_scrumzilla_client_controller_ScrumzillaController$4(){
}

_ = com_scrumzilla_client_controller_ScrumzillaController$4.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_controller_ScrumzillaController$4_getClass__;
_.result__Ljava_lang_Object_2 = com_scrumzilla_client_controller_ScrumzillaController$4_result__Ljava_lang_Boolean_2;
_.java_lang_Object_typeId$ = 0;
_.com_scrumzilla_client_controller_ScrumzillaController$4_val$task = null;
function com_scrumzilla_client_events_AddedStoryEvent_$clinit__(){
  com_scrumzilla_client_events_AddedStoryEvent_$clinit__ = nullMethod;
  com_scrumzilla_client_events_AddedStoryEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type());
}

var com_scrumzilla_client_events_AddedStoryEvent_TYPE;
function com_scrumzilla_client_events_AddedTaskEvent_$clinit__(){
  com_scrumzilla_client_events_AddedTaskEvent_$clinit__ = nullMethod;
  com_scrumzilla_client_events_AddedTaskEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type());
}

var com_scrumzilla_client_events_AddedTaskEvent_TYPE;
function com_scrumzilla_client_events_EditedTaskEvent_$clinit__(){
  com_scrumzilla_client_events_EditedTaskEvent_$clinit__ = nullMethod;
  com_scrumzilla_client_events_EditedTaskEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type());
}

var com_scrumzilla_client_events_EditedTaskEvent_TYPE;
function com_scrumzilla_client_events_ModelChangedEvent_$clinit__(){
  com_scrumzilla_client_events_ModelChangedEvent_$clinit__ = nullMethod;
  com_scrumzilla_client_events_ModelChangedEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type());
}

function com_scrumzilla_client_events_ModelChangedEvent_dispatch__Lcom_scrumzilla_client_events_ModelChangedEventHandler_2(handler){
  handler.modelChanged__Lcom_scrumzilla_client_events_ModelChangedEvent_2(this);
}

function com_scrumzilla_client_events_ModelChangedEvent_getAssociatedType__(){
  return com_scrumzilla_client_events_ModelChangedEvent_TYPE;
}

function com_scrumzilla_client_events_ModelChangedEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1events_1ModelChangedEvent_12_1classLit;
}

function com_scrumzilla_client_events_ModelChangedEvent(){
}

_ = com_scrumzilla_client_events_ModelChangedEvent.prototype = new com_google_gwt_event_shared_GwtEvent();
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2 = com_scrumzilla_client_events_ModelChangedEvent_dispatch__Lcom_scrumzilla_client_events_ModelChangedEventHandler_2;
_.getAssociatedType__ = com_scrumzilla_client_events_ModelChangedEvent_getAssociatedType__;
_.getClass__$ = com_scrumzilla_client_events_ModelChangedEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
var com_scrumzilla_client_events_ModelChangedEvent_TYPE;
function com_scrumzilla_client_events_RemovedStoryEvent_$clinit__(){
  com_scrumzilla_client_events_RemovedStoryEvent_$clinit__ = nullMethod;
  com_scrumzilla_client_events_RemovedStoryEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type());
}

var com_scrumzilla_client_events_RemovedStoryEvent_TYPE;
function com_scrumzilla_client_events_RemovedTaskFromStoryEvent_$clinit__(){
  com_scrumzilla_client_events_RemovedTaskFromStoryEvent_$clinit__ = nullMethod;
  com_scrumzilla_client_events_RemovedTaskFromStoryEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type());
}

var com_scrumzilla_client_events_RemovedTaskFromStoryEvent_TYPE;
function com_scrumzilla_client_model_Story_$clinit__(){
  com_scrumzilla_client_model_Story_$clinit__ = nullMethod;
  com_scrumzilla_client_model_Story_UNASSIGNED_1STORY = com_scrumzilla_client_model_Story_$Story__Lcom_scrumzilla_client_model_Story_2Ljava_lang_String_2(new com_scrumzilla_client_model_Story(), $intern_214);
}

function com_scrumzilla_client_model_Story_$Story__Lcom_scrumzilla_client_model_Story_2Ljava_lang_String_2(this$static, storyName){
  com_scrumzilla_client_model_Story_$clinit__();
  this$static.com_scrumzilla_client_model_Story_fStoryName = storyName;
  return this$static;
}

function com_scrumzilla_client_model_Story_$equals__Lcom_scrumzilla_client_model_Story_2Ljava_lang_Object_2(this$static, obj){
  var other;
  if ((this$static == null?null:this$static) === (obj == null?null:obj))
    return true;
  if (obj == null)
    return false;
  if (com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1model_1Story_12_1classLit != (obj.java_lang_Object_typeMarker$ == nullMethod || obj.java_lang_Object_typeId$ == 2?obj.getClass__$():com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit))
    return false;
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(obj, 44);
  if (this$static.com_scrumzilla_client_model_Story_fStoryName == null) {
    if (other.com_scrumzilla_client_model_Story_fStoryName != null)
      return false;
  }
   else if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2(this$static.com_scrumzilla_client_model_Story_fStoryName, other.com_scrumzilla_client_model_Story_fStoryName))
    return false;
  return true;
}

function com_scrumzilla_client_model_Story_equals__Ljava_lang_Object_2(obj){
  return com_scrumzilla_client_model_Story_$equals__Lcom_scrumzilla_client_model_Story_2Ljava_lang_Object_2(this, obj);
}

function com_scrumzilla_client_model_Story_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1model_1Story_12_1classLit;
}

function com_scrumzilla_client_model_Story_hashCode__(){
  var result;
  result = 1;
  result = 31 * result + (this.com_scrumzilla_client_model_Story_fStoryName == null?0:java_lang_String$HashCache_getHashCode__Ljava_lang_String_2(this.com_scrumzilla_client_model_Story_fStoryName));
  return result;
}

function com_scrumzilla_client_model_Story(){
}

_ = com_scrumzilla_client_model_Story.prototype = new java_lang_Object();
_.equals__Ljava_lang_Object_2$ = com_scrumzilla_client_model_Story_equals__Ljava_lang_Object_2;
_.getClass__$ = com_scrumzilla_client_model_Story_getClass__;
_.hashCode__$ = com_scrumzilla_client_model_Story_hashCode__;
_.java_lang_Object_typeId$ = 72;
_.com_scrumzilla_client_model_Story_fStoryName = null;
var com_scrumzilla_client_model_Story_UNASSIGNED_1STORY;
function com_scrumzilla_client_model_Task_$Task__Lcom_scrumzilla_client_model_Task_2Ljava_lang_String_2Ljava_lang_String_2(this$static, taskType, uniqueID){
  this$static.com_scrumzilla_client_model_Task_fTaskState = (com_scrumzilla_client_model_Task$TaskState_$clinit__() , com_scrumzilla_client_model_Task$TaskState_TODO);
  this$static.com_scrumzilla_client_model_Task_fTaskType = taskType;
  this$static.com_scrumzilla_client_model_Task_fUniqueID = uniqueID;
  return this$static;
}

function com_scrumzilla_client_model_Task_$equals__Lcom_scrumzilla_client_model_Task_2Ljava_lang_Object_2(this$static, obj){
  var other;
  if ((this$static == null?null:this$static) === (obj == null?null:obj))
    return true;
  if (obj == null)
    return false;
  if (com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1model_1Task_12_1classLit != (obj.java_lang_Object_typeMarker$ == nullMethod || obj.java_lang_Object_typeId$ == 2?obj.getClass__$():com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit))
    return false;
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(obj, 45);
  if (this$static.com_scrumzilla_client_model_Task_fUniqueID == null) {
    if (other.com_scrumzilla_client_model_Task_fUniqueID != null)
      return false;
  }
   else if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2(this$static.com_scrumzilla_client_model_Task_fUniqueID, other.com_scrumzilla_client_model_Task_fUniqueID))
    return false;
  return true;
}

function com_scrumzilla_client_model_Task_$setDescription__Lcom_scrumzilla_client_model_Task_2Ljava_lang_String_2(this$static, description){
  if (description == null) {
    throw java_lang_IllegalArgumentException_$IllegalArgumentException__Ljava_lang_IllegalArgumentException_2Ljava_lang_String_2(new java_lang_IllegalArgumentException(), $intern_215);
  }
  this$static.com_scrumzilla_client_model_Task_fDescription = description;
}

function com_scrumzilla_client_model_Task_$setTaskState__Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_model_Task$TaskState_2(this$static, taskState){
  if (!taskState) {
    throw java_lang_IllegalArgumentException_$IllegalArgumentException__Ljava_lang_IllegalArgumentException_2Ljava_lang_String_2(new java_lang_IllegalArgumentException(), $intern_216);
  }
  this$static.com_scrumzilla_client_model_Task_fTaskState = taskState;
}

function com_scrumzilla_client_model_Task_equals__Ljava_lang_Object_2(obj){
  return com_scrumzilla_client_model_Task_$equals__Lcom_scrumzilla_client_model_Task_2Ljava_lang_Object_2(this, obj);
}

function com_scrumzilla_client_model_Task_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1model_1Task_12_1classLit;
}

function com_scrumzilla_client_model_Task_hashCode__(){
  var result;
  result = 1;
  result = 31 * result + (this.com_scrumzilla_client_model_Task_fUniqueID == null?0:java_lang_String$HashCache_getHashCode__Ljava_lang_String_2(this.com_scrumzilla_client_model_Task_fUniqueID));
  return result;
}

function com_scrumzilla_client_model_Task(){
}

_ = com_scrumzilla_client_model_Task.prototype = new java_lang_Object();
_.equals__Ljava_lang_Object_2$ = com_scrumzilla_client_model_Task_equals__Ljava_lang_Object_2;
_.getClass__$ = com_scrumzilla_client_model_Task_getClass__;
_.hashCode__$ = com_scrumzilla_client_model_Task_hashCode__;
_.java_lang_Object_typeId$ = 73;
_.com_scrumzilla_client_model_Task_fDescription = $intern_49;
_.com_scrumzilla_client_model_Task_fStory = null;
_.com_scrumzilla_client_model_Task_fTaskType = null;
_.com_scrumzilla_client_model_Task_fUniqueID = null;
function com_scrumzilla_client_model_Task$TaskState_$clinit__(){
  com_scrumzilla_client_model_Task$TaskState_$clinit__ = nullMethod;
  com_scrumzilla_client_model_Task$TaskState_TODO = com_scrumzilla_client_model_Task$TaskState_$Task$TaskState__Lcom_scrumzilla_client_model_Task$TaskState_2Ljava_lang_String_2I(new com_scrumzilla_client_model_Task$TaskState(), $intern_217, 0);
  com_scrumzilla_client_model_Task$TaskState_IN_1PROGRESS = com_scrumzilla_client_model_Task$TaskState_$Task$TaskState__Lcom_scrumzilla_client_model_Task$TaskState_2Ljava_lang_String_2I(new com_scrumzilla_client_model_Task$TaskState(), $intern_218, 1);
  com_scrumzilla_client_model_Task$TaskState_WORK_1COMPLETED = com_scrumzilla_client_model_Task$TaskState_$Task$TaskState__Lcom_scrumzilla_client_model_Task$TaskState_2Ljava_lang_String_2I(new com_scrumzilla_client_model_Task$TaskState(), $intern_219, 2);
  com_scrumzilla_client_model_Task$TaskState_CLOSED = com_scrumzilla_client_model_Task$TaskState_$Task$TaskState__Lcom_scrumzilla_client_model_Task$TaskState_2Ljava_lang_String_2I(new com_scrumzilla_client_model_Task$TaskState(), $intern_220, 3);
  com_scrumzilla_client_model_Task$TaskState_enum$map = {_TODO:com_scrumzilla_client_model_Task$TaskState_TODO, _IN_PROGRESS:com_scrumzilla_client_model_Task$TaskState_IN_1PROGRESS, _WORK_COMPLETED:com_scrumzilla_client_model_Task$TaskState_WORK_1COMPLETED, _CLOSED:com_scrumzilla_client_model_Task$TaskState_CLOSED};
}

function com_scrumzilla_client_model_Task$TaskState_$Task$TaskState__Lcom_scrumzilla_client_model_Task$TaskState_2Ljava_lang_String_2I(this$static, enum$name, enum$ordinal){
  com_scrumzilla_client_model_Task$TaskState_$clinit__();
  this$static.java_lang_Enum_name = enum$name;
  this$static.java_lang_Enum_ordinal = enum$ordinal;
  return this$static;
}

function com_scrumzilla_client_model_Task$TaskState_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1model_1Task$TaskState_12_1classLit;
}

function com_scrumzilla_client_model_Task$TaskState(){
}

_ = com_scrumzilla_client_model_Task$TaskState.prototype = new java_lang_Enum();
_.getClass__$ = com_scrumzilla_client_model_Task$TaskState_getClass__;
_.java_lang_Object_typeId$ = 74;
var com_scrumzilla_client_model_Task$TaskState_CLOSED, com_scrumzilla_client_model_Task$TaskState_IN_1PROGRESS, com_scrumzilla_client_model_Task$TaskState_TODO, com_scrumzilla_client_model_Task$TaskState_WORK_1COMPLETED, com_scrumzilla_client_model_Task$TaskState_enum$map = null;
function com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_$ScrumzillaLocalTaskEditingUI__Lcom_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_2(this$static){
  com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_$initUI__Lcom_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_2(this$static);
  return this$static;
}

function com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_$createTask__Lcom_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_2(this$static){
  var t;
  t = com_scrumzilla_client_model_Task_$Task__Lcom_scrumzilla_client_model_Task_2Ljava_lang_String_2Ljava_lang_String_2(new com_scrumzilla_client_model_Task(), $intern_206, com_google_gwt_lang_LongLib_toString___3D(com_google_gwt_lang_LongLib_fromDouble__D((new Date()).getTime())) + $intern_49);
  com_scrumzilla_client_model_Task_$setDescription__Lcom_scrumzilla_client_model_Task_2Ljava_lang_String_2(t, java_lang_String_$trim__Ljava_lang_String_2(com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2(this$static.com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_fAddTaskDescription.com_google_gwt_user_client_ui_UIObject_element, $intern_221)));
  return t;
}

function com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_$getSimpleTaskDisplayUI__Lcom_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_2Lcom_scrumzilla_client_model_Task_2(task){
  var localTaskDescription, localTaskTitle, vp;
  vp = com_google_gwt_user_client_ui_VerticalPanel_$VerticalPanel__Lcom_google_gwt_user_client_ui_VerticalPanel_2(new com_google_gwt_user_client_ui_VerticalPanel());
  vp.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_222;
  localTaskTitle = com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), $intern_223);
  localTaskTitle.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_224;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(vp, localTaskTitle);
  localTaskDescription = com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), task.com_scrumzilla_client_model_Task_fDescription);
  localTaskDescription.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_225;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(vp, localTaskDescription);
  return vp;
}

function com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_$initUI__Lcom_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_2(this$static){
  var hp, l;
  this$static.com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_fAddTaskPanel = com_google_gwt_user_client_ui_VerticalPanel_$VerticalPanel__Lcom_google_gwt_user_client_ui_VerticalPanel_2(new com_google_gwt_user_client_ui_VerticalPanel());
  hp = com_google_gwt_user_client_ui_HorizontalPanel_$HorizontalPanel__Lcom_google_gwt_user_client_ui_HorizontalPanel_2(new com_google_gwt_user_client_ui_HorizontalPanel());
  l = com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), $intern_226);
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(hp, l);
  this$static.com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_fAddTaskDescription = com_google_gwt_user_client_ui_TextArea_$TextArea__Lcom_google_gwt_user_client_ui_TextArea_2(new com_google_gwt_user_client_ui_TextArea());
  this$static.com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_fAddTaskDescription.com_google_gwt_user_client_ui_UIObject_element.cols = 30;
  this$static.com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_fAddTaskDescription.com_google_gwt_user_client_ui_UIObject_element.style[$intern_134] = $intern_227;
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(hp, this$static.com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_fAddTaskDescription);
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_fAddTaskPanel, hp);
}

function com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1taskcontribution_1local_1ScrumzillaLocalTaskEditingUI_12_1classLit;
}

function com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI(){
}

_ = com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_getClass__;
_.java_lang_Object_typeId$ = 0;
_.com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_fAddTaskDescription = null;
_.com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_fAddTaskPanel = null;
function com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskTypeContribution_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1taskcontribution_1local_1ScrumzillaLocalTaskTypeContribution_12_1classLit;
}

function com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskTypeContribution(){
}

_ = com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskTypeContribution.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskTypeContribution_getClass__;
_.java_lang_Object_typeId$ = 75;
function com_scrumzilla_client_ui_AddStoryPanel_$AddStoryPanel__Lcom_scrumzilla_client_ui_AddStoryPanel_2Lcom_scrumzilla_client_controller_ScrumzillaController_2(this$static){
  this$static.com_scrumzilla_client_ui_AddStoryPanel_fMainPanel = com_google_gwt_user_client_ui_VerticalPanel_$VerticalPanel__Lcom_google_gwt_user_client_ui_VerticalPanel_2(new com_google_gwt_user_client_ui_VerticalPanel());
  this$static.com_scrumzilla_client_ui_AddStoryPanel_fMainPanel.getStyleElement__()[$intern_133] = $intern_228;
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, this$static.com_scrumzilla_client_ui_AddStoryPanel_fMainPanel);
  com_scrumzilla_client_ui_AddStoryPanel_$switchToNonEditMode__Lcom_scrumzilla_client_ui_AddStoryPanel_2(this$static);
  return this$static;
}

function com_scrumzilla_client_ui_AddStoryPanel_$addStory__Lcom_scrumzilla_client_ui_AddStoryPanel_2(this$static){
  var story;
  story = (com_scrumzilla_client_model_Story_$clinit__() , new com_scrumzilla_client_model_Story());
  story.com_scrumzilla_client_model_Story_fStoryName = java_lang_String_$trim__Ljava_lang_String_2(com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2(this$static.com_scrumzilla_client_ui_AddStoryPanel_fStoryName.com_google_gwt_user_client_ui_UIObject_element, $intern_221));
  com_scrumzilla_client_ui_AddStoryPanel_$switchToNonEditMode__Lcom_scrumzilla_client_ui_AddStoryPanel_2(this$static);
  com_scrumzilla_client_controller_ScrumzillaController_$addStory__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_controller_ScrumzillaControllerErrorHandler_2(story);
}

function com_scrumzilla_client_ui_AddStoryPanel_$switchToEditMode__Lcom_scrumzilla_client_ui_AddStoryPanel_2(this$static){
  var cancelButton, hp, okButton;
  com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2(this$static.com_scrumzilla_client_ui_AddStoryPanel_fMainPanel);
  this$static.com_scrumzilla_client_ui_AddStoryPanel_fStoryName = com_google_gwt_user_client_ui_TextBox_$TextBox__Lcom_google_gwt_user_client_ui_TextBox_2(new com_google_gwt_user_client_ui_TextBox());
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(this$static.com_scrumzilla_client_ui_AddStoryPanel_fStoryName, com_scrumzilla_client_ui_AddStoryPanel$2_$AddStoryPanel$2__Lcom_scrumzilla_client_ui_AddStoryPanel$2_2(new com_scrumzilla_client_ui_AddStoryPanel$2(), this$static), (com_google_gwt_event_dom_client_KeyPressEvent_$clinit__() , com_google_gwt_event_dom_client_KeyPressEvent_TYPE));
  this$static.com_scrumzilla_client_ui_AddStoryPanel_fStoryName.getStyleElement__()[$intern_133] = $intern_229;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_AddStoryPanel_fMainPanel, this$static.com_scrumzilla_client_ui_AddStoryPanel_fStoryName);
  hp = com_google_gwt_user_client_ui_HorizontalPanel_$HorizontalPanel__Lcom_google_gwt_user_client_ui_HorizontalPanel_2(new com_google_gwt_user_client_ui_HorizontalPanel());
  cancelButton = com_google_gwt_user_client_ui_Button_$Button__Lcom_google_gwt_user_client_ui_Button_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Button(), $intern_230);
  cancelButton.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_231;
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(cancelButton, com_scrumzilla_client_ui_AddStoryPanel$3_$AddStoryPanel$3__Lcom_scrumzilla_client_ui_AddStoryPanel$3_2(new com_scrumzilla_client_ui_AddStoryPanel$3(), this$static), (com_google_gwt_event_dom_client_ClickEvent_$clinit__() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(hp, cancelButton);
  okButton = com_google_gwt_user_client_ui_Button_$Button__Lcom_google_gwt_user_client_ui_Button_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Button(), $intern_232);
  okButton.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_233;
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(okButton, com_scrumzilla_client_ui_AddStoryPanel$4_$AddStoryPanel$4__Lcom_scrumzilla_client_ui_AddStoryPanel$4_2(new com_scrumzilla_client_ui_AddStoryPanel$4(), this$static), com_google_gwt_event_dom_client_ClickEvent_TYPE);
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(hp, okButton);
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_AddStoryPanel_fMainPanel, hp);
  com_google_gwt_user_client_ui_FocusWidget_$setFocus__Lcom_google_gwt_user_client_ui_FocusWidget_2Z(this$static.com_scrumzilla_client_ui_AddStoryPanel_fStoryName, true);
}

function com_scrumzilla_client_ui_AddStoryPanel_$switchToNonEditMode__Lcom_scrumzilla_client_ui_AddStoryPanel_2(this$static){
  com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2(this$static.com_scrumzilla_client_ui_AddStoryPanel_fMainPanel);
  this$static.com_scrumzilla_client_ui_AddStoryPanel_fAddStoryButton = com_google_gwt_user_client_ui_Button_$Button__Lcom_google_gwt_user_client_ui_Button_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Button(), $intern_234);
  this$static.com_scrumzilla_client_ui_AddStoryPanel_fAddStoryButton.getStyleElement__()[$intern_133] = $intern_235;
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(this$static.com_scrumzilla_client_ui_AddStoryPanel_fAddStoryButton, com_scrumzilla_client_ui_AddStoryPanel$1_$AddStoryPanel$1__Lcom_scrumzilla_client_ui_AddStoryPanel$1_2(new com_scrumzilla_client_ui_AddStoryPanel$1(), this$static), (com_google_gwt_event_dom_client_ClickEvent_$clinit__() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_AddStoryPanel_fMainPanel, this$static.com_scrumzilla_client_ui_AddStoryPanel_fAddStoryButton);
}

function com_scrumzilla_client_ui_AddStoryPanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddStoryPanel_12_1classLit;
}

function com_scrumzilla_client_ui_AddStoryPanel(){
}

_ = com_scrumzilla_client_ui_AddStoryPanel.prototype = new com_google_gwt_user_client_ui_Composite();
_.getClass__$ = com_scrumzilla_client_ui_AddStoryPanel_getClass__;
_.java_lang_Object_typeId$ = 76;
_.com_scrumzilla_client_ui_AddStoryPanel_fAddStoryButton = null;
_.com_scrumzilla_client_ui_AddStoryPanel_fMainPanel = null;
_.com_scrumzilla_client_ui_AddStoryPanel_fStoryName = null;
function com_scrumzilla_client_ui_AddStoryPanel$1_$AddStoryPanel$1__Lcom_scrumzilla_client_ui_AddStoryPanel$1_2(this$static, this$0){
  this$static.com_scrumzilla_client_ui_AddStoryPanel$1_this$0 = this$0;
  return this$static;
}

function com_scrumzilla_client_ui_AddStoryPanel$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddStoryPanel$1_12_1classLit;
}

function com_scrumzilla_client_ui_AddStoryPanel$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2(event){
  com_scrumzilla_client_ui_AddStoryPanel_$switchToEditMode__Lcom_scrumzilla_client_ui_AddStoryPanel_2(this.com_scrumzilla_client_ui_AddStoryPanel$1_this$0);
}

function com_scrumzilla_client_ui_AddStoryPanel$1(){
}

_ = com_scrumzilla_client_ui_AddStoryPanel$1.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_ui_AddStoryPanel$1_getClass__;
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2 = com_scrumzilla_client_ui_AddStoryPanel$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2;
_.java_lang_Object_typeId$ = 77;
_.com_scrumzilla_client_ui_AddStoryPanel$1_this$0 = null;
function com_scrumzilla_client_ui_AddStoryPanel$2_$AddStoryPanel$2__Lcom_scrumzilla_client_ui_AddStoryPanel$2_2(this$static, this$0){
  this$static.com_scrumzilla_client_ui_AddStoryPanel$2_this$0 = this$0;
  return this$static;
}

function com_scrumzilla_client_ui_AddStoryPanel$2_$onKeyPress__Lcom_scrumzilla_client_ui_AddStoryPanel$2_2Lcom_google_gwt_event_dom_client_KeyPressEvent_2(this$static, event){
  if (com_google_gwt_event_dom_client_KeyPressEvent_$getCharCode__Lcom_google_gwt_event_dom_client_KeyPressEvent_2Lcom_google_gwt_dom_client_NativeEvent_2(event.com_google_gwt_event_dom_client_DomEvent_nativeEvent) == 13 || com_google_gwt_event_dom_client_KeyPressEvent_$getCharCode__Lcom_google_gwt_event_dom_client_KeyPressEvent_2Lcom_google_gwt_dom_client_NativeEvent_2(event.com_google_gwt_event_dom_client_DomEvent_nativeEvent) == 10) {
    com_scrumzilla_client_ui_AddStoryPanel_$addStory__Lcom_scrumzilla_client_ui_AddStoryPanel_2(this$static.com_scrumzilla_client_ui_AddStoryPanel$2_this$0);
  }
}

function com_scrumzilla_client_ui_AddStoryPanel$2_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddStoryPanel$2_12_1classLit;
}

function com_scrumzilla_client_ui_AddStoryPanel$2(){
}

_ = com_scrumzilla_client_ui_AddStoryPanel$2.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_ui_AddStoryPanel$2_getClass__;
_.java_lang_Object_typeId$ = 78;
_.com_scrumzilla_client_ui_AddStoryPanel$2_this$0 = null;
function com_scrumzilla_client_ui_AddStoryPanel$3_$AddStoryPanel$3__Lcom_scrumzilla_client_ui_AddStoryPanel$3_2(this$static, this$0){
  this$static.com_scrumzilla_client_ui_AddStoryPanel$3_this$0 = this$0;
  return this$static;
}

function com_scrumzilla_client_ui_AddStoryPanel$3_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddStoryPanel$3_12_1classLit;
}

function com_scrumzilla_client_ui_AddStoryPanel$3_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2(event){
  com_scrumzilla_client_ui_AddStoryPanel_$switchToNonEditMode__Lcom_scrumzilla_client_ui_AddStoryPanel_2(this.com_scrumzilla_client_ui_AddStoryPanel$3_this$0);
}

function com_scrumzilla_client_ui_AddStoryPanel$3(){
}

_ = com_scrumzilla_client_ui_AddStoryPanel$3.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_ui_AddStoryPanel$3_getClass__;
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2 = com_scrumzilla_client_ui_AddStoryPanel$3_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2;
_.java_lang_Object_typeId$ = 79;
_.com_scrumzilla_client_ui_AddStoryPanel$3_this$0 = null;
function com_scrumzilla_client_ui_AddStoryPanel$4_$AddStoryPanel$4__Lcom_scrumzilla_client_ui_AddStoryPanel$4_2(this$static, this$0){
  this$static.com_scrumzilla_client_ui_AddStoryPanel$4_this$0 = this$0;
  return this$static;
}

function com_scrumzilla_client_ui_AddStoryPanel$4_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddStoryPanel$4_12_1classLit;
}

function com_scrumzilla_client_ui_AddStoryPanel$4_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2(event){
  com_scrumzilla_client_ui_AddStoryPanel_$addStory__Lcom_scrumzilla_client_ui_AddStoryPanel_2(this.com_scrumzilla_client_ui_AddStoryPanel$4_this$0);
}

function com_scrumzilla_client_ui_AddStoryPanel$4(){
}

_ = com_scrumzilla_client_ui_AddStoryPanel$4.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_ui_AddStoryPanel$4_getClass__;
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2 = com_scrumzilla_client_ui_AddStoryPanel$4_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2;
_.java_lang_Object_typeId$ = 80;
_.com_scrumzilla_client_ui_AddStoryPanel$4_this$0 = null;
function com_scrumzilla_client_ui_AddTaskToStoryPanel_$AddTaskToStoryPanel__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2(this$static, story, taskTypeRegistry){
  this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fStory = story;
  this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fTaskTypeRegistry = taskTypeRegistry;
  this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskPanel = com_google_gwt_user_client_ui_VerticalPanel_$VerticalPanel__Lcom_google_gwt_user_client_ui_VerticalPanel_2(new com_google_gwt_user_client_ui_VerticalPanel());
  this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskPanel.getStyleElement__()[$intern_133] = $intern_236;
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskPanel);
  this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskButton = com_google_gwt_user_client_ui_Button_$Button__Lcom_google_gwt_user_client_ui_Button_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Button(), $intern_237);
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskButton, com_scrumzilla_client_ui_AddTaskToStoryPanel$1_$AddTaskToStoryPanel$1__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel$1_2(new com_scrumzilla_client_ui_AddTaskToStoryPanel$1(), this$static), (com_google_gwt_event_dom_client_ClickEvent_$clinit__() , com_google_gwt_event_dom_client_ClickEvent_$clinit__() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
  this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskButton.getStyleElement__()[$intern_133] = $intern_238;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskPanel, this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskButton);
  return this$static;
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel_$addTask__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel_2Ljava_lang_String_2(this$static, string){
  var addTaskButton, addTaskLabel, addTaskUI, buttonPanel, cancelButton;
  com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2(this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskPanel);
  addTaskUI = (com_scrumzilla_client_ScrumzillaTaskTypeRegistry_$lookupTaskType__Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2Ljava_lang_String_2(this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fTaskTypeRegistry, string) , com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_$ScrumzillaLocalTaskEditingUI__Lcom_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_2(new com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI()));
  addTaskLabel = com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), $intern_237);
  addTaskLabel.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_239;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskPanel, addTaskLabel);
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskPanel, addTaskUI.com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_fAddTaskPanel);
  buttonPanel = com_google_gwt_user_client_ui_HorizontalPanel_$HorizontalPanel__Lcom_google_gwt_user_client_ui_HorizontalPanel_2(new com_google_gwt_user_client_ui_HorizontalPanel());
  cancelButton = com_google_gwt_user_client_ui_Button_$Button__Lcom_google_gwt_user_client_ui_Button_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Button(), $intern_230);
  cancelButton.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_240;
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(cancelButton, com_scrumzilla_client_ui_AddTaskToStoryPanel$3_$AddTaskToStoryPanel$3__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel$3_2(new com_scrumzilla_client_ui_AddTaskToStoryPanel$3(), this$static), (com_google_gwt_event_dom_client_ClickEvent_$clinit__() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(buttonPanel, cancelButton);
  addTaskButton = com_google_gwt_user_client_ui_Button_$Button__Lcom_google_gwt_user_client_ui_Button_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Button(), $intern_241);
  addTaskButton.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_242;
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(addTaskButton, com_scrumzilla_client_ui_AddTaskToStoryPanel$4_$AddTaskToStoryPanel$4__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel$4_2(new com_scrumzilla_client_ui_AddTaskToStoryPanel$4(), this$static, addTaskUI), com_google_gwt_event_dom_client_ClickEvent_TYPE);
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(buttonPanel, addTaskButton);
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskPanel, buttonPanel);
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel_$addTaskClicked__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel_2(this$static){
  var mb, pp, taskTypeID, taskTypeID$array, taskTypeID$index, taskTypeID$max, taskTypes;
  taskTypes = com_scrumzilla_client_ScrumzillaTaskTypeRegistry_$getTaskTypes__Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2(this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fTaskTypeRegistry);
  if (taskTypes.length == 1) {
    com_scrumzilla_client_ui_AddTaskToStoryPanel_$addTask__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel_2Ljava_lang_String_2(this$static, taskTypes[0]);
  }
   else {
    pp = com_google_gwt_user_client_ui_PopupPanel_$PopupPanel__Lcom_google_gwt_user_client_ui_PopupPanel_2ZZ(new com_google_gwt_user_client_ui_PopupPanel(), true, true);
    mb = com_google_gwt_user_client_ui_MenuBar_$MenuBar__Lcom_google_gwt_user_client_ui_MenuBar_2Z(new com_google_gwt_user_client_ui_MenuBar(), true);
    mb.com_google_gwt_user_client_ui_MenuBar_autoOpen = true;
    for (taskTypeID$array = taskTypes , taskTypeID$index = 0 , taskTypeID$max = taskTypeID$array.length; taskTypeID$index < taskTypeID$max; ++taskTypeID$index) {
      taskTypeID = taskTypeID$array[taskTypeID$index];
      com_scrumzilla_client_ScrumzillaTaskTypeRegistry_$lookupTaskType__Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2Ljava_lang_String_2(this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fTaskTypeRegistry, taskTypeID);
      com_google_gwt_user_client_ui_MenuBar_$addItem__Lcom_google_gwt_user_client_ui_MenuBar_2Lcom_google_gwt_user_client_ui_MenuItem_2(mb, com_google_gwt_user_client_ui_MenuItem_$MenuItem__Lcom_google_gwt_user_client_ui_MenuItem_2Ljava_lang_String_2Lcom_google_gwt_user_client_Command_2(new com_google_gwt_user_client_ui_MenuItem(), $intern_243, com_scrumzilla_client_ui_AddTaskToStoryPanel$2_$AddTaskToStoryPanel$2__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel$2_2(new com_scrumzilla_client_ui_AddTaskToStoryPanel$2(), this$static)));
    }
    com_google_gwt_user_client_ui_SimplePanel_$add__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2(pp, mb);
    com_google_gwt_user_client_ui_PopupPanel_$showRelativeTo__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_ui_UIObject_2(pp, this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskButton);
  }
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel_$resetAddTaskPanel__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel_2(this$static){
  com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2(this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskPanel);
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskPanel, this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskButton);
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddTaskToStoryPanel_12_1classLit;
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel(){
}

_ = com_scrumzilla_client_ui_AddTaskToStoryPanel.prototype = new com_google_gwt_user_client_ui_Composite();
_.getClass__$ = com_scrumzilla_client_ui_AddTaskToStoryPanel_getClass__;
_.java_lang_Object_typeId$ = 81;
_.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskButton = null;
_.com_scrumzilla_client_ui_AddTaskToStoryPanel_fAddTaskPanel = null;
_.com_scrumzilla_client_ui_AddTaskToStoryPanel_fStory = null;
_.com_scrumzilla_client_ui_AddTaskToStoryPanel_fTaskTypeRegistry = null;
function com_scrumzilla_client_ui_AddTaskToStoryPanel$1_$AddTaskToStoryPanel$1__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel$1_2(this$static, this$0){
  this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel$1_this$0 = this$0;
  return this$static;
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddTaskToStoryPanel$1_12_1classLit;
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2(event){
  com_scrumzilla_client_ui_AddTaskToStoryPanel_$addTaskClicked__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel_2(this.com_scrumzilla_client_ui_AddTaskToStoryPanel$1_this$0);
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$1(){
}

_ = com_scrumzilla_client_ui_AddTaskToStoryPanel$1.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_ui_AddTaskToStoryPanel$1_getClass__;
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2 = com_scrumzilla_client_ui_AddTaskToStoryPanel$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2;
_.java_lang_Object_typeId$ = 82;
_.com_scrumzilla_client_ui_AddTaskToStoryPanel$1_this$0 = null;
function com_scrumzilla_client_ui_AddTaskToStoryPanel$2_$AddTaskToStoryPanel$2__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel$2_2(this$static, this$0){
  this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel$2_this$0 = this$0;
  return this$static;
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$2_execute__(){
  com_scrumzilla_client_ui_AddTaskToStoryPanel_$addTask__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel_2Ljava_lang_String_2(this.com_scrumzilla_client_ui_AddTaskToStoryPanel$2_this$0, $intern_206);
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$2_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddTaskToStoryPanel$2_12_1classLit;
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$2(){
}

_ = com_scrumzilla_client_ui_AddTaskToStoryPanel$2.prototype = new java_lang_Object();
_.execute__ = com_scrumzilla_client_ui_AddTaskToStoryPanel$2_execute__;
_.getClass__$ = com_scrumzilla_client_ui_AddTaskToStoryPanel$2_getClass__;
_.java_lang_Object_typeId$ = 83;
_.com_scrumzilla_client_ui_AddTaskToStoryPanel$2_this$0 = null;
function com_scrumzilla_client_ui_AddTaskToStoryPanel$3_$AddTaskToStoryPanel$3__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel$3_2(this$static, this$0){
  this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel$3_this$0 = this$0;
  return this$static;
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$3_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddTaskToStoryPanel$3_12_1classLit;
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$3_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2(event){
  com_scrumzilla_client_ui_AddTaskToStoryPanel_$resetAddTaskPanel__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel_2(this.com_scrumzilla_client_ui_AddTaskToStoryPanel$3_this$0);
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$3(){
}

_ = com_scrumzilla_client_ui_AddTaskToStoryPanel$3.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_ui_AddTaskToStoryPanel$3_getClass__;
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2 = com_scrumzilla_client_ui_AddTaskToStoryPanel$3_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2;
_.java_lang_Object_typeId$ = 84;
_.com_scrumzilla_client_ui_AddTaskToStoryPanel$3_this$0 = null;
function com_scrumzilla_client_ui_AddTaskToStoryPanel$4_$AddTaskToStoryPanel$4__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel$4_2(this$static, this$0, val$addTaskUI){
  this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel$4_this$0 = this$0;
  this$static.com_scrumzilla_client_ui_AddTaskToStoryPanel$4_val$addTaskUI = val$addTaskUI;
  return this$static;
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$4_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddTaskToStoryPanel$4_12_1classLit;
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$4_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2(event){
  var t;
  try {
    t = com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_$createTask__Lcom_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_2(this.com_scrumzilla_client_ui_AddTaskToStoryPanel$4_val$addTaskUI);
    t.com_scrumzilla_client_model_Task_fStory = this.com_scrumzilla_client_ui_AddTaskToStoryPanel$4_this$0.com_scrumzilla_client_ui_AddTaskToStoryPanel_fStory;
    com_scrumzilla_client_wave_ScrumzillaWaveModel_$doesTaskExist__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_ScrumzillaModel$AsynchResult_2(t, com_scrumzilla_client_controller_ScrumzillaController$1_$ScrumzillaController$1__Lcom_scrumzilla_client_controller_ScrumzillaController$1_2(new com_scrumzilla_client_controller_ScrumzillaController$1(), t));
  }
   finally {
    com_scrumzilla_client_ui_AddTaskToStoryPanel_$resetAddTaskPanel__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel_2(this.com_scrumzilla_client_ui_AddTaskToStoryPanel$4_this$0);
  }
}

function com_scrumzilla_client_ui_AddTaskToStoryPanel$4(){
}

_ = com_scrumzilla_client_ui_AddTaskToStoryPanel$4.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_ui_AddTaskToStoryPanel$4_getClass__;
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2 = com_scrumzilla_client_ui_AddTaskToStoryPanel$4_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2;
_.java_lang_Object_typeId$ = 85;
_.com_scrumzilla_client_ui_AddTaskToStoryPanel$4_this$0 = null;
_.com_scrumzilla_client_ui_AddTaskToStoryPanel$4_val$addTaskUI = null;
function com_scrumzilla_client_ui_ScrumzillaUI_$ScrumzillaUI__Lcom_scrumzilla_client_ui_ScrumzillaUI_2Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2(this$static, controller, registry){
  this$static.com_scrumzilla_client_ui_ScrumzillaUI_fController = controller;
  this$static.com_scrumzilla_client_ui_ScrumzillaUI_fTaskTypeRegistry = registry;
  this$static.com_scrumzilla_client_ui_ScrumzillaUI_fDragController = com_allen_1sauer_gwt_dnd_client_PickupDragController_$PickupDragController__Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2Lcom_google_gwt_user_client_ui_AbsolutePanel_2Z(new com_allen_1sauer_gwt_dnd_client_PickupDragController(), (com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null)), false);
  this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable = com_google_gwt_user_client_ui_FlexTable_$FlexTable__Lcom_google_gwt_user_client_ui_FlexTable_2(new com_google_gwt_user_client_ui_FlexTable());
  this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable.getStyleElement__()[$intern_133] = $intern_244;
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable);
  com_scrumzilla_client_ui_ScrumzillaUI_$initUI__Lcom_scrumzilla_client_ui_ScrumzillaUI_2(this$static);
  com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_AddedStoryEvent_$clinit__() , com_scrumzilla_client_events_AddedStoryEvent_TYPE), this$static);
  com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_RemovedStoryEvent_$clinit__() , com_scrumzilla_client_events_RemovedStoryEvent_TYPE), this$static);
  com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_ModelChangedEvent_$clinit__() , com_scrumzilla_client_events_ModelChangedEvent_TYPE), this$static);
  return this$static;
}

function com_scrumzilla_client_ui_ScrumzillaUI_$addStoryPanel__Lcom_scrumzilla_client_ui_ScrumzillaUI_2Lcom_scrumzilla_client_model_Story_2(this$static, story){
  var column, count, row, taskState, taskState$array, taskState$index, taskState$max;
  count = this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows.length;
  row = count - 1;
  com_google_gwt_user_client_ui_HTMLTable_$insertRow__Lcom_google_gwt_user_client_ui_HTMLTable_2I(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable, row);
  com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable, row, 0, com_scrumzilla_client_ui_StoryTitlePanel_$StoryTitlePanel__Lcom_scrumzilla_client_ui_StoryTitlePanel_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_controller_ScrumzillaController_2(new com_scrumzilla_client_ui_StoryTitlePanel(), story));
  com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable, row, 1, com_scrumzilla_client_ui_AddTaskToStoryPanel_$AddTaskToStoryPanel__Lcom_scrumzilla_client_ui_AddTaskToStoryPanel_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2(new com_scrumzilla_client_ui_AddTaskToStoryPanel(), story, this$static.com_scrumzilla_client_ui_ScrumzillaUI_fTaskTypeRegistry));
  com_scrumzilla_client_wave_ScrumzillaWaveModel_$getTasksForStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2(story);
  column = 2;
  for (taskState$array = (com_scrumzilla_client_model_Task$TaskState_$clinit__() , com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1scrumzilla_1client_1model_1Task$TaskState_12_1classLit, 0, 9, [com_scrumzilla_client_model_Task$TaskState_TODO, com_scrumzilla_client_model_Task$TaskState_IN_1PROGRESS, com_scrumzilla_client_model_Task$TaskState_WORK_1COMPLETED, com_scrumzilla_client_model_Task$TaskState_CLOSED])) , taskState$index = 0 , taskState$max = taskState$array.length; taskState$index < taskState$max; ++taskState$index) {
    taskState = taskState$array[taskState$index];
    com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable, row, column++, com_scrumzilla_client_ui_TasksInStatePanel_$TasksInStatePanel__Lcom_scrumzilla_client_ui_TasksInStatePanel_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_model_Task$TaskState_2Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2(new com_scrumzilla_client_ui_TasksInStatePanel(), story, taskState, this$static.com_scrumzilla_client_ui_ScrumzillaUI_fDragController, this$static.com_scrumzilla_client_ui_ScrumzillaUI_fController, this$static.com_scrumzilla_client_ui_ScrumzillaUI_fTaskTypeRegistry));
  }
}

function com_scrumzilla_client_ui_ScrumzillaUI_$initUI__Lcom_scrumzilla_client_ui_ScrumzillaUI_2(this$static){
  var column, sprintStories, story, story$iterator, storyColumnHeaderLabel, taskStateColumnHeaderLabel, ts, ts$array, ts$index, ts$max;
  com_google_gwt_user_client_ui_HTMLTable_$insertRow__Lcom_google_gwt_user_client_ui_HTMLTable_2I(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable, 0);
  storyColumnHeaderLabel = com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), $intern_245);
  storyColumnHeaderLabel.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_246;
  com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable, 0, 0, storyColumnHeaderLabel);
  com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable, 0, 1, com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), $intern_49));
  column = 2;
  for (ts$array = (com_scrumzilla_client_model_Task$TaskState_$clinit__() , com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1scrumzilla_1client_1model_1Task$TaskState_12_1classLit, 0, 9, [com_scrumzilla_client_model_Task$TaskState_TODO, com_scrumzilla_client_model_Task$TaskState_IN_1PROGRESS, com_scrumzilla_client_model_Task$TaskState_WORK_1COMPLETED, com_scrumzilla_client_model_Task$TaskState_CLOSED])) , ts$index = 0 , ts$max = ts$array.length; ts$index < ts$max; ++ts$index) {
    ts = ts$array[ts$index];
    taskStateColumnHeaderLabel = com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), ts.java_lang_Enum_name);
    taskStateColumnHeaderLabel.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_247;
    com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable, 0, column++, taskStateColumnHeaderLabel);
  }
  this$static.com_scrumzilla_client_ui_ScrumzillaUI_fAddStoryPanel = com_scrumzilla_client_ui_AddStoryPanel_$AddStoryPanel__Lcom_scrumzilla_client_ui_AddStoryPanel_2Lcom_scrumzilla_client_controller_ScrumzillaController_2(new com_scrumzilla_client_ui_AddStoryPanel());
  com_google_gwt_user_client_ui_HTMLTable_$insertRow__Lcom_google_gwt_user_client_ui_HTMLTable_2I(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable, 1);
  com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable, 1, 0, this$static.com_scrumzilla_client_ui_ScrumzillaUI_fAddStoryPanel);
  sprintStories = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getSprintStories__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2();
  com_scrumzilla_client_ui_ScrumzillaUI_$addStoryPanel__Lcom_scrumzilla_client_ui_ScrumzillaUI_2Lcom_scrumzilla_client_model_Story_2(this$static, (com_scrumzilla_client_model_Story_$clinit__() , com_scrumzilla_client_model_Story_UNASSIGNED_1STORY));
  for (story$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), sprintStories); story$iterator.java_util_AbstractList$IteratorImpl_i < story$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    story = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(story$iterator), 44);
    com_scrumzilla_client_ui_ScrumzillaUI_$addStoryPanel__Lcom_scrumzilla_client_ui_ScrumzillaUI_2Lcom_scrumzilla_client_model_Story_2(this$static, story);
  }
}

function com_scrumzilla_client_ui_ScrumzillaUI_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1ScrumzillaUI_12_1classLit;
}

function com_scrumzilla_client_ui_ScrumzillaUI_modelChanged__Lcom_scrumzilla_client_events_ModelChangedEvent_2(modelChangedEvent){
  while (this.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows.length > 0) {
    com_google_gwt_user_client_ui_HTMLTable_$removeRow__Lcom_google_gwt_user_client_ui_HTMLTable_2I(this.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable, 0);
  }
  com_scrumzilla_client_ui_ScrumzillaUI_$initUI__Lcom_scrumzilla_client_ui_ScrumzillaUI_2(this);
}

function com_scrumzilla_client_ui_ScrumzillaUI_onDetach__(){
  com_google_gwt_event_shared_HandlerManager_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this.com_scrumzilla_client_ui_ScrumzillaUI_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_AddedStoryEvent_$clinit__() , com_scrumzilla_client_events_AddedStoryEvent_TYPE), this);
  com_google_gwt_event_shared_HandlerManager_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this.com_scrumzilla_client_ui_ScrumzillaUI_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_RemovedStoryEvent_$clinit__() , com_scrumzilla_client_events_RemovedStoryEvent_TYPE), this);
  com_google_gwt_event_shared_HandlerManager_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this.com_scrumzilla_client_ui_ScrumzillaUI_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_ModelChangedEvent_$clinit__() , com_scrumzilla_client_events_ModelChangedEvent_TYPE), this);
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_ui_Composite_widget);
}

function com_scrumzilla_client_ui_ScrumzillaUI(){
}

_ = com_scrumzilla_client_ui_ScrumzillaUI.prototype = new com_google_gwt_user_client_ui_Composite();
_.getClass__$ = com_scrumzilla_client_ui_ScrumzillaUI_getClass__;
_.modelChanged__Lcom_scrumzilla_client_events_ModelChangedEvent_2 = com_scrumzilla_client_ui_ScrumzillaUI_modelChanged__Lcom_scrumzilla_client_events_ModelChangedEvent_2;
_.onDetach__ = com_scrumzilla_client_ui_ScrumzillaUI_onDetach__;
_.java_lang_Object_typeId$ = 86;
_.com_scrumzilla_client_ui_ScrumzillaUI_fAddStoryPanel = null;
_.com_scrumzilla_client_ui_ScrumzillaUI_fController = null;
_.com_scrumzilla_client_ui_ScrumzillaUI_fDragController = null;
_.com_scrumzilla_client_ui_ScrumzillaUI_fScrumzillaUITable = null;
_.com_scrumzilla_client_ui_ScrumzillaUI_fTaskTypeRegistry = null;
function com_scrumzilla_client_ui_StoryTitlePanel_$StoryTitlePanel__Lcom_scrumzilla_client_ui_StoryTitlePanel_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_controller_ScrumzillaController_2(this$static, s){
  var com_scrumzilla_client_ui_StoryTitlePanel_$initUI__Lcom_scrumzilla_client_ui_StoryTitlePanel_2_removeStory_0;
  this$static.com_scrumzilla_client_ui_StoryTitlePanel_fStory = s;
  this$static.com_scrumzilla_client_ui_StoryTitlePanel_fMainPanel = com_google_gwt_user_client_ui_VerticalPanel_$VerticalPanel__Lcom_google_gwt_user_client_ui_VerticalPanel_2(new com_google_gwt_user_client_ui_VerticalPanel());
  this$static.com_scrumzilla_client_ui_StoryTitlePanel_fMainPanel.getStyleElement__()[$intern_133] = $intern_248;
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, this$static.com_scrumzilla_client_ui_StoryTitlePanel_fMainPanel);
  this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_134] = $intern_249;
  this$static.com_scrumzilla_client_ui_StoryTitlePanel_fStoryLabel = com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), this$static.com_scrumzilla_client_ui_StoryTitlePanel_fStory.com_scrumzilla_client_model_Story_fStoryName);
  this$static.com_scrumzilla_client_ui_StoryTitlePanel_fStoryLabel.getStyleElement__()[$intern_133] = $intern_250;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_StoryTitlePanel_fMainPanel, this$static.com_scrumzilla_client_ui_StoryTitlePanel_fStoryLabel);
  com_scrumzilla_client_ui_StoryTitlePanel_$initUI__Lcom_scrumzilla_client_ui_StoryTitlePanel_2_removeStory_0 = com_google_gwt_user_client_ui_Button_$Button__Lcom_google_gwt_user_client_ui_Button_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Button(), $intern_251);
  com_scrumzilla_client_ui_StoryTitlePanel_$initUI__Lcom_scrumzilla_client_ui_StoryTitlePanel_2_removeStory_0.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_252;
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(com_scrumzilla_client_ui_StoryTitlePanel_$initUI__Lcom_scrumzilla_client_ui_StoryTitlePanel_2_removeStory_0, com_scrumzilla_client_ui_StoryTitlePanel$1_$StoryTitlePanel$1__Lcom_scrumzilla_client_ui_StoryTitlePanel$1_2(new com_scrumzilla_client_ui_StoryTitlePanel$1(), this$static), (com_google_gwt_event_dom_client_ClickEvent_$clinit__() , com_google_gwt_event_dom_client_ClickEvent_$clinit__() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_StoryTitlePanel_fMainPanel, com_scrumzilla_client_ui_StoryTitlePanel_$initUI__Lcom_scrumzilla_client_ui_StoryTitlePanel_2_removeStory_0);
  return this$static;
}

function com_scrumzilla_client_ui_StoryTitlePanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1StoryTitlePanel_12_1classLit;
}

function com_scrumzilla_client_ui_StoryTitlePanel(){
}

_ = com_scrumzilla_client_ui_StoryTitlePanel.prototype = new com_google_gwt_user_client_ui_Composite();
_.getClass__$ = com_scrumzilla_client_ui_StoryTitlePanel_getClass__;
_.java_lang_Object_typeId$ = 87;
_.com_scrumzilla_client_ui_StoryTitlePanel_fMainPanel = null;
_.com_scrumzilla_client_ui_StoryTitlePanel_fStory = null;
_.com_scrumzilla_client_ui_StoryTitlePanel_fStoryLabel = null;
function com_scrumzilla_client_ui_StoryTitlePanel$1_$StoryTitlePanel$1__Lcom_scrumzilla_client_ui_StoryTitlePanel$1_2(this$static, this$0){
  this$static.com_scrumzilla_client_ui_StoryTitlePanel$1_this$0 = this$0;
  return this$static;
}

function com_scrumzilla_client_ui_StoryTitlePanel$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1StoryTitlePanel$1_12_1classLit;
}

function com_scrumzilla_client_ui_StoryTitlePanel$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2(event){
  com_scrumzilla_client_controller_ScrumzillaController_$removeStory__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_controller_ScrumzillaControllerErrorHandler_2(this.com_scrumzilla_client_ui_StoryTitlePanel$1_this$0.com_scrumzilla_client_ui_StoryTitlePanel_fStory);
}

function com_scrumzilla_client_ui_StoryTitlePanel$1(){
}

_ = com_scrumzilla_client_ui_StoryTitlePanel$1.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_ui_StoryTitlePanel$1_getClass__;
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2 = com_scrumzilla_client_ui_StoryTitlePanel$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2;
_.java_lang_Object_typeId$ = 88;
_.com_scrumzilla_client_ui_StoryTitlePanel$1_this$0 = null;
function com_scrumzilla_client_ui_TaskPanel_$TaskPanel__Lcom_scrumzilla_client_ui_TaskPanel_2Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_taskcontribution_ScrumzillaTaskTypeContribution_2(this$static, controller, task){
  var com_scrumzilla_client_ui_TaskPanel_$initUI__Lcom_scrumzilla_client_ui_TaskPanel_2_buttonPanel_0, com_scrumzilla_client_ui_TaskPanel_$initUI__Lcom_scrumzilla_client_ui_TaskPanel_2_remove_0;
  this$static.com_scrumzilla_client_ui_TaskPanel_fTask = task;
  this$static.com_scrumzilla_client_ui_TaskPanel_fController = controller;
  this$static.com_scrumzilla_client_ui_TaskPanel_fMainPanel = com_google_gwt_user_client_ui_VerticalPanel_$VerticalPanel__Lcom_google_gwt_user_client_ui_VerticalPanel_2(new com_google_gwt_user_client_ui_VerticalPanel());
  this$static.com_scrumzilla_client_ui_TaskPanel_fMainPanel.getStyleElement__()[$intern_133] = $intern_253;
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, this$static.com_scrumzilla_client_ui_TaskPanel_fMainPanel);
  this$static.com_scrumzilla_client_ui_TaskPanel_fDragHandle = com_google_gwt_user_client_ui_Label_$Label__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Label(), $intern_254);
  this$static.com_scrumzilla_client_ui_TaskPanel_fDragHandle.getStyleElement__()[$intern_133] = $intern_255;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_TaskPanel_fMainPanel, this$static.com_scrumzilla_client_ui_TaskPanel_fDragHandle);
  com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_$initUI__Lcom_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_2(new com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI());
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_TaskPanel_fMainPanel, com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_$getSimpleTaskDisplayUI__Lcom_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskEditingUI_2Lcom_scrumzilla_client_model_Task_2(this$static.com_scrumzilla_client_ui_TaskPanel_fTask));
  com_scrumzilla_client_ui_TaskPanel_$initUI__Lcom_scrumzilla_client_ui_TaskPanel_2_buttonPanel_0 = com_google_gwt_user_client_ui_HorizontalPanel_$HorizontalPanel__Lcom_google_gwt_user_client_ui_HorizontalPanel_2(new com_google_gwt_user_client_ui_HorizontalPanel());
  com_scrumzilla_client_ui_TaskPanel_$initUI__Lcom_scrumzilla_client_ui_TaskPanel_2_remove_0 = com_google_gwt_user_client_ui_Button_$Button__Lcom_google_gwt_user_client_ui_Button_2Ljava_lang_String_2(new com_google_gwt_user_client_ui_Button(), $intern_256);
  com_scrumzilla_client_ui_TaskPanel_$initUI__Lcom_scrumzilla_client_ui_TaskPanel_2_remove_0.com_google_gwt_user_client_ui_UIObject_element[$intern_133] = $intern_257;
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2(com_scrumzilla_client_ui_TaskPanel_$initUI__Lcom_scrumzilla_client_ui_TaskPanel_2_remove_0, com_scrumzilla_client_ui_TaskPanel$1_$TaskPanel$1__Lcom_scrumzilla_client_ui_TaskPanel$1_2(new com_scrumzilla_client_ui_TaskPanel$1(), this$static), (com_google_gwt_event_dom_client_ClickEvent_$clinit__() , com_google_gwt_event_dom_client_ClickEvent_$clinit__() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(com_scrumzilla_client_ui_TaskPanel_$initUI__Lcom_scrumzilla_client_ui_TaskPanel_2_buttonPanel_0, com_scrumzilla_client_ui_TaskPanel_$initUI__Lcom_scrumzilla_client_ui_TaskPanel_2_remove_0);
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_TaskPanel_fMainPanel, com_scrumzilla_client_ui_TaskPanel_$initUI__Lcom_scrumzilla_client_ui_TaskPanel_2_buttonPanel_0);
  com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static.com_scrumzilla_client_ui_TaskPanel_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_EditedTaskEvent_$clinit__() , com_scrumzilla_client_events_EditedTaskEvent_TYPE), this$static);
  return this$static;
}

function com_scrumzilla_client_ui_TaskPanel_$cleanupTaskPanel__Lcom_scrumzilla_client_ui_TaskPanel_2(this$static){
  com_google_gwt_event_shared_HandlerManager_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static.com_scrumzilla_client_ui_TaskPanel_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_EditedTaskEvent_$clinit__() , com_scrumzilla_client_events_EditedTaskEvent_TYPE), this$static);
}

function com_scrumzilla_client_ui_TaskPanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1TaskPanel_12_1classLit;
}

function com_scrumzilla_client_ui_TaskPanel(){
}

_ = com_scrumzilla_client_ui_TaskPanel.prototype = new com_google_gwt_user_client_ui_Composite();
_.getClass__$ = com_scrumzilla_client_ui_TaskPanel_getClass__;
_.java_lang_Object_typeId$ = 89;
_.com_scrumzilla_client_ui_TaskPanel_fController = null;
_.com_scrumzilla_client_ui_TaskPanel_fDragHandle = null;
_.com_scrumzilla_client_ui_TaskPanel_fMainPanel = null;
_.com_scrumzilla_client_ui_TaskPanel_fTask = null;
function com_scrumzilla_client_ui_TaskPanel$1_$TaskPanel$1__Lcom_scrumzilla_client_ui_TaskPanel$1_2(this$static, this$0){
  this$static.com_scrumzilla_client_ui_TaskPanel$1_this$0 = this$0;
  return this$static;
}

function com_scrumzilla_client_ui_TaskPanel$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1TaskPanel$1_12_1classLit;
}

function com_scrumzilla_client_ui_TaskPanel$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2(event){
  com_scrumzilla_client_controller_ScrumzillaController_$removeTaskFromModel__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_controller_ScrumzillaControllerErrorHandler_2(this.com_scrumzilla_client_ui_TaskPanel$1_this$0.com_scrumzilla_client_ui_TaskPanel_fTask);
}

function com_scrumzilla_client_ui_TaskPanel$1(){
}

_ = com_scrumzilla_client_ui_TaskPanel$1.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_ui_TaskPanel$1_getClass__;
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2 = com_scrumzilla_client_ui_TaskPanel$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2;
_.java_lang_Object_typeId$ = 90;
_.com_scrumzilla_client_ui_TaskPanel$1_this$0 = null;
function com_scrumzilla_client_ui_TasksInStatePanel_$TasksInStatePanel__Lcom_scrumzilla_client_ui_TasksInStatePanel_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_model_Task$TaskState_2Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2(this$static, story, taskState, dragController, controller, taskTypeRegistry){
  this$static.com_scrumzilla_client_ui_TasksInStatePanel_fController = controller;
  this$static.com_scrumzilla_client_ui_TasksInStatePanel_fTaskTypeRegistry = taskTypeRegistry;
  this$static.com_scrumzilla_client_ui_TasksInStatePanel_fState = taskState;
  this$static.com_scrumzilla_client_ui_TasksInStatePanel_fStory = story;
  this$static.com_scrumzilla_client_ui_TasksInStatePanel_fPanel = com_google_gwt_user_client_ui_HorizontalPanel_$HorizontalPanel__Lcom_google_gwt_user_client_ui_HorizontalPanel_2(new com_google_gwt_user_client_ui_HorizontalPanel());
  this$static.com_scrumzilla_client_ui_TasksInStatePanel_fPanel.getStyleElement__()[$intern_133] = $intern_258;
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2(this$static, this$static.com_scrumzilla_client_ui_TasksInStatePanel_fPanel);
  this$static.com_scrumzilla_client_ui_TasksInStatePanel_fDragController = dragController;
  this$static.com_scrumzilla_client_ui_TasksInStatePanel_fDropController = com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_$TasksInStatePanel$TaskListDropController__Lcom_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_2Lcom_google_gwt_user_client_ui_IndexedPanel_2Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_model_Task$TaskState_2(new com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController(), this$static.com_scrumzilla_client_ui_TasksInStatePanel_fPanel, this$static.com_scrumzilla_client_ui_TasksInStatePanel_fStory, this$static.com_scrumzilla_client_ui_TasksInStatePanel_fState);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(dragController.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropControllerList, this$static.com_scrumzilla_client_ui_TasksInStatePanel_fDropController);
  com_scrumzilla_client_ui_TasksInStatePanel_$initUI__Lcom_scrumzilla_client_ui_TasksInStatePanel_2(this$static);
  com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static.com_scrumzilla_client_ui_TasksInStatePanel_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_EditedTaskEvent_$clinit__() , com_scrumzilla_client_events_EditedTaskEvent_TYPE), this$static);
  com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static.com_scrumzilla_client_ui_TasksInStatePanel_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_AddedTaskEvent_$clinit__() , com_scrumzilla_client_events_AddedTaskEvent_TYPE), this$static);
  com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this$static.com_scrumzilla_client_ui_TasksInStatePanel_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_RemovedTaskFromStoryEvent_$clinit__() , com_scrumzilla_client_events_RemovedTaskFromStoryEvent_TYPE), this$static);
  return this$static;
}

function com_scrumzilla_client_ui_TasksInStatePanel_$cleanupTasksPanel__Lcom_scrumzilla_client_ui_TasksInStatePanel_2(this$static){
  var i, w;
  for (i = 0; i < this$static.com_scrumzilla_client_ui_TasksInStatePanel_fPanel.com_google_gwt_user_client_ui_ComplexPanel_children.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    w = com_google_gwt_user_client_ui_WidgetCollection_$get__Lcom_google_gwt_user_client_ui_WidgetCollection_2I(this$static.com_scrumzilla_client_ui_TasksInStatePanel_fPanel.com_google_gwt_user_client_ui_ComplexPanel_children, i);
    if (w != null && com_google_gwt_lang_Cast_canCast__II(w.java_lang_Object_typeId$, 46)) {
      com_allen_1sauer_gwt_dnd_client_AbstractDragController_$makeNotDraggable__Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_TasksInStatePanel_fDragController, w);
      com_scrumzilla_client_ui_TaskPanel_$cleanupTaskPanel__Lcom_scrumzilla_client_ui_TaskPanel_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(w, 46));
    }
  }
}

function com_scrumzilla_client_ui_TasksInStatePanel_$initUI__Lcom_scrumzilla_client_ui_TasksInStatePanel_2(this$static){
  var addedTask, task, task$iterator, taskPanel, tasksForStory;
  tasksForStory = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getTasksForStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2(this$static.com_scrumzilla_client_ui_TasksInStatePanel_fStory);
  addedTask = false;
  for (task$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), tasksForStory); task$iterator.java_util_AbstractList$IteratorImpl_i < task$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    task = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(task$iterator), 45);
    if (task.com_scrumzilla_client_model_Task_fTaskState == this$static.com_scrumzilla_client_ui_TasksInStatePanel_fState) {
      taskPanel = com_scrumzilla_client_ui_TaskPanel_$TaskPanel__Lcom_scrumzilla_client_ui_TaskPanel_2Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_taskcontribution_ScrumzillaTaskTypeContribution_2(new com_scrumzilla_client_ui_TaskPanel(), this$static.com_scrumzilla_client_ui_TasksInStatePanel_fController, task, com_scrumzilla_client_ScrumzillaTaskTypeRegistry_$lookupTaskType__Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2Ljava_lang_String_2(this$static.com_scrumzilla_client_ui_TasksInStatePanel_fTaskTypeRegistry, task.com_scrumzilla_client_model_Task_fTaskType));
      com_allen_1sauer_gwt_dnd_client_AbstractDragController_$makeDraggable__Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_TasksInStatePanel_fDragController, taskPanel, taskPanel.com_scrumzilla_client_ui_TaskPanel_fDragHandle);
      com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2(this$static.com_scrumzilla_client_ui_TasksInStatePanel_fPanel, taskPanel);
      addedTask = true;
    }
  }
  if (addedTask) {
    this$static.com_scrumzilla_client_ui_TasksInStatePanel_fPanel.getStyleElement__()[$intern_133] = $intern_259;
  }
   else {
    this$static.com_scrumzilla_client_ui_TasksInStatePanel_fPanel.getStyleElement__()[$intern_133] = $intern_260;
  }
}

function com_scrumzilla_client_ui_TasksInStatePanel_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1TasksInStatePanel_12_1classLit;
}

function com_scrumzilla_client_ui_TasksInStatePanel_onDetach__(){
  com_scrumzilla_client_ui_TasksInStatePanel_$cleanupTasksPanel__Lcom_scrumzilla_client_ui_TasksInStatePanel_2(this);
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2(this.com_scrumzilla_client_ui_TasksInStatePanel_fDragController.com_allen_1sauer_gwt_dnd_client_PickupDragController_dropControllerList, this.com_scrumzilla_client_ui_TasksInStatePanel_fDropController);
  com_google_gwt_event_shared_HandlerManager_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this.com_scrumzilla_client_ui_TasksInStatePanel_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_EditedTaskEvent_$clinit__() , com_scrumzilla_client_events_EditedTaskEvent_TYPE), this);
  com_google_gwt_event_shared_HandlerManager_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this.com_scrumzilla_client_ui_TasksInStatePanel_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_AddedTaskEvent_$clinit__() , com_scrumzilla_client_events_AddedTaskEvent_TYPE), this);
  com_google_gwt_event_shared_HandlerManager_$removeHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(this.com_scrumzilla_client_ui_TasksInStatePanel_fController.com_scrumzilla_client_controller_ScrumzillaController_fHandlerManager, (com_scrumzilla_client_events_RemovedTaskFromStoryEvent_$clinit__() , com_scrumzilla_client_events_RemovedTaskFromStoryEvent_TYPE), this);
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2(this.com_google_gwt_user_client_ui_Composite_widget);
}

function com_scrumzilla_client_ui_TasksInStatePanel(){
}

_ = com_scrumzilla_client_ui_TasksInStatePanel.prototype = new com_google_gwt_user_client_ui_Composite();
_.getClass__$ = com_scrumzilla_client_ui_TasksInStatePanel_getClass__;
_.onDetach__ = com_scrumzilla_client_ui_TasksInStatePanel_onDetach__;
_.java_lang_Object_typeId$ = 91;
_.com_scrumzilla_client_ui_TasksInStatePanel_fController = null;
_.com_scrumzilla_client_ui_TasksInStatePanel_fDragController = null;
_.com_scrumzilla_client_ui_TasksInStatePanel_fDropController = null;
_.com_scrumzilla_client_ui_TasksInStatePanel_fPanel = null;
_.com_scrumzilla_client_ui_TasksInStatePanel_fState = null;
_.com_scrumzilla_client_ui_TasksInStatePanel_fStory = null;
_.com_scrumzilla_client_ui_TasksInStatePanel_fTaskTypeRegistry = null;
function com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_$clinit__(){
  com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_$clinit__ = nullMethod;
  com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_$clinit__();
}

function com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_$TasksInStatePanel$TaskListDropController__Lcom_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_2Lcom_google_gwt_user_client_ui_IndexedPanel_2Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_model_Task$TaskState_2(this$static, dropTarget, targetStory, state){
  com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_$clinit__();
  com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_$IndexedDropController__Lcom_allen_1sauer_gwt_dnd_client_drop_IndexedDropController_2Lcom_google_gwt_user_client_ui_IndexedPanel_2(this$static, dropTarget);
  this$static.com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_fTargetStory = targetStory;
  this$static.com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_fTargetState = state;
  return this$static;
}

function com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1TasksInStatePanel$TaskListDropController_12_1classLit;
}

function com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(context){
  var task, tp;
  com_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_$onDrop__Lcom_allen_1sauer_gwt_dnd_client_drop_AbstractIndexedDropController_2Lcom_allen_1sauer_gwt_dnd_client_DragContext_2(this, context);
  if (context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable) {
    tp = context.com_allen_1sauer_gwt_dnd_client_DragContext_draggable;
    task = tp.com_scrumzilla_client_ui_TaskPanel_fTask;
    if (!com_scrumzilla_client_model_Story_$equals__Lcom_scrumzilla_client_model_Story_2Ljava_lang_Object_2(task.com_scrumzilla_client_model_Task_fStory, this.com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_fTargetStory)) {
      com_scrumzilla_client_controller_ScrumzillaController_$moveTaskToStory__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_model_Task_2(this.com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_fTargetStory, task);
    }
    com_scrumzilla_client_controller_ScrumzillaController_$changeTaskState__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_model_Task$TaskState_2(task, this.com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_fTargetState);
  }
}

function com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController(){
}

_ = com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController.prototype = new com_allen_1sauer_gwt_dnd_client_drop_IndexedDropController();
_.getClass__$ = com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_getClass__;
_.onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2 = com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_onDrop__Lcom_allen_1sauer_gwt_dnd_client_DragContext_2;
_.java_lang_Object_typeId$ = 92;
_.com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_fTargetState = null;
_.com_scrumzilla_client_ui_TasksInStatePanel$TaskListDropController_fTargetStory = null;
function org_cobogw_gwt_waveapi_gadget_client_WaveGadget_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lorg_1cobogw_1gwt_1waveapi_1gadget_1client_1WaveGadget_12_1classLit;
}

function org_cobogw_gwt_waveapi_gadget_client_WaveGadget_initializeFeature__Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2(feature){
  this.org_cobogw_gwt_waveapi_gadget_client_WaveGadget_wave = feature;
}

function org_cobogw_gwt_waveapi_gadget_client_WaveGadget(){
}

_ = org_cobogw_gwt_waveapi_gadget_client_WaveGadget.prototype = new com_google_gwt_gadgets_client_Gadget();
_.getClass__$ = org_cobogw_gwt_waveapi_gadget_client_WaveGadget_getClass__;
_.initializeFeature__Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2 = org_cobogw_gwt_waveapi_gadget_client_WaveGadget_initializeFeature__Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2;
_.java_lang_Object_typeId$ = 0;
_.org_cobogw_gwt_waveapi_gadget_client_WaveGadget_wave = null;
function com_scrumzilla_client_wave_ScrumzillaWaveGadget_$init__Lcom_scrumzilla_client_wave_ScrumzillaWaveGadget_2Lcom_google_gwt_gadgets_client_UserPreferences_2(this$static){
  var registry, scrumzillaHandlerManager, scrumzillaUI;
  registry = com_scrumzilla_client_ScrumzillaTaskTypeRegistry_$ScrumzillaTaskTypeRegistry__Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2(new com_scrumzilla_client_ScrumzillaTaskTypeRegistry());
  com_scrumzilla_client_ScrumzillaTaskTypeRegistry_$registerTaskType__Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2Lcom_scrumzilla_client_taskcontribution_ScrumzillaTaskTypeContribution_2(registry, new com_scrumzilla_client_taskcontribution_local_ScrumzillaLocalTaskTypeContribution());
  scrumzillaHandlerManager = com_google_gwt_event_shared_HandlerManager_$HandlerManager__Lcom_google_gwt_event_shared_HandlerManager_2Ljava_lang_Object_2(new com_google_gwt_event_shared_HandlerManager(), this$static);
  scrumzillaUI = com_scrumzilla_client_ui_ScrumzillaUI_$ScrumzillaUI__Lcom_scrumzilla_client_ui_ScrumzillaUI_2Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_ScrumzillaTaskTypeRegistry_2(new com_scrumzilla_client_ui_ScrumzillaUI(), com_scrumzilla_client_controller_ScrumzillaController_$ScrumzillaController__Lcom_scrumzilla_client_controller_ScrumzillaController_2Lcom_scrumzilla_client_ScrumzillaModel_2Lcom_google_gwt_event_shared_HandlerManager_2Lcom_scrumzilla_client_events_ScrumzillaEventDispatcher_2(new com_scrumzilla_client_controller_ScrumzillaController(), scrumzillaHandlerManager), registry);
  org_cobogw_gwt_waveapi_gadget_client_WaveFeature_$addStateUpdateEventHandler__Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2Lorg_cobogw_gwt_waveapi_gadget_client_StateUpdateEventHandler_2(this$static.org_cobogw_gwt_waveapi_gadget_client_WaveGadget_wave, com_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler_$ScrumzillaWaveStateUpdateHandler__Lcom_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler_2Lcom_google_gwt_event_shared_HandlerManager_2(new com_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler(), scrumzillaHandlerManager));
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2((com_google_gwt_user_client_ui_RootPanel_$clinit__() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2(null)), scrumzillaUI);
  if (this$static.com_scrumzilla_client_wave_ScrumzillaWaveGadget_fDynamicHeightFeature) {
    $wnd._IG_AdjustIFrameHeight();
  }
  com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(scrumzillaHandlerManager, (com_scrumzilla_client_events_ModelChangedEvent_$clinit__() , com_scrumzilla_client_events_ModelChangedEvent_TYPE), com_scrumzilla_client_wave_ScrumzillaWaveGadget$1_$ScrumzillaWaveGadget$1__Lcom_scrumzilla_client_wave_ScrumzillaWaveGadget$1_2(new com_scrumzilla_client_wave_ScrumzillaWaveGadget$1(), this$static));
}

function com_scrumzilla_client_wave_ScrumzillaWaveGadget_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1wave_1ScrumzillaWaveGadget_12_1classLit;
}

function com_scrumzilla_client_wave_ScrumzillaWaveGadget_initializeFeature__Lcom_google_gwt_gadgets_client_DynamicHeightFeature_2(feature){
  this.com_scrumzilla_client_wave_ScrumzillaWaveGadget_fDynamicHeightFeature = feature;
}

function com_scrumzilla_client_wave_ScrumzillaWaveGadget(){
}

_ = com_scrumzilla_client_wave_ScrumzillaWaveGadget.prototype = new org_cobogw_gwt_waveapi_gadget_client_WaveGadget();
_.getClass__$ = com_scrumzilla_client_wave_ScrumzillaWaveGadget_getClass__;
_.initializeFeature__Lcom_google_gwt_gadgets_client_DynamicHeightFeature_2 = com_scrumzilla_client_wave_ScrumzillaWaveGadget_initializeFeature__Lcom_google_gwt_gadgets_client_DynamicHeightFeature_2;
_.java_lang_Object_typeId$ = 0;
_.com_scrumzilla_client_wave_ScrumzillaWaveGadget_fDynamicHeightFeature = null;
function com_scrumzilla_client_wave_ScrumzillaWaveGadget$1_$ScrumzillaWaveGadget$1__Lcom_scrumzilla_client_wave_ScrumzillaWaveGadget$1_2(this$static, this$0){
  this$static.com_scrumzilla_client_wave_ScrumzillaWaveGadget$1_this$0 = this$0;
  return this$static;
}

function com_scrumzilla_client_wave_ScrumzillaWaveGadget$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1wave_1ScrumzillaWaveGadget$1_12_1classLit;
}

function com_scrumzilla_client_wave_ScrumzillaWaveGadget$1_modelChanged__Lcom_scrumzilla_client_events_ModelChangedEvent_2(modelChangedEvent){
  if (this.com_scrumzilla_client_wave_ScrumzillaWaveGadget$1_this$0.com_scrumzilla_client_wave_ScrumzillaWaveGadget_fDynamicHeightFeature) {
    $wnd._IG_AdjustIFrameHeight();
  }
}

function com_scrumzilla_client_wave_ScrumzillaWaveGadget$1(){
}

_ = com_scrumzilla_client_wave_ScrumzillaWaveGadget$1.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_wave_ScrumzillaWaveGadget$1_getClass__;
_.modelChanged__Lcom_scrumzilla_client_events_ModelChangedEvent_2 = com_scrumzilla_client_wave_ScrumzillaWaveGadget$1_modelChanged__Lcom_scrumzilla_client_events_ModelChangedEvent_2;
_.java_lang_Object_typeId$ = 93;
_.com_scrumzilla_client_wave_ScrumzillaWaveGadget$1_this$0 = null;
function com_scrumzilla_client_wave_ScrumzillaWaveGadgetGadgetImpl_$ScrumzillaWaveGadgetGadgetImpl__Lcom_scrumzilla_client_wave_ScrumzillaWaveGadgetGadgetImpl_2(this$static){
  this$static.initializeFeature__Lcom_google_gwt_gadgets_client_DynamicHeightFeature_2(new com_google_gwt_gadgets_client_DynamicHeightFeature());
  this$static.initializeFeature__Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2(new org_cobogw_gwt_waveapi_gadget_client_WaveFeature());
  com_scrumzilla_client_wave_ScrumzillaWaveGadget_$init__Lcom_scrumzilla_client_wave_ScrumzillaWaveGadget_2Lcom_google_gwt_gadgets_client_UserPreferences_2(this$static);
  return this$static;
}

function com_scrumzilla_client_wave_ScrumzillaWaveGadgetGadgetImpl_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1wave_1ScrumzillaWaveGadgetGadgetImpl_12_1classLit;
}

function com_scrumzilla_client_wave_ScrumzillaWaveGadgetGadgetImpl(){
}

_ = com_scrumzilla_client_wave_ScrumzillaWaveGadgetGadgetImpl.prototype = new com_scrumzilla_client_wave_ScrumzillaWaveGadget();
_.getClass__$ = com_scrumzilla_client_wave_ScrumzillaWaveGadgetGadgetImpl_getClass__;
_.java_lang_Object_typeId$ = 0;
function com_scrumzilla_client_wave_ScrumzillaWaveModel_$doesStoryExist__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2Lcom_scrumzilla_client_ScrumzillaModel$AsynchResult_2(s, asynchResult){
  var sprintStories, story, story$iterator;
  sprintStories = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getSprintStories__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2();
  for (story$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), sprintStories); story$iterator.java_util_AbstractList$IteratorImpl_i < story$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    story = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(story$iterator), 44);
    if (com_scrumzilla_client_model_Story_$equals__Lcom_scrumzilla_client_model_Story_2Ljava_lang_Object_2(story, s)) {
      asynchResult.result__Ljava_lang_Object_2((java_lang_Boolean_$clinit__() , java_lang_Boolean_TRUE));
      return;
    }
  }
  asynchResult.result__Ljava_lang_Object_2((java_lang_Boolean_$clinit__() , java_lang_Boolean_FALSE));
}

function com_scrumzilla_client_wave_ScrumzillaWaveModel_$doesTaskExist__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_ScrumzillaModel$AsynchResult_2(t, asynchResult){
  var waveList, waveTask, waveTask$iterator;
  waveList = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2($intern_210);
  for (waveTask$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), waveList); waveTask$iterator.java_util_AbstractList$IteratorImpl_i < waveTask$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    waveTask = com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(waveTask$iterator));
    if (com_scrumzilla_client_model_Task_$equals__Lcom_scrumzilla_client_model_Task_2Ljava_lang_Object_2(com_scrumzilla_client_wave_WaveTask_$toTask__Lcom_scrumzilla_client_wave_WaveTask_2(waveTask), t)) {
      asynchResult.result__Ljava_lang_Object_2((java_lang_Boolean_$clinit__() , java_lang_Boolean_TRUE));
      return;
    }
  }
  asynchResult.result__Ljava_lang_Object_2((java_lang_Boolean_$clinit__() , java_lang_Boolean_FALSE));
}

function com_scrumzilla_client_wave_ScrumzillaWaveModel_$getSprintStories__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2(){
  var toReturn, waveStories, ws, ws$iterator;
  toReturn = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  waveStories = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2($intern_212);
  for (ws$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), waveStories); ws$iterator.java_util_AbstractList$IteratorImpl_i < ws$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    ws = com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(ws$iterator));
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(toReturn, com_scrumzilla_client_model_Story_$Story__Lcom_scrumzilla_client_model_Story_2Ljava_lang_String_2(new com_scrumzilla_client_model_Story(), ws.StoryName));
  }
  return toReturn;
}

function com_scrumzilla_client_wave_ScrumzillaWaveModel_$getSprintTasks__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2(){
  var toReturn, waveTasks, wt, wt$iterator;
  toReturn = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  waveTasks = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2($intern_210);
  for (wt$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), waveTasks); wt$iterator.java_util_AbstractList$IteratorImpl_i < wt$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    wt = com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(wt$iterator));
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(toReturn, com_scrumzilla_client_wave_WaveTask_$toTask__Lcom_scrumzilla_client_wave_WaveTask_2(wt));
  }
  return toReturn;
}

function com_scrumzilla_client_wave_ScrumzillaWaveModel_$getTasksForStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2(story){
  var allTasks, task, task$iterator, toReturn;
  toReturn = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  allTasks = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getSprintTasks__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2();
  for (task$iterator = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), allTasks); task$iterator.java_util_AbstractList$IteratorImpl_i < task$iterator.java_util_AbstractList$IteratorImpl_this$0.size__();) {
    task = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(task$iterator), 45);
    if (com_scrumzilla_client_model_Story_$equals__Lcom_scrumzilla_client_model_Story_2Ljava_lang_Object_2(story, task.com_scrumzilla_client_model_Task_fStory)) {
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(toReturn.java_util_ArrayList_array, toReturn.java_util_ArrayList_size++, task);
    }
  }
  return toReturn;
}

function com_scrumzilla_client_wave_ScrumzillaWaveModel_$getWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2(key){
  var array, i, jsonValue, storyListJSONValue, string, waveTasks, wt;
  waveTasks = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  string = com_scrumzilla_client_wave_WaveStateWrapper_$get__Lcom_scrumzilla_client_wave_WaveStateWrapper_2Ljava_lang_String_2(key);
  if (string == null || java_lang_String_$trim__Ljava_lang_String_2(string).length == 0) {
    string = $intern_261;
  }
  storyListJSONValue = com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2(string);
  if (storyListJSONValue.isArray__()) {
    array = storyListJSONValue.isArray__();
    for (i = 0; i < array.com_google_gwt_json_client_JSONArray_jsArray.length; ++i) {
      jsonValue = com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2I(array, i);
      if (jsonValue.isObject__()) {
        wt = jsonValue.isObject__().com_google_gwt_json_client_JSONObject_jsObject;
        com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(waveTasks.java_util_ArrayList_array, waveTasks.java_util_ArrayList_size++, wt);
      }
    }
  }
  return waveTasks;
}

function com_scrumzilla_client_wave_ScrumzillaWaveModel_$removeStory__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Story_2(story){
  var i, waveStories, ws;
  waveStories = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2($intern_212);
  for (i = 0; i < waveStories.java_util_ArrayList_size; ++i) {
    ws = com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2((java_util_AbstractList_checkIndex__II(i, waveStories.java_util_ArrayList_size) , waveStories.java_util_ArrayList_array[i]));
    if (com_scrumzilla_client_model_Story_$equals__Lcom_scrumzilla_client_model_Story_2Ljava_lang_Object_2(com_scrumzilla_client_model_Story_$Story__Lcom_scrumzilla_client_model_Story_2Ljava_lang_String_2(new com_scrumzilla_client_model_Story(), ws.StoryName), story)) {
      java_util_ArrayList_$remove__Ljava_util_ArrayList_2I(waveStories, i);
      break;
    }
  }
  com_scrumzilla_client_wave_ScrumzillaWaveModel_$storeWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2Ljava_util_List_2($intern_212, waveStories);
}

function com_scrumzilla_client_wave_ScrumzillaWaveModel_$removeTask__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2(task){
  var i, waveTasks, wt;
  waveTasks = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2($intern_210);
  for (i = 0; i < waveTasks.java_util_ArrayList_size; ++i) {
    wt = com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2((java_util_AbstractList_checkIndex__II(i, waveTasks.java_util_ArrayList_size) , waveTasks.java_util_ArrayList_array[i]));
    if (com_scrumzilla_client_model_Task_$equals__Lcom_scrumzilla_client_model_Task_2Ljava_lang_Object_2(com_scrumzilla_client_wave_WaveTask_$toTask__Lcom_scrumzilla_client_wave_WaveTask_2(wt), task)) {
      java_util_ArrayList_$remove__Ljava_util_ArrayList_2I(waveTasks, i);
      break;
    }
  }
  com_scrumzilla_client_wave_ScrumzillaWaveModel_$storeWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2Ljava_util_List_2($intern_210, waveTasks);
}

function com_scrumzilla_client_wave_ScrumzillaWaveModel_$storeWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2Ljava_util_List_2(key, waveTasks){
  var array, delta, i, outputArray, outputJSON;
  outputArray = [];
  array = com_google_gwt_json_client_JSONArray_$JSONArray__Lcom_google_gwt_json_client_JSONArray_2Lcom_google_gwt_core_client_JavaScriptObject_2(new com_google_gwt_json_client_JSONArray(), outputArray);
  for (i = 0; i < waveTasks.java_util_ArrayList_size; ++i) {
    com_google_gwt_json_client_JSONArray_$set__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, i, com_google_gwt_json_client_JSONObject_$JSONObject__Lcom_google_gwt_json_client_JSONObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(new com_google_gwt_json_client_JSONObject(), com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2((java_util_AbstractList_checkIndex__II(i, waveTasks.java_util_ArrayList_size) , waveTasks.java_util_ArrayList_array[i]))));
  }
  delta = java_util_HashMap_$HashMap__Ljava_util_HashMap_2(new java_util_HashMap());
  outputJSON = com_google_gwt_json_client_JSONArray_$toString__Lcom_google_gwt_json_client_JSONArray_2(array);
  key == null?java_util_AbstractHashMap_$putNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(delta, outputJSON):key != null?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(delta, key, outputJSON):java_util_AbstractHashMap_$putHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2I(delta, key, outputJSON, ~~java_lang_String$HashCache_getHashCode__Ljava_lang_String_2(key));
  com_scrumzilla_client_wave_WaveStateWrapper_$submitDelta__Lcom_scrumzilla_client_wave_WaveStateWrapper_2Ljava_util_HashMap_2(delta);
}

function com_scrumzilla_client_wave_ScrumzillaWaveModel_$taskModified__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Lcom_scrumzilla_client_model_Task_2(task){
  var i, newTask, waveTasks, java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2_previous_0;
  waveTasks = com_scrumzilla_client_wave_ScrumzillaWaveModel_$getWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2($intern_210);
  newTask = {};
  com_scrumzilla_client_wave_WaveTask_$fromTask__Lcom_scrumzilla_client_wave_WaveTask_2Lcom_scrumzilla_client_model_Task_2(newTask, task);
  for (i = 0; i < waveTasks.java_util_ArrayList_size; ++i) {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2((java_util_AbstractList_checkIndex__II(i, waveTasks.java_util_ArrayList_size) , waveTasks.java_util_ArrayList_array[i])).UniqueID, task.com_scrumzilla_client_model_Task_fUniqueID)) {
      java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2_previous_0 = (java_util_AbstractList_checkIndex__II(i, waveTasks.java_util_ArrayList_size) , waveTasks.java_util_ArrayList_array[i]);
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(waveTasks.java_util_ArrayList_array, i, newTask);
      break;
    }
  }
  com_scrumzilla_client_wave_ScrumzillaWaveModel_$storeWaveList__Lcom_scrumzilla_client_wave_ScrumzillaWaveModel_2Ljava_lang_String_2Ljava_util_List_2($intern_210, waveTasks);
}

function com_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler_$ScrumzillaWaveStateUpdateHandler__Lcom_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler_2Lcom_google_gwt_event_shared_HandlerManager_2(this$static, scrumzillaHandlerManager){
  this$static.com_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler_fApplicationHandlerManager = scrumzillaHandlerManager;
  return this$static;
}

function com_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1wave_1ScrumzillaWaveStateUpdateHandler_12_1classLit;
}

function com_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler(){
}

_ = com_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler.prototype = new java_lang_Object();
_.getClass__$ = com_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler_getClass__;
_.java_lang_Object_typeId$ = 94;
_.com_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler_fApplicationHandlerManager = null;
function com_scrumzilla_client_wave_State_$submitDelta__Lcom_scrumzilla_client_wave_State_2Ljava_util_HashMap_2(this$static, delta){
  var jsDelta, key, key$iterator, java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2_entrySet_0, java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0, java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2_entry_0;
  jsDelta = {};
  for (key$iterator = (java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0 = java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2(new java_util_AbstractHashMap$EntrySetIterator(), (java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2_entrySet_0 = java_util_AbstractHashMap$EntrySet_$AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap$EntrySet_2(new java_util_AbstractHashMap$EntrySet(), delta) , java_util_AbstractMap$1_$AbstractMap$1__Ljava_util_AbstractMap$1_2(new java_util_AbstractMap$1(), delta, java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2_entrySet_0)).java_util_AbstractMap$1_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0) , java_util_AbstractMap$1$1_$AbstractMap$1$1__Ljava_util_AbstractMap$1$1_2(new java_util_AbstractMap$1$1(), java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0)); java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2(key$iterator.java_util_AbstractMap$1$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter);) {
    key = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I((java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2_entry_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(key$iterator.java_util_AbstractMap$1$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter), 49) , java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2_entry_0.getKey__()), 1);
    com_scrumzilla_client_wave_State$JsMap_$unsafePut__Lcom_scrumzilla_client_wave_State$JsMap_2Ljava_lang_String_2Ljava_lang_Object_2(jsDelta, key, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(key == null?delta.java_util_AbstractHashMap_nullSlot:key != null?delta.java_util_AbstractHashMap_stringMap[$intern_73 + key]:java_util_AbstractHashMap_$getHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2I(delta, key, ~~java_lang_String$HashCache_getHashCode__Ljava_lang_String_2(key)), 1));
  }
  this$static.submitDelta(jsDelta);
}

function com_scrumzilla_client_wave_State$JsMap_$unsafePut__Lcom_scrumzilla_client_wave_State$JsMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key, value){
  var oldValue = this$static[key] || null;
  this$static[key] = value;
  return oldValue || value;
}

function com_scrumzilla_client_wave_WaveStateWrapper_$get__Lcom_scrumzilla_client_wave_WaveStateWrapper_2Ljava_lang_String_2(key){
  var s;
  s = $wnd.wave.getState();
  if (!s) {
    return null;
  }
   else {
    return s.get(key);
  }
}

function com_scrumzilla_client_wave_WaveStateWrapper_$submitDelta__Lcom_scrumzilla_client_wave_WaveStateWrapper_2Ljava_util_HashMap_2(delta){
  var s;
  s = $wnd.wave.getState();
  if (s) {
    com_scrumzilla_client_wave_State_$submitDelta__Lcom_scrumzilla_client_wave_State_2Ljava_util_HashMap_2(s, delta);
  }
}

function com_scrumzilla_client_wave_WaveTask_$fromTask__Lcom_scrumzilla_client_wave_WaveTask_2Lcom_scrumzilla_client_model_Task_2(this$static, t){
  var ws;
  this$static.TaskType = t.com_scrumzilla_client_model_Task_fTaskType;
  this$static.UniqueID = t.com_scrumzilla_client_model_Task_fUniqueID;
  this$static.TaskDescription = t.com_scrumzilla_client_model_Task_fDescription;
  this$static.TaskState = t.com_scrumzilla_client_model_Task_fTaskState.java_lang_Enum_name;
  ws = {};
  ws.StoryName = t.com_scrumzilla_client_model_Task_fStory.com_scrumzilla_client_model_Story_fStoryName;
  this$static.TaskStory = ws;
}

function com_scrumzilla_client_wave_WaveTask_$toTask__Lcom_scrumzilla_client_wave_WaveTask_2(this$static){
  var t, ts;
  t = com_scrumzilla_client_model_Task_$Task__Lcom_scrumzilla_client_model_Task_2Ljava_lang_String_2Ljava_lang_String_2(new com_scrumzilla_client_model_Task(), this$static.TaskType, this$static.UniqueID);
  com_scrumzilla_client_model_Task_$setDescription__Lcom_scrumzilla_client_model_Task_2Ljava_lang_String_2(t, this$static.TaskDescription);
  ts = (com_scrumzilla_client_model_Task$TaskState_$clinit__() , java_lang_Enum_valueOf__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_scrumzilla_client_model_Task$TaskState_enum$map, this$static.TaskState));
  com_scrumzilla_client_model_Task_$setTaskState__Lcom_scrumzilla_client_model_Task_2Lcom_scrumzilla_client_model_Task$TaskState_2(t, ts);
  t.com_scrumzilla_client_model_Task_fStory = com_scrumzilla_client_model_Story_$Story__Lcom_scrumzilla_client_model_Story_2Ljava_lang_String_2(new com_scrumzilla_client_model_Story(), this$static.TaskStory.StoryName);
  return t;
}

function java_lang_ArithmeticException_$ArithmeticException__Ljava_lang_ArithmeticException_2Ljava_lang_String_2(this$static, explanation){
  this$static.java_lang_Throwable_detailMessage = explanation;
  return this$static;
}

function java_lang_ArithmeticException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArithmeticException_12_1classLit;
}

function java_lang_ArithmeticException(){
}

_ = java_lang_ArithmeticException.prototype = new java_lang_RuntimeException();
_.getClass__$ = java_lang_ArithmeticException_getClass__;
_.java_lang_Object_typeId$ = 95;
function java_lang_ArrayStoreException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayStoreException_12_1classLit;
}

function java_lang_ArrayStoreException(){
}

_ = java_lang_ArrayStoreException.prototype = new java_lang_RuntimeException();
_.getClass__$ = java_lang_ArrayStoreException_getClass__;
_.java_lang_Object_typeId$ = 96;
function java_lang_Boolean_$clinit__(){
  java_lang_Boolean_$clinit__ = nullMethod;
  java_lang_Boolean_FALSE = java_lang_Boolean_$Boolean__Ljava_lang_Boolean_2Z(new java_lang_Boolean(), false);
  java_lang_Boolean_TRUE = java_lang_Boolean_$Boolean__Ljava_lang_Boolean_2Z(new java_lang_Boolean(), true);
}

function java_lang_Boolean_$Boolean__Ljava_lang_Boolean_2Z(this$static, value){
  java_lang_Boolean_$clinit__();
  this$static.java_lang_Boolean_value = value;
  return this$static;
}

function java_lang_Boolean_compareTo__Ljava_lang_Boolean_2(other){
  return this.java_lang_Boolean_value == other.java_lang_Boolean_value?0:this.java_lang_Boolean_value?1:-1;
}

function java_lang_Boolean_equals__Ljava_lang_Object_2(o){
  return o != null && com_google_gwt_lang_Cast_canCast__II(o.java_lang_Object_typeId$, 47) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(o, 47).java_lang_Boolean_value == this.java_lang_Boolean_value;
}

function java_lang_Boolean_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit;
}

function java_lang_Boolean_hashCode__(){
  return this.java_lang_Boolean_value?1231:1237;
}

function java_lang_Boolean_toString__(){
  return this.java_lang_Boolean_value?$intern_180:$intern_262;
}

function java_lang_Boolean(){
}

_ = java_lang_Boolean.prototype = new java_lang_Object();
_.compareTo__Ljava_lang_Object_2$ = java_lang_Boolean_compareTo__Ljava_lang_Boolean_2;
_.equals__Ljava_lang_Object_2$ = java_lang_Boolean_equals__Ljava_lang_Object_2;
_.getClass__$ = java_lang_Boolean_getClass__;
_.hashCode__$ = java_lang_Boolean_hashCode__;
_.toString__$ = java_lang_Boolean_toString__;
_.java_lang_Object_typeId$ = 99;
_.java_lang_Boolean_value = false;
var java_lang_Boolean_FALSE, java_lang_Boolean_TRUE;
function java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2(packageName, className){
  var clazz;
  clazz = new java_lang_Class();
  clazz.java_lang_Class_typeName = packageName + className;
  clazz.java_lang_Class_modifiers = 4;
  return clazz;
}

function java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2(packageName, className){
  var clazz;
  clazz = new java_lang_Class();
  clazz.java_lang_Class_typeName = packageName + className;
  return clazz;
}

function java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(packageName, className){
  var clazz;
  clazz = new java_lang_Class();
  clazz.java_lang_Class_typeName = packageName + className;
  clazz.java_lang_Class_modifiers = 8;
  return clazz;
}

function java_lang_Class_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Class_12_1classLit;
}

function java_lang_Class_toString__(){
  return ((this.java_lang_Class_modifiers & 2) != 0?$intern_263:(this.java_lang_Class_modifiers & 1) != 0?$intern_49:$intern_264) + this.java_lang_Class_typeName;
}

function java_lang_Class(){
}

_ = java_lang_Class.prototype = new java_lang_Object();
_.getClass__$ = java_lang_Class_getClass__;
_.toString__$ = java_lang_Class_toString__;
_.java_lang_Object_typeId$ = 0;
_.java_lang_Class_modifiers = 0;
_.java_lang_Class_typeName = null;
function java_lang_ClassCastException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ClassCastException_12_1classLit;
}

function java_lang_ClassCastException(){
}

_ = java_lang_ClassCastException.prototype = new java_lang_RuntimeException();
_.getClass__$ = java_lang_ClassCastException_getClass__;
_.java_lang_Object_typeId$ = 100;
function java_lang_Number_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Number_12_1classLit;
}

function java_lang_Number(){
}

_ = java_lang_Number.prototype = new java_lang_Object();
_.getClass__$ = java_lang_Number_getClass__;
_.java_lang_Object_typeId$ = 101;
function java_lang_Double_$Double__Ljava_lang_Double_2D(this$static, value){
  this$static.java_lang_Double_value = value;
  return this$static;
}

function java_lang_Double_compareTo__Ljava_lang_Double_2(b){
  if (this.java_lang_Double_value < b.java_lang_Double_value) {
    return -1;
  }
   else if (this.java_lang_Double_value > b.java_lang_Double_value) {
    return 1;
  }
   else {
    return 0;
  }
}

function java_lang_Double_equals__Ljava_lang_Object_2(o){
  return o != null && com_google_gwt_lang_Cast_canCast__II(o.java_lang_Object_typeId$, 48) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(o, 48).java_lang_Double_value == this.java_lang_Double_value;
}

function java_lang_Double_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit;
}

function java_lang_Double_hashCode__(){
  return ~~Math.max(Math.min(this.java_lang_Double_value, 2147483647), -2147483648);
}

function java_lang_Double_toString__(){
  return $intern_49 + this.java_lang_Double_value;
}

function java_lang_Double(){
}

_ = java_lang_Double.prototype = new java_lang_Number();
_.compareTo__Ljava_lang_Object_2$ = java_lang_Double_compareTo__Ljava_lang_Double_2;
_.equals__Ljava_lang_Object_2$ = java_lang_Double_equals__Ljava_lang_Object_2;
_.getClass__$ = java_lang_Double_getClass__;
_.hashCode__$ = java_lang_Double_hashCode__;
_.toString__$ = java_lang_Double_toString__;
_.java_lang_Object_typeId$ = 102;
_.java_lang_Double_value = 0;
function java_lang_IllegalArgumentException_$IllegalArgumentException__Ljava_lang_IllegalArgumentException_2Ljava_lang_String_2(this$static, message){
  this$static.java_lang_Throwable_detailMessage = message;
  return this$static;
}

function java_lang_IllegalArgumentException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalArgumentException_12_1classLit;
}

function java_lang_IllegalArgumentException(){
}

_ = java_lang_IllegalArgumentException.prototype = new java_lang_RuntimeException();
_.getClass__$ = java_lang_IllegalArgumentException_getClass__;
_.java_lang_Object_typeId$ = 103;
function java_lang_IllegalStateException_$IllegalStateException__Ljava_lang_IllegalStateException_2Ljava_lang_String_2(this$static, s){
  this$static.java_lang_Throwable_detailMessage = s;
  return this$static;
}

function java_lang_IllegalStateException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalStateException_12_1classLit;
}

function java_lang_IllegalStateException(){
}

_ = java_lang_IllegalStateException.prototype = new java_lang_RuntimeException();
_.getClass__$ = java_lang_IllegalStateException_getClass__;
_.java_lang_Object_typeId$ = 104;
function java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_String_2(this$static, message){
  this$static.java_lang_Throwable_detailMessage = message;
  return this$static;
}

function java_lang_IndexOutOfBoundsException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IndexOutOfBoundsException_12_1classLit;
}

function java_lang_IndexOutOfBoundsException(){
}

_ = java_lang_IndexOutOfBoundsException.prototype = new java_lang_RuntimeException();
_.getClass__$ = java_lang_IndexOutOfBoundsException_getClass__;
_.java_lang_Object_typeId$ = 105;
function java_lang_Integer_toPowerOfTwoString__II(value, shift){
  var bitMask, buf, bufSize, digits, pos;
  bufSize = ~~(32 / shift);
  bitMask = (1 << shift) - 1;
  buf = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(com_google_gwt_lang_ClassLiteralHolder__13C_1classLit, 0, -1, bufSize, 1);
  digits = (java_lang_Number$_1_1Digits_$clinit__() , java_lang_Number$_1_1Digits_digits);
  pos = bufSize - 1;
  if (value >= 0) {
    while (value > bitMask) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
  buf[pos] = digits[value & bitMask];
  return java_lang_String__1_1valueOf___3CII(buf, pos, bufSize);
}

function java_lang_Math_abs__I(x){
  return x < 0?-x:x;
}

function java_lang_Math_max__II(x, y){
  return x > y?x:y;
}

function java_lang_Math_min__II(x, y){
  return x < y?x:y;
}

function java_lang_NullPointerException_$NullPointerException__Ljava_lang_NullPointerException_2Ljava_lang_String_2(this$static, message){
  this$static.java_lang_Throwable_detailMessage = message;
  return this$static;
}

function java_lang_NullPointerException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NullPointerException_12_1classLit;
}

function java_lang_NullPointerException(){
}

_ = java_lang_NullPointerException.prototype = new java_lang_RuntimeException();
_.getClass__$ = java_lang_NullPointerException_getClass__;
_.java_lang_Object_typeId$ = 106;
function java_lang_Number$_1_1Digits_$clinit__(){
  java_lang_Number$_1_1Digits_$clinit__ = nullMethod;
  java_lang_Number$_1_1Digits_digits = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13C_1classLit, 0, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var java_lang_Number$_1_1Digits_digits;
function java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2(this$static, other){
  if (!(other != null && com_google_gwt_lang_Cast_canCast__II(other.java_lang_Object_typeId$, 1))) {
    return false;
  }
  return String(this$static) == other;
}

function java_lang_String_$substring__Ljava_lang_String_2I(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function java_lang_String_$trim__Ljava_lang_String_2(this$static){
  if (this$static.length == 0 || this$static[0] > $intern_137 && this$static[this$static.length - 1] > $intern_137) {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, $intern_49);
  var r2 = r1.replace(/\s*$/, $intern_49);
  return r2;
}

function java_lang_String__1_1valueOf___3CII(x, start, end){
  x = x.slice(start, end);
  return String.fromCharCode.apply(null, x);
}

function java_lang_String_compareTo__Ljava_lang_String_2Ljava_lang_String_2(thisStr, otherStr){
  thisStr = String(thisStr);
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function java_lang_String_compareTo__Ljava_lang_String_2(other){
  return java_lang_String_compareTo__Ljava_lang_String_2Ljava_lang_String_2(this, other);
}

function java_lang_String_equals__Ljava_lang_Object_2(other){
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2(this, other);
}

function java_lang_String_fromCodePoint__I(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & 65535;
    return String.fromCharCode(hiSurrogate) + String.fromCharCode(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function java_lang_String_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit;
}

function java_lang_String_hashCode__(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2(this);
}

function java_lang_String_toString__(){
  return this;
}

_ = String.prototype;
_.compareTo__Ljava_lang_Object_2$ = java_lang_String_compareTo__Ljava_lang_String_2;
_.equals__Ljava_lang_Object_2$ = java_lang_String_equals__Ljava_lang_Object_2;
_.getClass__$ = java_lang_String_getClass__;
_.hashCode__$ = java_lang_String_hashCode__;
_.toString__$ = java_lang_String_toString__;
_.java_lang_Object_typeId$ = 2;
function java_lang_String$HashCache_$clinit__(){
  java_lang_String$HashCache_$clinit__ = nullMethod;
  java_lang_String$HashCache_back = {};
  java_lang_String$HashCache_front = {};
}

function java_lang_String$HashCache_compute__Ljava_lang_String_2(str){
  var hashCode, i, inc, n;
  n = str.length;
  inc = n < 64?1:~~(n / 32);
  hashCode = 0;
  for (i = 0; i < n; i += inc) {
    hashCode <<= 1;
    hashCode += str.charCodeAt(i);
  }
  hashCode |= 0;
  return hashCode;
}

function java_lang_String$HashCache_getHashCode__Ljava_lang_String_2(str){
  java_lang_String$HashCache_$clinit__();
  var key = $intern_73 + str;
  var result = java_lang_String$HashCache_front[key];
  if (result != null) {
    return result;
  }
  result = java_lang_String$HashCache_back[key];
  if (result == null) {
    result = java_lang_String$HashCache_compute__Ljava_lang_String_2(str);
  }
  java_lang_String$HashCache_increment__();
  return java_lang_String$HashCache_front[key] = result;
}

function java_lang_String$HashCache_increment__(){
  if (java_lang_String$HashCache_count == 256) {
    java_lang_String$HashCache_back = java_lang_String$HashCache_front;
    java_lang_String$HashCache_front = {};
    java_lang_String$HashCache_count = 0;
  }
  ++java_lang_String$HashCache_count;
}

var java_lang_String$HashCache_back, java_lang_String$HashCache_count = 0, java_lang_String$HashCache_front;
function java_lang_StringBuffer_$StringBuffer__Ljava_lang_StringBuffer_2(this$static){
  this$static.java_lang_StringBuffer_impl = new com_google_gwt_core_client_impl_StringBufferImplAppend();
  return this$static;
}

function java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_Object_2(this$static, x){
  this$static.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += x;
  return this$static;
}

function java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2(this$static, x){
  this$static.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += x;
  return this$static;
}

function java_lang_StringBuffer_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringBuffer_12_1classLit;
}

function java_lang_StringBuffer_toString__(){
  return this.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}

function java_lang_StringBuffer(){
}

_ = java_lang_StringBuffer.prototype = new java_lang_Object();
_.getClass__$ = java_lang_StringBuffer_getClass__;
_.toString__$ = java_lang_StringBuffer_toString__;
_.java_lang_Object_typeId$ = 107;
function java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2(this$static, message){
  this$static.java_lang_Throwable_detailMessage = message;
  return this$static;
}

function java_lang_UnsupportedOperationException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1UnsupportedOperationException_12_1classLit;
}

function java_lang_UnsupportedOperationException(){
}

_ = java_lang_UnsupportedOperationException.prototype = new java_lang_RuntimeException();
_.getClass__$ = java_lang_UnsupportedOperationException_getClass__;
_.java_lang_Object_typeId$ = 108;
function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_util_Iterator_2Ljava_lang_Object_2(iter, o){
  var t;
  while (iter.hasNext__()) {
    t = iter.next__();
    if (o == null?t == null:com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2(o, t)) {
      return iter;
    }
  }
  return null;
}

function java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2(this$static){
  var comma, iter, sb;
  sb = java_lang_StringBuffer_$StringBuffer__Ljava_lang_StringBuffer_2(new java_lang_StringBuffer());
  comma = null;
  sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_69;
  iter = this$static.iterator__();
  while (iter.hasNext__()) {
    if (comma != null) {
      sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += comma;
    }
     else {
      comma = $intern_33;
    }
    java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2(sb, $intern_49 + iter.next__());
  }
  sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string += $intern_71;
  return sb.java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}

function java_util_AbstractCollection_add__Ljava_lang_Object_2(o){
  throw java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2(new java_lang_UnsupportedOperationException(), $intern_265);
}

function java_util_AbstractCollection_contains__Ljava_lang_Object_2(o){
  var iter;
  iter = java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_util_Iterator_2Ljava_lang_Object_2(this.iterator__(), o);
  return !!iter;
}

function java_util_AbstractCollection_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractCollection_12_1classLit;
}

function java_util_AbstractCollection_toString__(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2(this);
}

function java_util_AbstractCollection(){
}

_ = java_util_AbstractCollection.prototype = new java_lang_Object();
_.add__Ljava_lang_Object_2 = java_util_AbstractCollection_add__Ljava_lang_Object_2;
_.contains__Ljava_lang_Object_2 = java_util_AbstractCollection_contains__Ljava_lang_Object_2;
_.getClass__$ = java_util_AbstractCollection_getClass__;
_.toString__$ = java_util_AbstractCollection_toString__;
_.java_lang_Object_typeId$ = 0;
function java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2(this$static){
  var entrySet;
  entrySet = java_util_AbstractHashMap$EntrySet_$AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap$EntrySet_2(new java_util_AbstractHashMap$EntrySet(), this$static);
  return java_util_AbstractMap$1_$AbstractMap$1__Ljava_util_AbstractMap$1_2(new java_util_AbstractMap$1(), this$static, entrySet);
}

function java_util_AbstractMap_equals__Ljava_lang_Object_2(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if ((obj == null?null:obj) === this) {
    return true;
  }
  if (!(obj != null && com_google_gwt_lang_Cast_canCast__II(obj.java_lang_Object_typeId$, 51))) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(obj, 51);
  if (com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 51).java_util_AbstractHashMap_size != otherMap.java_util_AbstractHashMap_size) {
    return false;
  }
  for (entry$iterator = java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2(new java_util_AbstractHashMap$EntrySetIterator(), java_util_AbstractHashMap$EntrySet_$AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap$EntrySet_2(new java_util_AbstractHashMap$EntrySet(), otherMap).java_util_AbstractHashMap$EntrySet_this$0); java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_iter);) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_iter), 49);
    otherKey = entry.getKey__();
    otherValue = entry.getValue__();
    if (!(otherKey == null?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 51).java_util_AbstractHashMap_nullSlotLive:otherKey != null && com_google_gwt_lang_Cast_canCast__II(otherKey.java_lang_Object_typeId$, 1)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 51), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(otherKey, 1)):java_util_AbstractHashMap_$hasHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2I(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 51), otherKey, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2(otherKey)))) {
      return false;
    }
    if (!java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(otherValue, otherKey == null?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 51).java_util_AbstractHashMap_nullSlot:otherKey != null && com_google_gwt_lang_Cast_canCast__II(otherKey.java_lang_Object_typeId$, 1)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 51).java_util_AbstractHashMap_stringMap[$intern_73 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(otherKey, 1)]:java_util_AbstractHashMap_$getHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2I(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 51), otherKey, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2(otherKey)))) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractMap_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap_12_1classLit;
}

function java_util_AbstractMap_hashCode__(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2(new java_util_AbstractHashMap$EntrySetIterator(), java_util_AbstractHashMap$EntrySet_$AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap$EntrySet_2(new java_util_AbstractHashMap$EntrySet(), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 51)).java_util_AbstractHashMap$EntrySet_this$0); java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_iter);) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_iter), 49);
    hashCode += entry.hashCode__$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function java_util_AbstractMap_toString__(){
  var comma, entry, iter, s;
  s = $intern_72;
  comma = false;
  for (iter = java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2(new java_util_AbstractHashMap$EntrySetIterator(), java_util_AbstractHashMap$EntrySet_$AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap$EntrySet_2(new java_util_AbstractHashMap$EntrySet(), com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(this, 51)).java_util_AbstractHashMap$EntrySet_this$0); java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2(iter.java_util_AbstractHashMap$EntrySetIterator_iter);) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(iter.java_util_AbstractHashMap$EntrySetIterator_iter), 49);
    if (comma) {
      s += $intern_33;
    }
     else {
      comma = true;
    }
    s += $intern_49 + entry.getKey__();
    s += $intern_266;
    s += $intern_49 + entry.getValue__();
  }
  return s + $intern_74;
}

function java_util_AbstractMap(){
}

_ = java_util_AbstractMap.prototype = new java_lang_Object();
_.equals__Ljava_lang_Object_2$ = java_util_AbstractMap_equals__Ljava_lang_Object_2;
_.getClass__$ = java_util_AbstractMap_getClass__;
_.hashCode__$ = java_util_AbstractMap_hashCode__;
_.toString__$ = java_util_AbstractMap_toString__;
_.java_lang_Object_typeId$ = 0;
function java_util_AbstractHashMap_$addAllHashEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2(this$static, dest){
  var hashCodeMap = this$static.java_util_AbstractHashMap_hashCodeMap;
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add__Ljava_lang_Object_2(array[i]);
      }
    }
  }
}

function java_util_AbstractHashMap_$addAllStringEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2(this$static, dest){
  var stringMap = this$static.java_util_AbstractHashMap_stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = java_util_AbstractHashMap$MapEntryString_new__Ljava_util_AbstractHashMap_2Ljava_lang_String_2(this$static, key.substring(1));
      dest.add__Ljava_lang_Object_2(entry);
    }
  }
}

function java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2(this$static){
  this$static.java_util_AbstractHashMap_hashCodeMap = [];
  this$static.java_util_AbstractHashMap_stringMap = {};
  this$static.java_util_AbstractHashMap_nullSlotLive = false;
  this$static.java_util_AbstractHashMap_nullSlot = null;
  this$static.java_util_AbstractHashMap_size = 0;
}

function java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static, key){
  return key == null?this$static.java_util_AbstractHashMap_nullSlotLive:key != null && com_google_gwt_lang_Cast_canCast__II(key.java_lang_Object_typeId$, 1)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2(this$static, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(key, 1)):java_util_AbstractHashMap_$hasHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2I(this$static, key, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2(key));
}

function java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static, key){
  return key == null?this$static.java_util_AbstractHashMap_nullSlot:key != null && com_google_gwt_lang_Cast_canCast__II(key.java_lang_Object_typeId$, 1)?this$static.java_util_AbstractHashMap_stringMap[$intern_73 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(key, 1)]:java_util_AbstractHashMap_$getHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2I(this$static, key, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2(key));
}

function java_util_AbstractHashMap_$getHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2I(this$static, key, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__();
      if (this$static.equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2(key, entryKey)) {
        return entry.getValue__();
      }
    }
  }
  return null;
}

function java_util_AbstractHashMap_$hasHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2I(this$static, key, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__();
      if (this$static.equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2(this$static, key){
  return $intern_73 + key in this$static.java_util_AbstractHashMap_stringMap;
}

function java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value){
  return key == null?java_util_AbstractHashMap_$putNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static, value):key != null && com_google_gwt_lang_Cast_canCast__II(key.java_lang_Object_typeId$, 1)?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(key, 1), value):java_util_AbstractHashMap_$putHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2I(this$static, key, value, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2(key));
}

function java_util_AbstractHashMap_$putHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2I(this$static, key, value, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__();
      if (this$static.equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2(key, entryKey)) {
        var previous = entry.getValue__();
        entry.setValue__Ljava_lang_Object_2(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode] = [];
  }
  var entry = java_util_MapEntryImpl_$MapEntryImpl__Ljava_util_MapEntryImpl_2Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_MapEntryImpl(), key, value);
  array.push(entry);
  ++this$static.java_util_AbstractHashMap_size;
  return null;
}

function java_util_AbstractHashMap_$putNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static, value){
  var result;
  result = this$static.java_util_AbstractHashMap_nullSlot;
  this$static.java_util_AbstractHashMap_nullSlot = value;
  if (!this$static.java_util_AbstractHashMap_nullSlotLive) {
    this$static.java_util_AbstractHashMap_nullSlotLive = true;
    ++this$static.java_util_AbstractHashMap_size;
  }
  return result;
}

function java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key, value){
  var result, stringMap = this$static.java_util_AbstractHashMap_stringMap;
  key = $intern_73 + key;
  if (key in stringMap) {
    result = stringMap[key];
  }
   else {
    ++this$static.java_util_AbstractHashMap_size;
  }
  stringMap[key] = value;
  return result;
}

function java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static, key){
  return key == null?java_util_AbstractHashMap_$removeNullSlot__Ljava_util_AbstractHashMap_2(this$static):key != null && com_google_gwt_lang_Cast_canCast__II(key.java_lang_Object_typeId$, 1)?java_util_AbstractHashMap_$removeStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2(this$static, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(key, 1)):java_util_AbstractHashMap_$removeHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2I(this$static, key, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2(key));
}

function java_util_AbstractHashMap_$removeHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2I(this$static, key, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__();
      if (this$static.equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2(key, entryKey)) {
        if (array.length == 1) {
          delete this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
        }
         else {
          array.splice(i, 1);
        }
        --this$static.java_util_AbstractHashMap_size;
        return entry.getValue__();
      }
    }
  }
  return null;
}

function java_util_AbstractHashMap_$removeNullSlot__Ljava_util_AbstractHashMap_2(this$static){
  var result;
  result = this$static.java_util_AbstractHashMap_nullSlot;
  this$static.java_util_AbstractHashMap_nullSlot = null;
  if (this$static.java_util_AbstractHashMap_nullSlotLive) {
    this$static.java_util_AbstractHashMap_nullSlotLive = false;
    --this$static.java_util_AbstractHashMap_size;
  }
  return result;
}

function java_util_AbstractHashMap_$removeStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2(this$static, key){
  var result, stringMap = this$static.java_util_AbstractHashMap_stringMap;
  key = $intern_73 + key;
  if (key in stringMap) {
    result = stringMap[key];
    --this$static.java_util_AbstractHashMap_size;
    delete stringMap[key];
  }
  return result;
}

function java_util_AbstractHashMap_equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2(value1, value2);
}

function java_util_AbstractHashMap_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap_12_1classLit;
}

function java_util_AbstractHashMap(){
}

_ = java_util_AbstractHashMap.prototype = new java_util_AbstractMap();
_.equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2 = java_util_AbstractHashMap_equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2;
_.getClass__$ = java_util_AbstractHashMap_getClass__;
_.java_lang_Object_typeId$ = 0;
_.java_util_AbstractHashMap_hashCodeMap = null;
_.java_util_AbstractHashMap_nullSlot = null;
_.java_util_AbstractHashMap_nullSlotLive = false;
_.java_util_AbstractHashMap_size = 0;
_.java_util_AbstractHashMap_stringMap = null;
function java_util_AbstractSet_equals__Ljava_lang_Object_2(o){
  var iter, other, otherItem;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && com_google_gwt_lang_Cast_canCast__II(o.java_lang_Object_typeId$, 52))) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(o, 52);
  if (other.size__() != this.size__()) {
    return false;
  }
  for (iter = other.iterator__(); iter.hasNext__();) {
    otherItem = iter.next__();
    if (!this.contains__Ljava_lang_Object_2(otherItem)) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractSet_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSet_12_1classLit;
}

function java_util_AbstractSet_hashCode__(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator__(); iter.hasNext__();) {
    next = iter.next__();
    if (next != null) {
      hashCode += com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}

function java_util_AbstractSet(){
}

_ = java_util_AbstractSet.prototype = new java_util_AbstractCollection();
_.equals__Ljava_lang_Object_2$ = java_util_AbstractSet_equals__Ljava_lang_Object_2;
_.getClass__$ = java_util_AbstractSet_getClass__;
_.hashCode__$ = java_util_AbstractSet_hashCode__;
_.java_lang_Object_typeId$ = 109;
function java_util_AbstractHashMap$EntrySet_$AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap$EntrySet_2(this$static, this$0){
  this$static.java_util_AbstractHashMap$EntrySet_this$0 = this$0;
  return this$static;
}

function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2(this$static, o){
  var entry, key, value;
  if (o != null && com_google_gwt_lang_Cast_canCast__II(o.java_lang_Object_typeId$, 49)) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(o, 49);
    key = entry.getKey__();
    if (java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySet_this$0, key)) {
      value = java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySet_this$0, key);
      return java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(entry.getValue__(), value);
    }
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2(o){
  return java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2(this, o);
}

function java_util_AbstractHashMap$EntrySet_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySet_12_1classLit;
}

function java_util_AbstractHashMap$EntrySet_iterator__(){
  return java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2(new java_util_AbstractHashMap$EntrySetIterator(), this.java_util_AbstractHashMap$EntrySet_this$0);
}

function java_util_AbstractHashMap$EntrySet_size__(){
  return this.java_util_AbstractHashMap$EntrySet_this$0.java_util_AbstractHashMap_size;
}

function java_util_AbstractHashMap$EntrySet(){
}

_ = java_util_AbstractHashMap$EntrySet.prototype = new java_util_AbstractSet();
_.contains__Ljava_lang_Object_2 = java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2;
_.getClass__$ = java_util_AbstractHashMap$EntrySet_getClass__;
_.iterator__ = java_util_AbstractHashMap$EntrySet_iterator__;
_.size__ = java_util_AbstractHashMap$EntrySet_size__;
_.java_lang_Object_typeId$ = 110;
_.java_util_AbstractHashMap$EntrySet_this$0 = null;
function java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2(this$static, this$0){
  var list;
  this$static.java_util_AbstractHashMap$EntrySetIterator_this$0 = this$0;
  list = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_this$0.java_util_AbstractHashMap_nullSlotLive) {
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(list, java_util_AbstractHashMap$MapEntryNull_$AbstractHashMap$MapEntryNull__Ljava_util_AbstractHashMap$MapEntryNull_2(new java_util_AbstractHashMap$MapEntryNull(), this$static.java_util_AbstractHashMap$EntrySetIterator_this$0));
  }
  java_util_AbstractHashMap_$addAllStringEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2(this$static.java_util_AbstractHashMap$EntrySetIterator_this$0, list);
  java_util_AbstractHashMap_$addAllHashEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2(this$static.java_util_AbstractHashMap$EntrySetIterator_this$0, list);
  this$static.java_util_AbstractHashMap$EntrySetIterator_iter = java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), list);
  return this$static;
}

function java_util_AbstractHashMap$EntrySetIterator_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySetIterator_12_1classLit;
}

function java_util_AbstractHashMap$EntrySetIterator_hasNext__(){
  return java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2(this.java_util_AbstractHashMap$EntrySetIterator_iter);
}

function java_util_AbstractHashMap$EntrySetIterator_next__(){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(this.java_util_AbstractHashMap$EntrySetIterator_iter), 49);
}

function java_util_AbstractHashMap$EntrySetIterator(){
}

_ = java_util_AbstractHashMap$EntrySetIterator.prototype = new java_lang_Object();
_.getClass__$ = java_util_AbstractHashMap$EntrySetIterator_getClass__;
_.hasNext__ = java_util_AbstractHashMap$EntrySetIterator_hasNext__;
_.next__ = java_util_AbstractHashMap$EntrySetIterator_next__;
_.java_lang_Object_typeId$ = 0;
_.java_util_AbstractHashMap$EntrySetIterator_iter = null;
_.java_util_AbstractHashMap$EntrySetIterator_this$0 = null;
function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2(other){
  var entry;
  if (other != null && com_google_gwt_lang_Cast_canCast__II(other.java_lang_Object_typeId$, 49)) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(other, 49);
    if (java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(this.getKey__(), entry.getKey__()) && java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(this.getValue__(), entry.getValue__())) {
      return true;
    }
  }
  return false;
}

function java_util_AbstractMapEntry_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMapEntry_12_1classLit;
}

function java_util_AbstractMapEntry_hashCode__(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  if (this.getKey__() != null) {
    keyHash = com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2(this.getKey__());
  }
  if (this.getValue__() != null) {
    valueHash = com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2(this.getValue__());
  }
  return keyHash ^ valueHash;
}

function java_util_AbstractMapEntry_toString__(){
  return this.getKey__() + $intern_266 + this.getValue__();
}

function java_util_AbstractMapEntry(){
}

_ = java_util_AbstractMapEntry.prototype = new java_lang_Object();
_.equals__Ljava_lang_Object_2$ = java_util_AbstractMapEntry_equals__Ljava_lang_Object_2;
_.getClass__$ = java_util_AbstractMapEntry_getClass__;
_.hashCode__$ = java_util_AbstractMapEntry_hashCode__;
_.toString__$ = java_util_AbstractMapEntry_toString__;
_.java_lang_Object_typeId$ = 111;
function java_util_AbstractHashMap$MapEntryNull_$AbstractHashMap$MapEntryNull__Ljava_util_AbstractHashMap$MapEntryNull_2(this$static, this$0){
  this$static.java_util_AbstractHashMap$MapEntryNull_this$0 = this$0;
  return this$static;
}

function java_util_AbstractHashMap$MapEntryNull_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$MapEntryNull_12_1classLit;
}

function java_util_AbstractHashMap$MapEntryNull_getKey__(){
  return null;
}

function java_util_AbstractHashMap$MapEntryNull_getValue__(){
  return this.java_util_AbstractHashMap$MapEntryNull_this$0.java_util_AbstractHashMap_nullSlot;
}

function java_util_AbstractHashMap$MapEntryNull_setValue__Ljava_lang_Object_2(object){
  return java_util_AbstractHashMap_$putNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$MapEntryNull_this$0, object);
}

function java_util_AbstractHashMap$MapEntryNull(){
}

_ = java_util_AbstractHashMap$MapEntryNull.prototype = new java_util_AbstractMapEntry();
_.getClass__$ = java_util_AbstractHashMap$MapEntryNull_getClass__;
_.getKey__ = java_util_AbstractHashMap$MapEntryNull_getKey__;
_.getValue__ = java_util_AbstractHashMap$MapEntryNull_getValue__;
_.setValue__Ljava_lang_Object_2 = java_util_AbstractHashMap$MapEntryNull_setValue__Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 112;
_.java_util_AbstractHashMap$MapEntryNull_this$0 = null;
function java_util_AbstractHashMap$MapEntryString_$AbstractHashMap$MapEntryString__Ljava_util_AbstractHashMap$MapEntryString_2Ljava_lang_String_2(this$static, key, this$0){
  this$static.java_util_AbstractHashMap$MapEntryString_this$0 = this$0;
  this$static.java_util_AbstractHashMap$MapEntryString_key = key;
  return this$static;
}

function java_util_AbstractHashMap$MapEntryString_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$MapEntryString_12_1classLit;
}

function java_util_AbstractHashMap$MapEntryString_getKey__(){
  return this.java_util_AbstractHashMap$MapEntryString_key;
}

function java_util_AbstractHashMap$MapEntryString_getValue__(){
  return this.java_util_AbstractHashMap$MapEntryString_this$0.java_util_AbstractHashMap_stringMap[$intern_73 + this.java_util_AbstractHashMap$MapEntryString_key];
}

function java_util_AbstractHashMap$MapEntryString_new__Ljava_util_AbstractHashMap_2Ljava_lang_String_2(this$outer, key){
  return java_util_AbstractHashMap$MapEntryString_$AbstractHashMap$MapEntryString__Ljava_util_AbstractHashMap$MapEntryString_2Ljava_lang_String_2(new java_util_AbstractHashMap$MapEntryString(), key, this$outer);
}

function java_util_AbstractHashMap$MapEntryString_setValue__Ljava_lang_Object_2(object){
  return java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$MapEntryString_this$0, this.java_util_AbstractHashMap$MapEntryString_key, object);
}

function java_util_AbstractHashMap$MapEntryString(){
}

_ = java_util_AbstractHashMap$MapEntryString.prototype = new java_util_AbstractMapEntry();
_.getClass__$ = java_util_AbstractHashMap$MapEntryString_getClass__;
_.getKey__ = java_util_AbstractHashMap$MapEntryString_getKey__;
_.getValue__ = java_util_AbstractHashMap$MapEntryString_getValue__;
_.setValue__Ljava_lang_Object_2 = java_util_AbstractHashMap$MapEntryString_setValue__Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 113;
_.java_util_AbstractHashMap$MapEntryString_key = null;
_.java_util_AbstractHashMap$MapEntryString_this$0 = null;
function java_util_AbstractList_add__Ljava_lang_Object_2(obj){
  this.add__ILjava_lang_Object_2(this.size__(), obj);
  return true;
}

function java_util_AbstractList_add__ILjava_lang_Object_2(index, element){
  throw java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2(new java_lang_UnsupportedOperationException(), $intern_267);
}

function java_util_AbstractList_checkIndex__II(index, size){
  if (index < 0 || index >= size) {
    java_util_AbstractList_indexOutOfBounds__II(index, size);
  }
}

function java_util_AbstractList_equals__Ljava_lang_Object_2(o){
  var elem, elemOther, iter, iterOther, other;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && com_google_gwt_lang_Cast_canCast__II(o.java_lang_Object_typeId$, 50))) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(o, 50);
  if (this.size__() != other.size__()) {
    return false;
  }
  iter = this.iterator__();
  iterOther = other.iterator__();
  while (iter.java_util_AbstractList$IteratorImpl_i < iter.java_util_AbstractList$IteratorImpl_this$0.size__()) {
    elem = java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(iter);
    elemOther = java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(iterOther);
    if (!(elem == null?elemOther == null:com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractList_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList_12_1classLit;
}

function java_util_AbstractList_hashCode__(){
  var iter, k, obj;
  k = 1;
  iter = this.iterator__();
  while (iter.java_util_AbstractList$IteratorImpl_i < iter.java_util_AbstractList$IteratorImpl_this$0.size__()) {
    obj = java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(iter);
    k = 31 * k + (obj == null?0:com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2(obj));
    k = ~~k;
  }
  return k;
}

function java_util_AbstractList_indexOutOfBounds__II(index, size){
  throw java_lang_IndexOutOfBoundsException_$IndexOutOfBoundsException__Ljava_lang_IndexOutOfBoundsException_2Ljava_lang_String_2(new java_lang_IndexOutOfBoundsException(), $intern_268 + index + $intern_269 + size);
}

function java_util_AbstractList_iterator__(){
  return java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this);
}

function java_util_AbstractList_remove__I(index){
  throw java_lang_UnsupportedOperationException_$UnsupportedOperationException__Ljava_lang_UnsupportedOperationException_2Ljava_lang_String_2(new java_lang_UnsupportedOperationException(), $intern_270);
}

function java_util_AbstractList(){
}

_ = java_util_AbstractList.prototype = new java_util_AbstractCollection();
_.add__Ljava_lang_Object_2 = java_util_AbstractList_add__Ljava_lang_Object_2;
_.add__ILjava_lang_Object_2 = java_util_AbstractList_add__ILjava_lang_Object_2;
_.equals__Ljava_lang_Object_2$ = java_util_AbstractList_equals__Ljava_lang_Object_2;
_.getClass__$ = java_util_AbstractList_getClass__;
_.hashCode__$ = java_util_AbstractList_hashCode__;
_.iterator__ = java_util_AbstractList_iterator__;
_.remove__I = java_util_AbstractList_remove__I;
_.java_lang_Object_typeId$ = 114;
function java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(this$static, this$0){
  this$static.java_util_AbstractList$IteratorImpl_this$0 = this$0;
  return this$static;
}

function java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2(this$static){
  return this$static.java_util_AbstractList$IteratorImpl_i < this$static.java_util_AbstractList$IteratorImpl_this$0.size__();
}

function java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(this$static){
  if (this$static.java_util_AbstractList$IteratorImpl_i >= this$static.java_util_AbstractList$IteratorImpl_this$0.size__()) {
    throw new java_util_NoSuchElementException();
  }
  return this$static.java_util_AbstractList$IteratorImpl_this$0.get__I(this$static.java_util_AbstractList$IteratorImpl_last = this$static.java_util_AbstractList$IteratorImpl_i++);
}

function java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2(this$static){
  if (this$static.java_util_AbstractList$IteratorImpl_last < 0) {
    throw new java_lang_IllegalStateException();
  }
  this$static.java_util_AbstractList$IteratorImpl_this$0.remove__I(this$static.java_util_AbstractList$IteratorImpl_last);
  this$static.java_util_AbstractList$IteratorImpl_i = this$static.java_util_AbstractList$IteratorImpl_last;
  this$static.java_util_AbstractList$IteratorImpl_last = -1;
}

function java_util_AbstractList$IteratorImpl_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$IteratorImpl_12_1classLit;
}

function java_util_AbstractList$IteratorImpl_hasNext__(){
  return this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$0.size__();
}

function java_util_AbstractList$IteratorImpl_next__(){
  return java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(this);
}

function java_util_AbstractList$IteratorImpl(){
}

_ = java_util_AbstractList$IteratorImpl.prototype = new java_lang_Object();
_.getClass__$ = java_util_AbstractList$IteratorImpl_getClass__;
_.hasNext__ = java_util_AbstractList$IteratorImpl_hasNext__;
_.next__ = java_util_AbstractList$IteratorImpl_next__;
_.java_lang_Object_typeId$ = 0;
_.java_util_AbstractList$IteratorImpl_i = 0;
_.java_util_AbstractList$IteratorImpl_last = -1;
_.java_util_AbstractList$IteratorImpl_this$0 = null;
function java_util_AbstractMap$1_$AbstractMap$1__Ljava_util_AbstractMap$1_2(this$static, this$0, val$entrySet){
  this$static.java_util_AbstractMap$1_this$0 = this$0;
  this$static.java_util_AbstractMap$1_val$entrySet = val$entrySet;
  return this$static;
}

function java_util_AbstractMap$1_contains__Ljava_lang_Object_2(key){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this.java_util_AbstractMap$1_this$0, key);
}

function java_util_AbstractMap$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1_12_1classLit;
}

function java_util_AbstractMap$1_iterator__(){
  var java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0;
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0 = java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2(new java_util_AbstractHashMap$EntrySetIterator(), this.java_util_AbstractMap$1_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0) , java_util_AbstractMap$1$1_$AbstractMap$1$1__Ljava_util_AbstractMap$1$1_2(new java_util_AbstractMap$1$1(), java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0);
}

function java_util_AbstractMap$1_size__(){
  return this.java_util_AbstractMap$1_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0.java_util_AbstractHashMap_size;
}

function java_util_AbstractMap$1(){
}

_ = java_util_AbstractMap$1.prototype = new java_util_AbstractSet();
_.contains__Ljava_lang_Object_2 = java_util_AbstractMap$1_contains__Ljava_lang_Object_2;
_.getClass__$ = java_util_AbstractMap$1_getClass__;
_.iterator__ = java_util_AbstractMap$1_iterator__;
_.size__ = java_util_AbstractMap$1_size__;
_.java_lang_Object_typeId$ = 115;
_.java_util_AbstractMap$1_this$0 = null;
_.java_util_AbstractMap$1_val$entrySet = null;
function java_util_AbstractMap$1$1_$AbstractMap$1$1__Ljava_util_AbstractMap$1$1_2(this$static, val$outerIter){
  this$static.java_util_AbstractMap$1$1_val$outerIter = val$outerIter;
  return this$static;
}

function java_util_AbstractMap$1$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1$1_12_1classLit;
}

function java_util_AbstractMap$1$1_hasNext__(){
  return java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2(this.java_util_AbstractMap$1$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter);
}

function java_util_AbstractMap$1$1_next__(){
  var java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2_entry_0;
  return java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2_entry_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2(this.java_util_AbstractMap$1$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter), 49) , java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2_entry_0.getKey__();
}

function java_util_AbstractMap$1$1(){
}

_ = java_util_AbstractMap$1$1.prototype = new java_lang_Object();
_.getClass__$ = java_util_AbstractMap$1$1_getClass__;
_.hasNext__ = java_util_AbstractMap$1$1_hasNext__;
_.next__ = java_util_AbstractMap$1$1_next__;
_.java_lang_Object_typeId$ = 0;
_.java_util_AbstractMap$1$1_val$outerIter = null;
function java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(this$static){
  this$static.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Object_12_1classLit, 0, 0, 0, 0);
  this$static.java_util_ArrayList_size = 0;
  return this$static;
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static, o){
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(this$static.java_util_ArrayList_array, this$static.java_util_ArrayList_size++, o);
  return true;
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index, o){
  if (index < 0 || index > this$static.java_util_ArrayList_size) {
    java_util_AbstractList_indexOutOfBounds__II(index, this$static.java_util_ArrayList_size);
  }
  this$static.java_util_ArrayList_array.splice(index, 0, o);
  ++this$static.java_util_ArrayList_size;
}

function java_util_ArrayList_$clear__Ljava_util_ArrayList_2(this$static){
  this$static.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Object_12_1classLit, 0, 0, 0, 0);
  this$static.java_util_ArrayList_size = 0;
}

function java_util_ArrayList_$clearImpl__Ljava_util_ArrayList_2(this$static){
  this$static.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIII(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Object_12_1classLit, 0, 0, 0, 0);
  this$static.java_util_ArrayList_size = 0;
}

function java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this$static, index){
  java_util_AbstractList_checkIndex__II(index, this$static.java_util_ArrayList_size);
  return this$static.java_util_ArrayList_array[index];
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2I(this$static, o, index){
  for (; index < this$static.java_util_ArrayList_size; ++index) {
    if (java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(o, this$static.java_util_ArrayList_array[index])) {
      return index;
    }
  }
  return -1;
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2I(this$static, index){
  var previous;
  previous = (java_util_AbstractList_checkIndex__II(index, this$static.java_util_ArrayList_size) , this$static.java_util_ArrayList_array[index]);
  this$static.java_util_ArrayList_array.splice(index, 1);
  --this$static.java_util_ArrayList_size;
  return previous;
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2(this$static, o){
  var i;
  i = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2I(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2I(this$static, i);
  return true;
}

function java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index, o){
  var previous;
  previous = (java_util_AbstractList_checkIndex__II(index, this$static.java_util_ArrayList_size) , this$static.java_util_ArrayList_array[index]);
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(this$static.java_util_ArrayList_array, index, o);
  return previous;
}

function java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2(this$static, out){
  var i, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_a_0, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_result_0;
  if (out.length < this$static.java_util_ArrayList_size) {
    out = (com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_a_0 = out , com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_result_0 = com_google_gwt_lang_Array_createFromSeed__II(0, this$static.java_util_ArrayList_size) , com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2(com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_a_0.com_google_gwt_lang_Array_arrayClass$, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_a_0.java_lang_Object_typeId$, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_a_0.com_google_gwt_lang_Array_queryId$, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_result_0) , com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_result_0);
  }
  for (i = 0; i < this$static.java_util_ArrayList_size; ++i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(out, i, this$static.java_util_ArrayList_array[i]);
  }
  if (out.length > this$static.java_util_ArrayList_size) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(out, this$static.java_util_ArrayList_size, null);
  }
  return out;
}

function java_util_ArrayList_add__Ljava_lang_Object_2(o){
  return com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(this.java_util_ArrayList_array, this.java_util_ArrayList_size++, o) , true;
}

function java_util_ArrayList_add__ILjava_lang_Object_2(index, o){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index, o);
}

function java_util_ArrayList_contains__Ljava_lang_Object_2(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2I(this, o, 0) != -1;
}

function java_util_ArrayList_get__I(index){
  return java_util_AbstractList_checkIndex__II(index, this.java_util_ArrayList_size) , this.java_util_ArrayList_array[index];
}

function java_util_ArrayList_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit;
}

function java_util_ArrayList_remove__I(index){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2I(this, index);
}

function java_util_ArrayList_size__(){
  return this.java_util_ArrayList_size;
}

function java_util_ArrayList(){
}

_ = java_util_ArrayList.prototype = new java_util_AbstractList();
_.add__Ljava_lang_Object_2 = java_util_ArrayList_add__Ljava_lang_Object_2;
_.add__ILjava_lang_Object_2 = java_util_ArrayList_add__ILjava_lang_Object_2;
_.contains__Ljava_lang_Object_2 = java_util_ArrayList_contains__Ljava_lang_Object_2;
_.get__I = java_util_ArrayList_get__I;
_.getClass__$ = java_util_ArrayList_getClass__;
_.remove__I = java_util_ArrayList_remove__I;
_.size__ = java_util_ArrayList_size__;
_.java_lang_Object_typeId$ = 116;
_.java_util_ArrayList_array = null;
_.java_util_ArrayList_size = 0;
function java_util_Arrays_insertionSort___3Ljava_lang_Object_2IILjava_util_Comparator_2(array, low, high){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(array[j - 1], 12).compareTo__Ljava_lang_Object_2$(array[j]) > 0; --j) {
      t = array[j];
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(array, j, array[j - 1]);
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(array, j - 1, t);
    }
  }
}

function java_util_Arrays_merge___3Ljava_lang_Object_2III_3Ljava_lang_Object_2IILjava_util_Comparator_2(src, srcLow, srcMid, srcHigh, dest, destLow, destHigh){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    if (topIdx >= srcHigh || srcLow < srcMid && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(src[srcLow], 12).compareTo__Ljava_lang_Object_2$(src[topIdx]) <= 0) {
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(dest, destLow++, src[srcLow++]);
    }
     else {
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(dest, destLow++, src[topIdx++]);
    }
  }
}

function java_util_Arrays_mergeSort___3Ljava_lang_Object_2IILjava_util_Comparator_2(x, fromIndex, toIndex, comp){
  var temp, com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_a_0, com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_result_0;
  temp = (com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_a_0 = x , com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_result_0 = com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_a_0.slice(fromIndex, toIndex) , com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2IILcom_google_gwt_lang_Array_2(com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_a_0.com_google_gwt_lang_Array_arrayClass$, com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_a_0.java_lang_Object_typeId$, com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_a_0.com_google_gwt_lang_Array_queryId$, com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_result_0) , com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_result_0);
  java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2(temp, x, fromIndex, toIndex, -fromIndex, comp);
}

function java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2(temp, array, low, high, ofs, comp){
  var length, tempHigh, tempLow, tempMid;
  length = high - low;
  if (length < 7) {
    java_util_Arrays_insertionSort___3Ljava_lang_Object_2IILjava_util_Comparator_2(array, low, high);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2(array, temp, tempLow, tempMid, -ofs, comp);
  java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2(array, temp, tempMid, tempHigh, -ofs, comp);
  if (com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2I(temp[tempMid - 1], 12).compareTo__Ljava_lang_Object_2$(temp[tempMid]) <= 0) {
    while (low < high) {
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2(array, low++, temp[tempLow++]);
    }
    return;
  }
  java_util_Arrays_merge___3Ljava_lang_Object_2III_3Ljava_lang_Object_2IILjava_util_Comparator_2(temp, tempLow, tempMid, tempHigh, array, low, high);
}

function java_util_Arrays_sort___3Ljava_lang_Object_2(array){
  java_util_Arrays_mergeSort___3Ljava_lang_Object_2IILjava_util_Comparator_2(array, 0, array.length, (java_util_Comparators_$clinit__() , java_util_Comparators_NATURAL));
}

function java_util_Comparators_$clinit__(){
  java_util_Comparators_$clinit__ = nullMethod;
  java_util_Comparators_NATURAL = new java_util_Comparators$1();
}

var java_util_Comparators_NATURAL;
function java_util_Comparators$1_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Comparators$1_12_1classLit;
}

function java_util_Comparators$1(){
}

_ = java_util_Comparators$1.prototype = new java_lang_Object();
_.getClass__$ = java_util_Comparators$1_getClass__;
_.java_lang_Object_typeId$ = 0;
function java_util_HashMap_$HashMap__Ljava_util_HashMap_2(this$static){
  java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2(this$static);
  return this$static;
}

function java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2(value1, value2);
}

function java_util_HashMap_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashMap_12_1classLit;
}

function java_util_HashMap(){
}

_ = java_util_HashMap.prototype = new java_util_AbstractHashMap();
_.getClass__$ = java_util_HashMap_getClass__;
_.java_lang_Object_typeId$ = 117;
function java_util_HashSet_$HashSet__Ljava_util_HashSet_2(this$static){
  this$static.java_util_HashSet_map = java_util_HashMap_$HashMap__Ljava_util_HashMap_2(new java_util_HashMap());
  return this$static;
}

function java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2(this$static, o){
  var old;
  old = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o, this$static);
  return old == null;
}

function java_util_HashSet_add__Ljava_lang_Object_2(o){
  var java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2_old_0;
  return java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2_old_0 = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_HashSet_map, o, this) , java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2_old_0 == null;
}

function java_util_HashSet_contains__Ljava_lang_Object_2(o){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this.java_util_HashSet_map, o);
}

function java_util_HashSet_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashSet_12_1classLit;
}

function java_util_HashSet_iterator__(){
  var java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0;
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0 = java_util_AbstractHashMap$EntrySetIterator_$AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap$EntrySetIterator_2(new java_util_AbstractHashMap$EntrySetIterator(), java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2(this.java_util_HashSet_map).java_util_AbstractMap$1_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0) , java_util_AbstractMap$1$1_$AbstractMap$1$1__Ljava_util_AbstractMap$1$1_2(new java_util_AbstractMap$1$1(), java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2_outerIter_0);
}

function java_util_HashSet_size__(){
  return this.java_util_HashSet_map.java_util_AbstractHashMap_size;
}

function java_util_HashSet_toString__(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2(java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2(this.java_util_HashSet_map));
}

function java_util_HashSet(){
}

_ = java_util_HashSet.prototype = new java_util_AbstractSet();
_.add__Ljava_lang_Object_2 = java_util_HashSet_add__Ljava_lang_Object_2;
_.contains__Ljava_lang_Object_2 = java_util_HashSet_contains__Ljava_lang_Object_2;
_.getClass__$ = java_util_HashSet_getClass__;
_.iterator__ = java_util_HashSet_iterator__;
_.size__ = java_util_HashSet_size__;
_.toString__$ = java_util_HashSet_toString__;
_.java_lang_Object_typeId$ = 118;
_.java_util_HashSet_map = null;
function java_util_MapEntryImpl_$MapEntryImpl__Ljava_util_MapEntryImpl_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value){
  this$static.java_util_MapEntryImpl_key = key;
  this$static.java_util_MapEntryImpl_value = value;
  return this$static;
}

function java_util_MapEntryImpl_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1MapEntryImpl_12_1classLit;
}

function java_util_MapEntryImpl_getKey__(){
  return this.java_util_MapEntryImpl_key;
}

function java_util_MapEntryImpl_getValue__(){
  return this.java_util_MapEntryImpl_value;
}

function java_util_MapEntryImpl_setValue__Ljava_lang_Object_2(value){
  var old;
  old = this.java_util_MapEntryImpl_value;
  this.java_util_MapEntryImpl_value = value;
  return old;
}

function java_util_MapEntryImpl(){
}

_ = java_util_MapEntryImpl.prototype = new java_util_AbstractMapEntry();
_.getClass__$ = java_util_MapEntryImpl_getClass__;
_.getKey__ = java_util_MapEntryImpl_getKey__;
_.getValue__ = java_util_MapEntryImpl_getValue__;
_.setValue__Ljava_lang_Object_2 = java_util_MapEntryImpl_setValue__Ljava_lang_Object_2;
_.java_lang_Object_typeId$ = 119;
_.java_util_MapEntryImpl_key = null;
_.java_util_MapEntryImpl_value = null;
function java_util_NoSuchElementException_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1NoSuchElementException_12_1classLit;
}

function java_util_NoSuchElementException(){
}

_ = java_util_NoSuchElementException.prototype = new java_lang_RuntimeException();
_.getClass__$ = java_util_NoSuchElementException_getClass__;
_.java_lang_Object_typeId$ = 120;
function java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2(a, b);
}

function java_util_Vector_$Vector__Ljava_util_Vector_2(this$static){
  this$static.java_util_Vector_arrayList = java_util_ArrayList_$ArrayList__Ljava_util_ArrayList_2(new java_util_ArrayList());
  return this$static;
}

function java_util_Vector_add__Ljava_lang_Object_2(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2(this.java_util_Vector_arrayList, o);
}

function java_util_Vector_add__ILjava_lang_Object_2(index, o){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_Vector_arrayList, index, o);
}

function java_util_Vector_contains__Ljava_lang_Object_2(elem){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2I(this.java_util_Vector_arrayList, elem, 0) != -1;
}

function java_util_Vector_get__I(index){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2I(this.java_util_Vector_arrayList, index);
}

function java_util_Vector_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Vector_12_1classLit;
}

function java_util_Vector_iterator__(){
  return java_util_AbstractList$IteratorImpl_$AbstractList$IteratorImpl__Ljava_util_AbstractList$IteratorImpl_2(new java_util_AbstractList$IteratorImpl(), this.java_util_Vector_arrayList);
}

function java_util_Vector_remove__I(index){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2I(this.java_util_Vector_arrayList, index);
}

function java_util_Vector_size__(){
  return this.java_util_Vector_arrayList.java_util_ArrayList_size;
}

function java_util_Vector_toString__(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2(this.java_util_Vector_arrayList);
}

function java_util_Vector(){
}

_ = java_util_Vector.prototype = new java_util_AbstractList();
_.add__Ljava_lang_Object_2 = java_util_Vector_add__Ljava_lang_Object_2;
_.add__ILjava_lang_Object_2 = java_util_Vector_add__ILjava_lang_Object_2;
_.contains__Ljava_lang_Object_2 = java_util_Vector_contains__Ljava_lang_Object_2;
_.get__I = java_util_Vector_get__I;
_.getClass__$ = java_util_Vector_getClass__;
_.iterator__ = java_util_Vector_iterator__;
_.remove__I = java_util_Vector_remove__I;
_.size__ = java_util_Vector_size__;
_.toString__$ = java_util_Vector_toString__;
_.java_lang_Object_typeId$ = 121;
_.java_util_Vector_arrayList = null;
function org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_dispatch__Lorg_cobogw_gwt_waveapi_gadget_client_StateUpdateEventHandler_2(handler){
  com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2(handler.com_scrumzilla_client_wave_ScrumzillaWaveStateUpdateHandler_fApplicationHandlerManager, (com_scrumzilla_client_events_ModelChangedEvent_$clinit__() , new com_scrumzilla_client_events_ModelChangedEvent()));
}

function org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_fire__Lcom_google_gwt_event_shared_HasHandlers_2Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2(source){
  var event;
  if (org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_TYPE) {
    event = new org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent();
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2(source, event);
    return event;
  }
  return null;
}

function org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_getAssociatedType__(){
  return org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_TYPE;
}

function org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lorg_1cobogw_1gwt_1waveapi_1gadget_1client_1StateUpdateEvent_12_1classLit;
}

function org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_getType__(){
  if (!org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_TYPE) {
    org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_TYPE = com_google_gwt_event_shared_GwtEvent$Type_$GwtEvent$Type__Lcom_google_gwt_event_shared_GwtEvent$Type_2(new com_google_gwt_event_shared_GwtEvent$Type());
  }
  return org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_TYPE;
}

function org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent(){
}

_ = org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent.prototype = new com_google_gwt_event_shared_GwtEvent();
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2 = org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_dispatch__Lorg_cobogw_gwt_waveapi_gadget_client_StateUpdateEventHandler_2;
_.getAssociatedType__ = org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_getAssociatedType__;
_.getClass__$ = org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_getClass__;
_.java_lang_Object_typeId$ = 0;
var org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_TYPE = null;
function org_cobogw_gwt_waveapi_gadget_client_WaveFeature_$addStateUpdateEventHandler__Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2Lorg_cobogw_gwt_waveapi_gadget_client_StateUpdateEventHandler_2(this$static, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2(org_cobogw_gwt_waveapi_gadget_client_WaveFeature_$ensureWaveEventBus__Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2(this$static), org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_getType__(), handler);
}

function org_cobogw_gwt_waveapi_gadget_client_WaveFeature_$ensureWaveEventBus__Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2(this$static){
  if (!org_cobogw_gwt_waveapi_gadget_client_WaveFeature_wave) {
    org_cobogw_gwt_waveapi_gadget_client_WaveFeature_wave = this$static;
  }
  if (!org_cobogw_gwt_waveapi_gadget_client_WaveFeature_waveEventBus) {
    org_cobogw_gwt_waveapi_gadget_client_WaveFeature_waveEventBus = org_cobogw_gwt_waveapi_gadget_client_WaveFeature$WaveEventBus_$WaveFeature$WaveEventBus__Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature$WaveEventBus_2Ljava_lang_Object_2(new org_cobogw_gwt_waveapi_gadget_client_WaveFeature$WaveEventBus(), this$static);
    $wnd.wave.setModeCallback(org_cobogw_gwt_waveapi_gadget_client_WaveFeature_modeChangeEvent__I);
    $wnd.wave.setParticipantCallback(org_cobogw_gwt_waveapi_gadget_client_WaveFeature_participantUpdateEvent__);
    $wnd.wave.setStateCallback(org_cobogw_gwt_waveapi_gadget_client_WaveFeature_stateUpdateEvent__);
  }
  return org_cobogw_gwt_waveapi_gadget_client_WaveFeature_waveEventBus;
}

function org_cobogw_gwt_waveapi_gadget_client_WaveFeature_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lorg_1cobogw_1gwt_1waveapi_1gadget_1client_1WaveFeature_12_1classLit;
}

function org_cobogw_gwt_waveapi_gadget_client_WaveFeature_modeChangeEvent__I(mode){
}

function org_cobogw_gwt_waveapi_gadget_client_WaveFeature_participantUpdateEvent__(){
}

function org_cobogw_gwt_waveapi_gadget_client_WaveFeature_stateUpdateEvent__(){
  org_cobogw_gwt_waveapi_gadget_client_StateUpdateEvent_fire__Lcom_google_gwt_event_shared_HasHandlers_2Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature_2(org_cobogw_gwt_waveapi_gadget_client_WaveFeature_waveEventBus);
}

function org_cobogw_gwt_waveapi_gadget_client_WaveFeature(){
}

_ = org_cobogw_gwt_waveapi_gadget_client_WaveFeature.prototype = new java_lang_Object();
_.getClass__$ = org_cobogw_gwt_waveapi_gadget_client_WaveFeature_getClass__;
_.java_lang_Object_typeId$ = 0;
var org_cobogw_gwt_waveapi_gadget_client_WaveFeature_wave = null, org_cobogw_gwt_waveapi_gadget_client_WaveFeature_waveEventBus = null;
function org_cobogw_gwt_waveapi_gadget_client_WaveFeature$WaveEventBus_$WaveFeature$WaveEventBus__Lorg_cobogw_gwt_waveapi_gadget_client_WaveFeature$WaveEventBus_2Ljava_lang_Object_2(this$static, source){
  this$static.com_google_gwt_event_shared_HandlerManager_registry = com_google_gwt_event_shared_HandlerManager$HandlerRegistry_$HandlerManager$HandlerRegistry__Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2(new com_google_gwt_event_shared_HandlerManager$HandlerRegistry());
  this$static.com_google_gwt_event_shared_HandlerManager_source = source;
  this$static.com_google_gwt_event_shared_HandlerManager_isReverseOrder = false;
  return this$static;
}

function org_cobogw_gwt_waveapi_gadget_client_WaveFeature$WaveEventBus_getClass__(){
  return com_google_gwt_lang_ClassLiteralHolder_Lorg_1cobogw_1gwt_1waveapi_1gadget_1client_1WaveFeature$WaveEventBus_12_1classLit;
}

function org_cobogw_gwt_waveapi_gadget_client_WaveFeature$WaveEventBus(){
}

_ = org_cobogw_gwt_waveapi_gadget_client_WaveFeature$WaveEventBus.prototype = new com_google_gwt_event_shared_HandlerManager();
_.getClass__$ = org_cobogw_gwt_waveapi_gadget_client_WaveFeature$WaveEventBus_getClass__;
_.java_lang_Object_typeId$ = 122;
function init(){
  !!$stats && $stats({moduleName:$moduleName, subSystem:$intern_271, evtGroup:$intern_272, millis:(new Date()).getTime(), type:$intern_273, className:$intern_274});
  com_scrumzilla_client_wave_ScrumzillaWaveGadgetGadgetImpl_$ScrumzillaWaveGadgetGadgetImpl__Lcom_scrumzilla_client_wave_ScrumzillaWaveGadgetGadgetImpl_2(new com_scrumzilla_client_wave_ScrumzillaWaveGadgetGadgetImpl());
}

function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      init();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    init();
  }
}

function nullMethod(){
}

var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_276), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1AbstractDropController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_277, $intern_278), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1AbstractPositioningDropController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_277, $intern_279), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1AbsolutePositionDropController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_277, $intern_280), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1AbsolutePositionDropController$Draggable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_277, $intern_281), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1AbstractIndexedDropController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_277, $intern_282), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1BoundaryDropController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_277, $intern_283), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1drop_1IndexedDropController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_277, $intern_284), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1AbstractArea_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_285, $intern_286), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1AbstractLocation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_285, $intern_287), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1CoordinateLocation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_285, $intern_288), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1LocationWidgetComparator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_285, $intern_289), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1LocationWidgetComparator$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_285, $intern_290), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1LocationWidgetComparator$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_285, $intern_291), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1WidgetArea_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_285, $intern_292), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1util_1WidgetLocation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_285, $intern_293), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1AbstractDragController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_294, $intern_295), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1DeferredMoveCommand_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_294, $intern_296), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1DragContext_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_294, $intern_297), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_299), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_300), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_301), com_google_gwt_lang_ClassLiteralHolder__13Lcom_1allen_11sauer_1gwt_1dnd_1client_1DropControllerCollection$Candidate_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2($intern_302, $intern_303), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1DropControllerCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_294, $intern_304), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1DropControllerCollection$Candidate_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_294, $intern_305), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1MouseDragHandler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_294, $intern_306), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1MouseDragHandler$RegisteredDraggable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_294, $intern_307), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1MouseDragHandler$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_294, $intern_308), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1PickupDragController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_294, $intern_309), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1PickupDragController$SavedWidgetInfo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_294, $intern_310), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_311), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Exception_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_312), com_google_gwt_lang_ClassLiteralHolder_Lcom_1allen_11sauer_1gwt_1dnd_1client_1VetoDragException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_294, $intern_313), com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1animation_1client_1Animation_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2($intern_314, $intern_315), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1Animation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_316, $intern_317), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Timer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_318, $intern_319), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1Animation$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_316, $intern_320), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StringBufferImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_321, $intern_322), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StringBufferImplAppend_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_321, $intern_323), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1RuntimeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_324), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_325, $intern_326), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_325, $intern_327), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1DOMImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_328, $intern_329), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1DOMImplStandard_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_328, $intern_330), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1DOMImplOpera_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_328, $intern_331), com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2($intern_332, $intern_333), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_334, $intern_335), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_336, $intern_337), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1ClickEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_336, $intern_338), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_334, $intern_339), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_336, $intern_340), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1KeyEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_336, $intern_341), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1KeyPressEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_336, $intern_342), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_336, $intern_343), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseDownEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_336, $intern_344), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseMoveEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_336, $intern_345), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseOutEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_336, $intern_346), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseUpEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_336, $intern_347), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1PrivateMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_336, $intern_348), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1CloseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_349, $intern_350), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1DefaultHandlerRegistration_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_334, $intern_351), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_334, $intern_352), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$HandlerRegistry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_334, $intern_353), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_334, $intern_354), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_334, $intern_355), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1gadgets_1client_1DynamicHeightFeature_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_356, $intern_357), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1gadgets_1client_1Gadget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_356, $intern_358), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Enum_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_359), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONValue_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_360, $intern_361), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONArray_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_360, $intern_362), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONBoolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_360, $intern_363), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_360, $intern_364), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNull_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_360, $intern_365), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNumber_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_360, $intern_366), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_360, $intern_367), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_368), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_360, $intern_369), com_google_gwt_lang_ClassLiteralHolder__13_13D_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2($intern_49, $intern_370), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1ElementMapperImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_371, $intern_372), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1ElementMapperImpl$FreeNode_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_371, $intern_373), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1UIObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_375), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_376), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Panel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_377), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ComplexPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_378), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AbsolutePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_379), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FocusWidget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_380), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ButtonBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_381), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Button_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_382), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1CellPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_383), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Composite_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_384), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_385), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_386), com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2($intern_387, $intern_388), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_389), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FlexTable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_390), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$CellFormatter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_391), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FlexTable$FlexCellFormatter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_392), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FocusPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_393), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Label_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_394), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$ColumnFormatter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_395), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_396), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$HorizontalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_397), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasVerticalAlignment$VerticalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_398), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HorizontalPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_399), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1MenuBar_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_400), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1MenuBar_11MenuBarImages_11generatedBundle_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_401), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1MenuItem_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_402), com_google_gwt_lang_ClassLiteralHolder__13C_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2($intern_49, $intern_403), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$AnimationType_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2($intern_374, $intern_404), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$ResizeAnimation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_405), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$ResizeAnimation$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_406), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_407), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_408), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_409), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$DefaultRootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_410), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_411), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_412), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBoxBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_413), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextArea_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_414), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_415), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1VerticalPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_416), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_417), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection$WidgetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_374, $intern_418), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1CommandCanceledException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_318, $intern_419), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1CommandExecutor_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_318, $intern_420), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1CommandExecutor$CircularIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_318, $intern_421), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1CommandExecutor$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_318, $intern_422), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1CommandExecutor$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_318, $intern_423), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Event$NativePreviewEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_318, $intern_424), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Timer$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_318, $intern_425), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$ClosingEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_318, $intern_426), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$WindowHandlers_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_318, $intern_427), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1controller_1ScrumzillaController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_428, $intern_429), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1controller_1ScrumzillaController$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_428, $intern_430), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1controller_1ScrumzillaController$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_428, $intern_431), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1controller_1ScrumzillaController$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_428, $intern_432), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1controller_1ScrumzillaController$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_428, $intern_433), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1events_1ModelChangedEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_434, $intern_435), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1model_1Story_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_436, $intern_245), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1model_1Task_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_436, $intern_437), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1model_1Task$TaskState_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2($intern_436, $intern_438), com_google_gwt_lang_ClassLiteralHolder__13Lcom_1scrumzilla_1client_1model_1Task$TaskState_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2($intern_439, $intern_440), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1taskcontribution_1local_1ScrumzillaLocalTaskEditingUI_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_441, $intern_442), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1taskcontribution_1local_1ScrumzillaLocalTaskTypeContribution_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_441, $intern_443), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddStoryPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_445), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddStoryPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_446), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddStoryPanel$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_447), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddStoryPanel$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_448), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddStoryPanel$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_449), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddTaskToStoryPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_450), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddTaskToStoryPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_451), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddTaskToStoryPanel$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_452), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddTaskToStoryPanel$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_453), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1AddTaskToStoryPanel$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_454), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1ScrumzillaUI_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_455), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1StoryTitlePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_456), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1StoryTitlePanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_457), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1TaskPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_458), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1TaskPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_459), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1TasksInStatePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_460), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ui_1TasksInStatePanel$TaskListDropController_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_444, $intern_461), com_google_gwt_lang_ClassLiteralHolder_Lorg_1cobogw_1gwt_1waveapi_1gadget_1client_1WaveGadget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_462, $intern_463), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1wave_1ScrumzillaWaveGadget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_464, $intern_465), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1wave_1ScrumzillaWaveGadget$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_464, $intern_466), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1wave_1ScrumzillaWaveGadgetGadgetImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_464, $intern_467), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1wave_1ScrumzillaWaveStateUpdateHandler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_464, $intern_468), com_google_gwt_lang_ClassLiteralHolder_Lcom_1scrumzilla_1client_1ScrumzillaTaskTypeRegistry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_469, $intern_470), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArithmeticException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_471), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_472), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayStoreException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_473), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_474), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Number_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_475), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Class_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_476), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ClassCastException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_477), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_478), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalArgumentException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_479), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalStateException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_480), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NullPointerException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_481), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_52), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringBuffer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_482), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1UnsupportedOperationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_275, $intern_483), com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Object_12_1classLit = java_lang_Class_createForArray__Ljava_lang_String_2Ljava_lang_String_2($intern_332, $intern_484), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_485), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_486), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_487), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_488), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMapEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_489), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$MapEntryNull_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_490), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$MapEntryString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_491), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$IteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_492), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_493), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_494), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Comparators$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_495), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_496), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_497), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1MapEntryImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_498), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1NoSuchElementException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_499), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Vector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_298, $intern_500), com_google_gwt_lang_ClassLiteralHolder_Lorg_1cobogw_1gwt_1waveapi_1gadget_1client_1StateUpdateEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_462, $intern_501), com_google_gwt_lang_ClassLiteralHolder_Lorg_1cobogw_1gwt_1waveapi_1gadget_1client_1WaveFeature_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_462, $intern_502), com_google_gwt_lang_ClassLiteralHolder_Lorg_1cobogw_1gwt_1waveapi_1gadget_1client_1WaveFeature$WaveEventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_462, $intern_503);
$stats && $stats({moduleName:'scrumzilla',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (scrumzilla) scrumzilla.onScriptLoad(gwtOnLoad);
})();
