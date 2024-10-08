/**
 * @props className (optional): 'mt20' (String)
 * @props label: 'Border Settings' (String)
 * @props border: { width, style, color, side, radius } (Object)
 * @props onChange: (Function)
 * @props defaults (optional): { width, style, color, side, radius } (Object)
 * @return Border Properties (Object)
 */

import {
  Button,
  Dropdown,
  PanelRow,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {Label} from "../Label/Label";
import { borderStyles, emUnit, perUnit, pxUnit, remUnit, sides } from "../../utils/options";
import { PanelColorPicker } from "../PanelColorPicker/PanelColorPicker";

export const BorderControl = (props) => {
  const {
    className = "",
    label = __("Border:", "bplugins"),
    value,
    onChange,
    defaults = {},
  } = props;

  const defaultVal = {
    width: "0px",
    style: "solid",
    color: "#0000",
    side: "all",
    radius: "0px",
  };

  const getDefault = (property) => defaults?.[property] || defaultVal[property];
  const setDefault = (property) =>
    onChange({ ...value, [property]: getDefault(property) });

  const getValue = (property) => value?.[property] || getDefault(property);
  const setValue = (property, val) => onChange({ ...value, [property]: val });
  const resetValue = (property) => (
    <Button
      icon="image-rotate"
      className="bPlResetVal"
      onClick={() => setDefault(property)}
    />
  );

  return (
    <PanelRow className={`bPlDropdown ${className}`}>
      <Label className="mt5">{label}</Label>

      <Dropdown
        className="bPlDropdownContainer"
        contentClassName="bPlDropdownPopover"
        popoverProps={{ placement: "bottom-end" }}
        renderToggle={({ isOpen, onToggle }) => (
          <Button icon="edit" onClick={onToggle} aria-expanded={isOpen} />
        )}
        renderContent={() => (
          <>
            <PanelRow>
              <UnitControl
                label={__("Width:", "bplugins")}
                labelPosition="left"
                value={getValue("width")}
                onChange={(val) => setValue("width", val)}
                units={[pxUnit(), emUnit()]}
              />
              {value?.width &&
                value?.width !== getDefault("width") &&
                resetValue("width")}
            </PanelRow>

            <PanelRow>
              <Label className="">{__("Style:", "bplugins")}</Label>
              <SelectControl
                value={getValue("style")}
                onChange={(val) => setValue("style", val)}
                options={borderStyles}
              />
              {value?.style &&
                value?.style !== getDefault("style") &&
                resetValue("style")}
            </PanelRow>

            <PanelColorPicker
              label={__("Color:", "bplugins")}
              value={getValue("color")}
              onChange={(val) => setValue("color", val)}
              defaultColor={getDefault("color")}
            />

            <PanelRow>
              <Label className="">{__("Sides:", "bplugins")}</Label>
              <SelectControl
                value={getValue("side")}
                onChange={(val) => setValue("side", val)}
                options={sides}
              />
              {value?.side &&
                value?.side !== getDefault("side") &&
                resetValue("side")}
            </PanelRow>

            <PanelRow>
              <UnitControl
                label={__("Radius:", "bplugins")}
                labelPosition="left"
                value={getValue("radius")}
                onChange={(val) => setValue("radius", val)}
                units={[pxUnit(50), perUnit(50), emUnit(3), remUnit(3)]}
                isResetValueOnUnitChange={true}
              />
              {value?.radius &&
                value?.radius !== getDefault("radius") &&
                resetValue("radius")}
            </PanelRow>
          </>
        )}
      />
    </PanelRow>
  );
};
