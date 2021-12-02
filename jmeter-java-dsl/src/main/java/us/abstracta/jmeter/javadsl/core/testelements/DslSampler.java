package us.abstracta.jmeter.javadsl.core.testelements;

import java.util.Collections;
import org.apache.jmeter.gui.JMeterGUIComponent;
import us.abstracta.jmeter.javadsl.core.DslTestElement;
import us.abstracta.jmeter.javadsl.core.threadgroups.BaseThreadGroup.ThreadGroupChild;
import us.abstracta.jmeter.javadsl.http.DslHttpSampler;

/**
 * Hosts common logic to all samplers.
 * <p>
 * In particular it specifies that samplers are {@link ThreadGroupChild} and {@link
 * TestElementContainer} containing {@link SamplerChild}.
 * <p>
 * For an example of an implementation of a sampler check {@link DslHttpSampler}.
 *
 * @since 0.1
 */
public abstract class DslSampler extends
    TestElementContainer<DslSampler.SamplerChild> implements ThreadGroupChild {

  protected DslSampler(String name, Class<? extends JMeterGUIComponent> guiClass) {
    super(name, guiClass, Collections.emptyList());
  }

  /**
   * Test elements which can be nested as children of a sampler in JMeter, should implement this
   * interface.
   */
  public interface SamplerChild extends DslTestElement {

  }

}
