package org.generation.SpringBootAssessment.service;

import org.generation.SpringBootAssessment.repository.entity.*;
import java.util.List;

public interface ItemService
{
    Item save (Item item);
    void delete (int itemId);
    List<Item> all();
    Item findById (int itemId);
}
